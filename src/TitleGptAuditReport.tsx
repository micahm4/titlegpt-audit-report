// TitleGptAuditReport.tsx
// TitleGPT.ai — Audit Report Display Component
// Micah Muir · Frontend Intern · June 2026
//
// Accepts an AuditReport object as props and renders the full branded
// report UI. No backend calls, no form logic — display only.
// Mobile-first. TitleGPT.ai brand colors throughout.
//
// To run: import { susanAudit } from "./reportData"
//         <TitleGptAuditReport report={susanAudit} />

import React from "react";
import type { AuditReport, ScorecardRow } from "./reportTypes";

// ─── Color helpers ────────────────────────────────────────────────────────────

function scoreColor(score: number): string {
  if (score >= 7.0) return "#2DD4BF"; // teal  — Strong
  if (score >= 4.0) return "#F59E0B"; // amber — Needs Work
  return "#EF4444";                   // red   — Critical Gap
}

function scoreBg(score: number): string {
  if (score >= 7.0) return "rgba(45,212,191,0.10)";
  if (score >= 4.0) return "rgba(245,158,11,0.10)";
  return "rgba(239,68,68,0.10)";
}

function scoreLabel(score: number): string {
  if (score >= 7.0) return "Strong";
  if (score >= 4.0) return "Needs Work";
  return "Critical Gap";
}

function timelineColor(timeline: string): string {
  const t = timeline.toLowerCase();
  if (t.includes("48")) return "#EF4444";
  if (t === "1 week") return "#F59E0B";
  return "#2DD4BF";
}

function timelineBg(timeline: string): string {
  const t = timeline.toLowerCase();
  if (t.includes("48")) return "rgba(239,68,68,0.12)";
  if (t === "1 week") return "rgba(245,158,11,0.12)";
  return "rgba(45,212,191,0.12)";
}

// ─── Shared style tokens ──────────────────────────────────────────────────────

const PURPLE = "#7B2FBE";
const TEAL   = "#2DD4BF";
const DARK   = "#0F0F1A";
const WHITE  = "#FFFFFF";
const GRAY50 = "#F8F8FC";
const GRAY100 = "#EDEDF5";
const GRAY400 = "#9E9EB8";
const GRAY700 = "#3D3D5C";
const GRAY900 = "#1A1A2E";

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Score bar row used in the scorecard */
function ScorecardRowItem({ row, isOverall }: { row: ScorecardRow; isOverall?: boolean }) {
  const color  = scoreColor(row.score);
  const bg     = scoreBg(row.score);
  const pct    = `${(row.score / 10) * 100}%`;

  if (isOverall) {
    return (
      <div style={{
        background: bg,
        border: `2px solid ${color}`,
        borderRadius: 16,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        marginTop: 8,
      }}>
        <div style={{ flexShrink: 0, textAlign: "center" }}>
          <div style={{
            fontSize: 42,
            fontWeight: 800,
            color,
            lineHeight: 1,
            letterSpacing: "-1px",
          }}>
            {row.score.toFixed(1)}
          </div>
          <div style={{ fontSize: 13, color: GRAY400, fontWeight: 600 }}>/10</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: GRAY900, marginBottom: 6 }}>
            {row.label}
          </div>
          <div style={{
            height: 10,
            background: GRAY100,
            borderRadius: 99,
            overflow: "hidden",
            marginBottom: 6,
          }}>
            <div style={{
              width: pct,
              height: "100%",
              background: color,
              borderRadius: 99,
              transition: "width 0.6s ease",
            }} />
          </div>
          <div style={{ fontSize: 13, color: GRAY700 }}>{row.description}</div>
        </div>
        <div style={{
          flexShrink: 0,
          background: bg,
          border: `1.5px solid ${color}`,
          borderRadius: 99,
          padding: "4px 12px",
          fontSize: 12,
          fontWeight: 700,
          color,
          letterSpacing: "0.3px",
          whiteSpace: "nowrap",
        }}>
          {scoreLabel(row.score)}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: WHITE,
      border: `1px solid ${GRAY100}`,
      borderLeft: `4px solid ${color}`,
      borderRadius: "0 12px 12px 0",
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      gap: 14,
    }}>
      {/* Score pill */}
      <div style={{
        flexShrink: 0,
        minWidth: 52,
        textAlign: "center",
        background: bg,
        borderRadius: 10,
        padding: "6px 8px",
      }}>
        <div style={{ fontSize: 20, fontWeight: 800, color, lineHeight: 1 }}>
          {row.score.toFixed(1)}
        </div>
        <div style={{ fontSize: 10, color: GRAY400, fontWeight: 600, marginTop: 1 }}>/10</div>
      </div>
      {/* Bar + label */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontWeight: 700,
          fontSize: 14,
          color: GRAY900,
          marginBottom: 5,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {row.label}
        </div>
        <div style={{
          height: 7,
          background: GRAY100,
          borderRadius: 99,
          overflow: "hidden",
          marginBottom: 5,
        }}>
          <div style={{
            width: pct,
            height: "100%",
            background: color,
            borderRadius: 99,
          }} />
        </div>
        <div style={{ fontSize: 12, color: GRAY400, lineHeight: 1.4 }}>{row.description}</div>
      </div>
    </div>
  );
}

