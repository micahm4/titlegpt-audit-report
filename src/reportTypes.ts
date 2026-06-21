// reportTypes.ts
// TitleGPT.ai — Audit Report Type Definitions
// Micah Muir · Frontend Intern · June 2026
//
// These types define the shape of the JSON object that Metin's backend
// will eventually send. For now, reportData.ts supplies hardcoded data
// that matches this contract exactly.

export type GapPriority = "moderate" | "critical";

export interface ScorecardRow {
  label: string;
  score: number; // 0–10, one decimal
  description: string;
}

export interface Strength {
  label: string;       // short bold label, e.g. "Content engine is real"
  detail: string;      // one-sentence explanation
}

export interface Gap {
  label: string;
  detail: string;
  priority: GapPriority;
}

export interface GapGroup {
  groupLabel: string;  // e.g. "Website / Technical"
  items: Gap[];
}

export interface Recommendation {
  number: number;      // 1–10
  title: string;
  description: string;
  timeline: string;    // "48 Hours" | "1 Week" | "2–3 Weeks" | "3–4 Weeks" | "4–6 Weeks"
}

export interface AuditReport {
  // Block 1 — Header
  preparedFor: string;
  brand: string;
  websiteUrl: string;
  linkedinUrl: string;
  linkedinFollowers: number;
  market: string;
  overallScore: number;
  date: string;

  // Block 2 — Executive Summary
  executiveSummary: string;

  // Block 3 — Scorecard (8 category rows; Overall is derived from overallScore above)
  scorecard: ScorecardRow[];

  // Block 4 — Strengths
  strengths: Strength[];

  // Block 5 — Gaps
  gapGroups: GapGroup[];

  // Block 6 — Positioning & Opportunity
  positioningParagraphs: string[];

  // Block 7 — Top 10 Recommendations
  recommendations: Recommendation[];
}
