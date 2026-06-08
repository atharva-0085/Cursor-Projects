import { audienceCategories } from '../data/audienceAttributes'
import type { ConfidenceLevel, Recommendation } from '../types/audience'

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

function scoreKeyword(prompt: string, keyword: string): { score: number; isPhrase: boolean } {
  const normalizedKeyword = normalize(keyword)
  if (!normalizedKeyword) return { score: 0, isPhrase: false }

  if (prompt.includes(normalizedKeyword)) {
    const isPhrase = normalizedKeyword.includes(' ')
    return { score: isPhrase ? 3 : 2, isPhrase }
  }

  const keywordParts = normalizedKeyword.split(' ')
  if (keywordParts.length > 1) {
    const matchedParts = keywordParts.filter(
      (part) => part.length > 2 && prompt.split(' ').some((word) => word.startsWith(part) || part.startsWith(word)),
    )
    if (matchedParts.length === keywordParts.length) {
      return { score: 1.5, isPhrase: false }
    }
    if (matchedParts.length > 0) {
      return { score: matchedParts.length * 0.5, isPhrase: false }
    }
  }

  const promptWords = prompt.split(' ')
  for (const word of promptWords) {
    if (word.length < 3) continue
    if (word === normalizedKeyword || word.startsWith(normalizedKeyword) || normalizedKeyword.startsWith(word)) {
      return { score: 1, isPhrase: false }
    }
  }

  return { score: 0, isPhrase: false }
}

export function generateRecommendations(goal: string): Recommendation[] {
  const normalizedGoal = normalize(goal)
  if (!normalizedGoal) return []

  const recommendations: Recommendation[] = []

  for (const category of audienceCategories) {
    for (const attribute of category.attributes) {
      let totalScore = 0
      let hasPhraseMatch = false

      for (const keyword of attribute.keywords) {
        const { score, isPhrase } = scoreKeyword(normalizedGoal, keyword)
        totalScore += score
        if (isPhrase) hasPhraseMatch = true
      }

      if (totalScore > 0) {
        recommendations.push({
          attribute,
          category: category.name,
          confidence: getConfidence(totalScore, hasPhraseMatch),
          score: totalScore,
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