/** Section heading with purple left-accent rule */
function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        color: PURPLE,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        marginBottom: 4,
      }}>
        {number}
      </div>
      <h2 style={{
        margin: 0,
        fontSize: 26,
        fontWeight: 800,
        color: GRAY900,
        letterSpacing: "-0.4px",
      }}>
        {title}
      </h2>
      <div style={{
        width: 48,
        height: 3,
        background: `linear-gradient(90deg, ${PURPLE}, ${TEAL})`,
        borderRadius: 99,
        marginTop: 10,
      }} />
    </div>
  );
}

/** Wrapper section card */
function Section({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <section style={{
      padding: "48px 20px",
      maxWidth: 680,
      margin: "0 auto",
      ...style,
    }}>
      {children}
    </section>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

interface Props {
  report: AuditReport;
}

export function TitleGptAuditReport({ report }: Props) {
  const overallRow: ScorecardRow = {
    label: "Overall Score",
    score: report.overallScore,
    description: "Composite score across all nine brand categories",
  };

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: GRAY50,
      minHeight: "100vh",
      color: GRAY900,
    }}>

      {/* ── BLOCK 1 — HEADER / COVER ─────────────────────────────────────── */}
      <header style={{
        background: DARK,
        paddingTop: 48,
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative gradient orbs */}
        <div style={{
          position: "absolute", top: -60, right: -60,
          width: 320, height: 320,
          background: `radial-gradient(circle, ${PURPLE}33 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: -40,
          width: 240, height: 240,
          background: `radial-gradient(circle, ${TEAL}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 20px 40px" }}>
          {/* Logo / brand mark */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 36,
          }}>
            <div style={{
              width: 32, height: 32,
              background: `linear-gradient(135deg, ${PURPLE}, ${TEAL})`,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 900,
              color: WHITE,
            }}>T</div>
            <span style={{ color: WHITE, fontWeight: 800, fontSize: 16 }}>
              <span style={{ color: WHITE }}>TitleGPT</span>
              <span style={{ color: TEAL }}>.ai</span>
            </span>
          </div>

          {/* Eyebrow */}
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: TEAL,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: 12,
          }}>
            Brand Audit Report
          </div>

          {/* Name */}
          <h1 style={{
            margin: "0 0 8px",
            fontSize: "clamp(28px, 7vw, 42px)",
            fontWeight: 900,
            color: WHITE,
            lineHeight: 1.1,
            letterSpacing: "-0.8px",
          }}>
            {report.preparedFor}
          </h1>

          <div style={{
            fontSize: 16,
            color: TEAL,
            fontWeight: 600,
            marginBottom: 32,
          }}>
            {report.brand}
          </div>

          {/* Meta grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px 20px",
            marginBottom: 32,
          }}>
            {[
              { label: "Website", value: report.websiteUrl },
              { label: "Market", value: report.market },
              {
                label: "LinkedIn",
                value: `${report.linkedinFollowers.toLocaleString()} followers`,
              },
              { label: "Date", value: report.date },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: 10, color: GRAY400, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 2 }}>
                  {label}
                </div>
                <div style={{ fontSize: 13, color: WHITE, fontWeight: 500 }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Overall score hero */}
          <div style={{
            background: "rgba(255,255,255,0.05)",
            border: `1px solid rgba(255,255,255,0.1)`,
            borderRadius: 20,
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}>
            <div style={{ position: "relative" }}>
              <svg width="88" height="88" viewBox="0 0 88 88" style={{ display: "block" }}>
                <circle cx="44" cy="44" r="38" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                <circle
                  cx="44" cy="44" r="38"
                  fill="none"
                  stroke={scoreColor(report.overallScore)}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 38 * (report.overallScore / 10)} ${2 * Math.PI * 38}`}
                  strokeDashoffset={2 * Math.PI * 38 * 0.25}
                  style={{ transform: "rotate(-90deg)", transformOrigin: "44px 44px" }}
                />
                <text x="44" y="48" textAnchor="middle" fill={WHITE} fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif">
                  {report.overallScore.toFixed(1)}
                </text>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 12, color: GRAY400, fontWeight: 600, marginBottom: 4 }}>
                Overall Brand Score
              </div>
              <div style={{
                fontSize: 18,
                fontWeight: 800,
                color: scoreColor(report.overallScore),
                marginBottom: 4,
              }}>
                {scoreLabel(report.overallScore)}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>
                Composite across 9 brand categories
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade transition */}
        <div style={{
          height: 32,
          background: `linear-gradient(to bottom, transparent, ${GRAY50})`,
        }} />
      </header>

      {/* ── BLOCK 2 — EXECUTIVE SUMMARY ──────────────────────────────────── */}
      <Section>
        <SectionHeader number="01" title="Executive Summary" />
        <div style={{
          background: WHITE,
          border: `1px solid ${GRAY100}`,
          borderLeft: `5px solid ${PURPLE}`,
          borderRadius: "0 16px 16px 0",
          padding: "24px 24px 24px 28px",
          position: "relative",
        }}>
          <div style={{
            position: "absolute",
            top: 20, right: 20,
            fontSize: 48,
            color: PURPLE,
            opacity: 0.08,
            lineHeight: 1,
            fontWeight: 900,
            userSelect: "none",
          }}>"</div>
          <p style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.75,
            color: GRAY700,
            fontStyle: "italic",
          }}>
            {report.executiveSummary}
          </p>
        </div>
      </Section>

      {/* ── BLOCK 3 — BRAND SCORECARD ────────────────────────────────────── */}
      <div style={{ background: WHITE, borderTop: `1px solid ${GRAY100}`, borderBottom: `1px solid ${GRAY100}` }}>
        <Section>
          <SectionHeader number="02" title="Brand Scorecard" />
          <p style={{ margin: "0 0 24px", fontSize: 14, color: GRAY400 }}>
            Nine categories scored 0–10. Color indicates performance tier.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {report.scorecard.map((row) => (
              <ScorecardRowItem key={row.label} row={row} />
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <ScorecardRowItem row={overallRow} isOverall />
          </div>
          {/* Legend */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 20px",
            marginTop: 20,
            paddingTop: 16,
            borderTop: `1px solid ${GRAY100}`,
          }}>
            {[
              { color: "#2DD4BF", label: "Strong (7.0–10)" },
              { color: "#F59E0B", label: "Needs Work (4.0–6.9)" },
              { color: "#EF4444", label: "Critical Gap (0–3.9)" },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 99, background: color }} />
                <span style={{ fontSize: 12, color: GRAY400 }}>{label}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── BLOCK 4 — STRENGTHS ──────────────────────────────────────────── */}
      <Section>
        <SectionHeader number="03" title="What's Working" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {report.strengths.map((s) => (
            <div key={s.label} style={{
              background: WHITE,
              border: `1px solid ${GRAY100}`,
              borderLeft: `4px solid ${TEAL}`,
              borderRadius: "0 12px 12px 0",
              padding: "14px 18px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}>
              <div style={{
                flexShrink: 0,
                width: 22,
                height: 22,
                background: `rgba(45,212,191,0.12)`,
                borderRadius: 99,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 1,
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: GRAY900, marginBottom: 3 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 13, color: GRAY700, lineHeight: 1.6 }}>
                  {s.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── BLOCK 5 — GAPS ───────────────────────────────────────────────── */}
      <div style={{ background: WHITE, borderTop: `1px solid ${GRAY100}`, borderBottom: `1px solid ${GRAY100}` }}>
        <Section>
          <SectionHeader number="04" title="What Needs Attention" />

          {/* Priority legend */}
          <div style={{
            display: "flex",
            gap: 16,
            marginBottom: 28,
            flexWrap: "wrap",
          }}>
            {[
              { icon: "■", color: "#F59E0B", label: "Moderate" },
              { icon: "■■", color: "#EF4444", label: "Critical" },
            ].map(({ icon, color, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color, fontSize: 11, fontWeight: 700 }}>{icon}</span>
                <span style={{ fontSize: 12, color: GRAY400 }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {report.gapGroups.map((group) => (
              <div key={group.groupLabel}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: PURPLE,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                  paddingLeft: 4,
                }}>
                  {group.groupLabel}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {group.items.map((gap) => {
                    const isCritical = gap.priority === "critical";
                    const borderColor = isCritical ? "#EF4444" : "#F59E0B";
                    const bgColor = isCritical ? "rgba(239,68,68,0.04)" : "rgba(245,158,11,0.04)";
                    return (
                      <div key={gap.label} style={{
                        background: bgColor,
                        border: `1px solid ${borderColor}22`,
                        borderLeft: `4px solid ${borderColor}`,
                        borderRadius: "0 12px 12px 0",
                        padding: "12px 16px",
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                      }}>
                        <span style={{
                          flexShrink: 0,
                          fontSize: 10,
                          fontWeight: 700,
                          color: borderColor,
                          marginTop: 3,
                          letterSpacing: "-1px",
                        }}>
                          {isCritical ? "■■" : "■"}
                        </span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 13, color: GRAY900, marginBottom: 3 }}>
                            {gap.label}
                          </div>
                          <div style={{ fontSize: 12, color: GRAY700, lineHeight: 1.6 }}>
                            {gap.detail}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── BLOCK 6 — POSITIONING & OPPORTUNITY ─────────────────────────── */}
      <Section>
        <SectionHeader number="05" title="Positioning & Opportunity" />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {report.positioningParagraphs.map((para, i) => (
            <p key={i} style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.8,
              color: GRAY700,
            }}>
              {para}
            </p>
          ))}
        </div>
      </Section>

      {/* ── BLOCK 7 — TOP 10 RECOMMENDATIONS ────────────────────────────── */}
      <div style={{
        background: DARK,
        borderTop: `1px solid rgba(255,255,255,0.06)`,
        paddingBottom: 8,
      }}>
        <Section>
          <div style={{ marginBottom: 24 }}>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              color: TEAL,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 4,
            }}>
              06
            </div>
            <h2 style={{
              margin: "0 0 10px",
              fontSize: 26,
              fontWeight: 800,
              color: WHITE,
              letterSpacing: "-0.4px",
            }}>
              Top 10 Recommendations
            </h2>
            <div style={{
              width: 48,
              height: 3,
              background: `linear-gradient(90deg, ${PURPLE}, ${TEAL})`,
              borderRadius: 99,
            }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {report.recommendations.map((rec) => {
              const tColor = timelineColor(rec.timeline);
              const tBg    = timelineBg(rec.timeline);
              return (
                <div key={rec.number} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "20px 20px 20px 20px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}>
                  {/* Number badge */}
                  <div style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    background: `linear-gradient(135deg, ${PURPLE}, ${TEAL}88)`,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: 900,
                    color: WHITE,
                  }}>
                    {rec.number}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 10,
                      marginBottom: 8,
                      flexWrap: "wrap",
                    }}>
                      <div style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: WHITE,
                        lineHeight: 1.3,
                      }}>
                        {rec.title}
                      </div>
                      {/* Timeline badge */}
                      <div style={{
                        flexShrink: 0,
                        background: tBg,
                        border: `1.5px solid ${tColor}44`,
                        borderRadius: 99,
                        padding: "3px 10px",
                        fontSize: 11,
                        fontWeight: 700,
                        color: tColor,
                        whiteSpace: "nowrap",
                      }}>
                        {rec.timeline}
                      </div>
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: 13,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
                    }}>
                      {rec.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 36,
            background: `linear-gradient(135deg, ${PURPLE}33, ${TEAL}22)`,
            border: `1px solid ${PURPLE}44`,
            borderRadius: 20,
            padding: "28px 24px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: WHITE, marginBottom: 8 }}>
              Want us to implement these recommendations for you?
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
              Book a strategy call with the TitleGPT.ai team.
            </div>
            <a
              href="https://titlegpt.ai/strategy-call"
              style={{
                display: "inline-block",
                background: `linear-gradient(90deg, ${PURPLE}, ${TEAL}BB)`,
                color: WHITE,
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 28px",
                borderRadius: 99,
                textDecoration: "none",
                letterSpacing: "0.2px",
              }}
            >
              Book My Strategy Call →
            </a>
          </div>
        </Section>
      </div>

      {/* ── BLOCK 8 — FOOTER ─────────────────────────────────────────────── */}
      <footer style={{
        background: "#0A0A14",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 20px",
        textAlign: "center",
      }}>
        {/* Logo */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}>
          <div style={{
            width: 24, height: 24,
            background: `linear-gradient(135deg, ${PURPLE}, ${TEAL})`,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 900,
            color: WHITE,
          }}>T</div>
          <span style={{ fontWeight: 800, fontSize: 14 }}>
            <span style={{ color: WHITE }}>TitleGPT</span>
            <span style={{ color: TEAL }}>.ai</span>
          </span>
        </div>

        <div style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
          marginBottom: 4,
        }}>
          Prepared by TitleGPT.ai · Powered by Hermes AI · Confidential
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
          For {report.preparedFor} · {report.date}
        </div>
      </footer>

    </div>
  );
}

export default TitleGptAuditReport;
