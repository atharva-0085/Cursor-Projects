# AudienceAI — Audience Recommendation Assistant

A single-page demo application that shows how AI-assisted audience building could simplify marketing workflows. Marketers describe targeting goals in plain English, and the app recommends relevant audience attributes from predefined marketing categories.

## Features

- Plain-English audience goal input
- Keyword-based recommendation engine (no external AI APIs)
- Attributes grouped by category: Demographics, Geography, Interests, Income, Homeownership, Automotive, Purchase Behavior
- Confidence scores: High, Medium, Low
- Click-to-add attributes to a Suggested Audience panel
- Sample prompts for quick testing
- Responsive, modern UI

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Example

**Input:** `Find parents interested in travel`

**Output:**
- **Demographics:** Presence of Children, Age 30–50
- **Interests:** Travel, Family Activities
- **Purchase Behavior:** Frequent Travelers

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## Build

```bash
npm run build
npm run preview
```
