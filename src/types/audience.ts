export type ConfidenceLevel = 'High' | 'Medium' | 'Low'

export interface AudienceAttribute {
  id: string
  label: string
  keywords: string[]
}

export interface AudienceCategory {
  name: string
  attributes: AudienceAttribute[]
}

export interface Recommendation {
  attribute: AudienceAttribute
  category: string
  confidence: ConfidenceLevel
  score: number
  reason: string
}

export interface SelectedAttribute {
  id: string
  label: string
  category: string
  confidence: ConfidenceLevel
  reason: string
}
