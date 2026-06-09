import { audienceCategories } from '../data/audienceAttributes'
import type { ConfidenceLevel, Recommendation } from '../types/audience'

interface KeywordMatch {
  score: number
  isPhrase: boolean
  matchedTerm: string | null
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getConfidence(score: number, hasPhraseMatch: boolean): ConfidenceLevel {
  if (score >= 3 || hasPhraseMatch) return 'High'
  if (score >= 1.5) return 'Medium'
  return 'Low'
}

function scoreKeyword(prompt: string, keyword: string): KeywordMatch {
  const normalizedKeyword = normalize(keyword)
  if (!normalizedKeyword) return { score: 0, isPhrase: false, matchedTerm: null }

  if (prompt.includes(normalizedKeyword)) {
    const isPhrase = normalizedKeyword.includes(' ')
    return { score: isPhrase ? 3 : 2, isPhrase, matchedTerm: normalizedKeyword }
  }

  const keywordParts = normalizedKeyword.split(' ')
  if (keywordParts.length > 1) {
    const matchedParts = keywordParts.filter(
      (part) => part.length > 2 && prompt.split(' ').some((word) => word.startsWith(part) || part.startsWith(word)),
    )
    if (matchedParts.length === keywordParts.length) {
      return { score: 1.5, isPhrase: false, matchedTerm: normalizedKeyword }
    }
    if (matchedParts.length > 0) {
      return { score: matchedParts.length * 0.5, isPhrase: false, matchedTerm: matchedParts[0] }
    }
  }

  const promptWords = prompt.split(' ')
  for (const word of promptWords) {
    if (word.length < 3) continue
    if (word === normalizedKeyword || word.startsWith(normalizedKeyword) || normalizedKeyword.startsWith(word)) {
      return { score: 1, isPhrase: false, matchedTerm: word }
    }
  }

  return { score: 0, isPhrase: false, matchedTerm: null }
}

function buildReason(matchedTerms: string[]): string {
  const unique = [...new Set(matchedTerms.map((term) => term.toLowerCase()))]

  if (unique.length === 0) {
    return 'Related to themes in your targeting goal.'
  }

  if (unique.length === 1) {
    return `Suggested because your goal mentions "${unique[0]}".`
  }

  if (unique.length === 2) {
    return `Suggested because your goal mentions "${unique[0]}" and "${unique[1]}".`
  }

  return `Suggested because your goal mentions "${unique[0]}", "${unique[1]}", and related terms.`
}

export function generateRecommendations(goal: string): Recommendation[] {
  const normalizedGoal = normalize(goal)
  if (!normalizedGoal) return []

  const recommendations: Recommendation[] = []

  for (const category of audienceCategories) {
    for (const attribute of category.attributes) {
      let totalScore = 0
      let hasPhraseMatch = false
      const matchedTerms: string[] = []

      for (const keyword of attribute.keywords) {
        const { score, isPhrase, matchedTerm } = scoreKeyword(normalizedGoal, keyword)
        totalScore += score
        if (isPhrase) hasPhraseMatch = true
        if (matchedTerm) matchedTerms.push(matchedTerm)
      }

      if (totalScore > 0) {
        recommendations.push({
          attribute,
          category: category.name,
          confidence: getConfidence(totalScore, hasPhraseMatch),
          score: totalScore,
          reason: buildReason(matchedTerms),
        })
      }
    }
  }

  return recommendations.sort((a, b) => b.score - a.score)
}

export function groupByCategory(recommendations: Recommendation[]): Map<string, Recommendation[]> {
  const grouped = new Map<string, Recommendation[]>()

  for (const rec of recommendations) {
    const existing = grouped.get(rec.category) ?? []
    existing.push(rec)
    grouped.set(rec.category, existing)
  }

  return grouped
}
