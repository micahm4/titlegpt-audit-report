// reportData.ts
// TitleGPT.ai — Her Title Collective Brand Audit · June 2026
// Source: HerTitleCollective_BrandAudit_2026.pdf (real audit, verbatim)
// Micah Muir · Frontend Intern · June 2026
//
// REPLACE with live data from Metin's backend endpoint once integrated.
// The shape of this object must match AuditReport in reportTypes.ts.

import type { AuditReport } from "./reportTypes";

export const susanAudit: AuditReport = {
  // ─── Block 1 — Header ────────────────────────────────────────────────────
  preparedFor: "Susan Stewart-Magana",
  brand: "Her Title Collective (a.k.a. Women of Title)",
  websiteUrl: "hertitlecollective.com",
  linkedinUrl: "linkedin.com/company/womenoftitle",
  linkedinFollowers: 3733,
  market: "National · HQ: Houston, TX",
  overallScore: 4.6,
  date: "June 14, 2026",

  // ─── Block 2 — Executive Summary ─────────────────────────────────────────
  executiveSummary:
    "Her Title Collective (born as Women of Title) is one of the most distinctive community brands in the title insurance industry — a women-first media platform, magazine publisher, and professional network with 3,733 LinkedIn followers, 85+ published Feature Friday stories, 6 issues of Her. Magazine, and a quarterly publishing cadence that most title companies can only dream of. Susan has built something genuinely rare: a lifestyle brand with industry credibility. However, the platform is being held back by a significant gap between its content strength and its technical execution. No H1 on the homepage. No meta descriptions. Multiple broken nav links. A brand name in mid-transition (Women of Title → Her. The Title Collective) with inconsistent handles across all platforms. The community is real — the digital infrastructure needs a focused sprint to match Susan's vision.",

  // ─── Block 3 — Scorecard ─────────────────────────────────────────────────
  scorecard: [
    {
      label: "Content Volume & Quality",
      score: 8.0,
      description: "85+ stories, 6 magazine issues — exceptional for any industry brand",
    },
    {
      label: "Community & Social Proof",
      score: 7.0,
      description: "3,733 LinkedIn followers, national ambassador program, active posting",
    },
    {
      label: "Brand Identity & Voice",
      score: 7.0,
      description: "Warm, distinctive teal palette + \"Her.\" identity — not fully transitioned",
    },
    {
      label: "Messaging Clarity",
      score: 6.0,
      description: "Mission clear to insiders; less clear to a first-time visitor",
    },
    {
      label: "Website UX & Architecture",
      score: 3.0,
      description: "Wix platform, broken nav links, asterisks in nav, no H1 on homepage",
    },
    {
      label: "SEO / Technical",
      score: 2.0,
      description: "No meta descriptions, no H1 homepage, no Organization schema, Wix ceiling",
    },
    {
      label: "Trust Indicators",
      score: 3.0,
      description: "No testimonials, reviews, press logos, or social proof counters on site",
    },
    {
      label: "Brand Architecture Clarity",
      score: 3.0,
      description: "\"Women of Title\" → \"Her. Collective\" transition incomplete across all channels",
    },
    {
      label: "Business Model Visibility",
      score: 3.0,
      description: "Cart enabled but unclear — membership, events, subscriptions not surfaced",
    },
  ],

  // ─── Block 4 — Strengths ─────────────────────────────────────────────────
  strengths: [
    {
      label: "Content engine is real",
      detail:
        "85 Feature Friday spotlights + 6 magazine issues + quarterly publishing = more content than most title companies produce in a decade.",
    },
    {
      label: "LinkedIn traction",
      detail:
        "3,733 followers for a niche industry nonprofit is genuinely impressive — most title companies top out at 500.",
    },
    {
      label: "Brand voice is distinct",
      detail:
        "\"Her. Collective\" aesthetic — champagne, teal, celebration, empowerment — stands apart from every corporate title brand.",
    },
    {
      label: "Ambassador program",
      detail: "Built-in distribution network if activated properly.",
    },
    {
      label: "Magazine as anchor",
      detail:
        "Issue #6 is a recurring credibility marker — few industry brands publish anything this sophisticated.",
    },
    {
      label: "National reach",
      detail:
        "Houston HQ but story subjects span AZ, TX, and beyond — correct positioning for a nationwide movement.",
    },
    {
      label: "Authentic founder story",
      detail:
        "Susan's origin (\"coffee chats at conventions\") is genuinely compelling — just buried.",
    },
  ],

  // ─── Block 5 — Gaps ──────────────────────────────────────────────────────
  gapGroups: [
    {
      groupLabel: "Website / Technical",
      items: [
        {
          label: "No H1 tag on homepage",
          detail:
            "Foundational SEO failure; Google cannot understand what the page is about.",
          priority: "moderate",
        },
        {
          label: "Zero meta descriptions sitewide",
          detail:
            "Every page appears as truncated text in search results.",
          priority: "moderate",
        },
        {
          label: "Multiple nav items return 404s",
          detail:
            "Engage, Her Magazine, Her Stories direct URLs — losing visitors and crawl equity.",
          priority: "moderate",
        },
        {
          label: "Asterisks visible in nav",
          detail:
            "*Her. Stories, *Her. Magazine visible in nav — signals an unfinished product to every visitor.",
          priority: "critical",
        },
        {
          label: "Built on Wix",
          detail:
            "Significant ceiling on technical SEO, speed, and custom development.",
          priority: "critical",
        },
        {
          label: "Only basic WebSite schema",
          detail:
            "No Organization, Person, or LocalBusiness markup.",
          priority: "critical",
        },
      ],
    },
    {
      groupLabel: "Brand Architecture",
      items: [
        {
          label: "Copyright footer still reads \"© 2022 by the Women of Title\"",
          detail: "Inconsistent with Her. Collective rebrand.",
          priority: "critical",
        },
        {
          label: "Social handles still use @womenoftitleofficial",
          detail: "Brand transition incomplete across Instagram, Facebook, and LinkedIn.",
          priority: "critical",
        },
        {
          label: "No \"About Susan\" or founder bio page",
          detail:
            "The woman behind the brand is invisible to newcomers.",
          priority: "critical",
        },
        {
          label: "No link between Her Title Collective and Susan's AmTrust role",
          detail: "Missed credibility transfer.",
          priority: "critical",
        },
      ],
    },
    {
      groupLabel: "Conversion & Business Model",
      items: [
        {
          label: "Wix cart is enabled but no clear offers are visible",
          detail:
            "What can you buy? Event tickets? Magazine subscription? Membership? Unclear.",
          priority: "critical",
        },
        {
          label: "No testimonials or social proof on homepage",
          detail:
            "3,700+ followers, 85+ stories, 6 issues — none of this is visible on the homepage.",
          priority: "critical",
        },
        {
          label: "No press room or media kit",
          detail:
            "No \"As Seen In\" bar despite being publishable media content.",
          priority: "critical",
        },
        {
          label: "Email subscribe form has no follow-up sequence",
          detail:
            "Captures name + state but no follow-up sequence is surfaced.",
          priority: "critical",
        },
      ],
    },
  ],

  // ─── Block 6 — Positioning & Opportunity ─────────────────────────────────
  positioningParagraphs: [
    "There is no direct competitor doing what Her Title Collective does at this scale. Women's networks in title insurance are typically local, conference-based, or dormant LinkedIn groups. Susan has built the only platform with a magazine, a content archive, a national ambassador model, and a consistent publishing rhythm. That is a significant first-mover advantage.",
    "The risk is that the infrastructure doesn't match the vision. A brand at this stage — with real community and real content — should be converting followers into members, sponsors into recurring partners, and stories into SEO traffic. Right now, none of those conversion loops are visible or optimized.",
  ],

  // ─── Block 7 — Top 10 Recommendations ────────────────────────────────────
  recommendations: [
    {
      number: 1,
      title: "Fix All Broken Navigation Links Immediately",
      description:
        "Multiple nav items 404 on direct URL access. Remove asterisks from \"Her. Stories\" and \"Her. Magazine\" nav labels — they signal an unfinished product. Audit every page using the Wix URL manager and ensure each nav item routes correctly. Test on mobile and desktop.",
      timeline: "48 Hours",
    },
    {
      number: 2,
      title: "Add H1 Tags and Meta Descriptions Sitewide",
      description:
        "Homepage has zero H1 tags — the single biggest technical SEO failure on the site. Add a keyword-rich H1 to the homepage (e.g., \"Her Title Collective — Women Leading Title Insurance Nationwide\"). Write meta descriptions for every page. These are basic Wix settings and take under 2 hours to implement.",
      timeline: "1 Week",
    },
    {
      number: 3,
      title: "Complete the Brand Name Transition",
      description:
        "Update the footer copyright from \"Women of Title\" to \"Her Title Collective.\" Request Instagram and Facebook handle updates (@hertitlecollective or similar). Ensure LinkedIn page name matches exactly. A brand mid-transition confuses new visitors and weakens SEO signal consistency.",
      timeline: "2 Weeks",
    },
    {
      number: 4,
      title: "Build an \"About Susan\" Founder Page",
      description:
        "Susan's name appears once on the homepage (\"Susan\") with no last name, no bio, no story. A founder page with her full background, her AmTrust role, and her why creates personal brand equity, builds trust with sponsors and prospective members, and gives press a place to start.",
      timeline: "1–2 Weeks",
    },
    {
      number: 5,
      title: "Add Social Proof to the Homepage",
      description:
        "You have 3,733 LinkedIn followers, 85+ published stories, and 6 magazine issues. None of this is visible on the homepage. Add: follower count, story count, magazine issue count, and 2–3 member/ambassador testimonials above the fold. Social proof is the fastest homepage conversion lever.",
      timeline: "1 Week",
    },
    {
      number: 6,
      title: "Launch a Membership Tier or Sponsor Package",
      description:
        "The Wix cart is enabled but nothing is clearly for sale. Build one simple offer: a founding member tier ($X/year for early access to Her. Magazine, ambassador status, featured in a Feature Friday), or a sponsor package for title vendors (logo in magazine, LinkedIn mention, event presence). A single clear offer doubles the platform's business model.",
      timeline: "3–4 Weeks",
    },
    {
      number: 7,
      title: "Optimize 85+ Feature Friday Posts for SEO",
      description:
        "You have 85+ stories — each one is a potential Google search result for a specific woman's name or company. Add proper title tags, meta descriptions, and H1 headers to each story post. Wix Blog supports this natively. Done right, this archive becomes organic inbound traffic for years.",
      timeline: "4–6 Weeks",
    },
    {
      number: 8,
      title: "Create a Media Kit and Press Page",
      description:
        "Any brand at Issue #6 of a quarterly magazine should have a media kit. Build a simple /press page with: download link for a one-page media kit (logo, stats, audience demographics, sponsorship tiers, contact info). This professionalizes sponsor conversations and invites earned media coverage.",
      timeline: "2–3 Weeks",
    },
    {
      number: 9,
      title: "Add Organization Schema to Every Page",
      description:
        "Adding JSON-LD Organization schema with name, URL, logo, social profiles, and description to every page takes under an hour in Wix custom code. It tells Google exactly what Her Title Collective is — improving rich results, knowledge panel eligibility, and brand authority signals.",
      timeline: "1 Week",
    },
    {
      number: 10,
      title: "Build an Email Welcome Sequence for New Subscribers",
      description:
        "The footer form captures name, state, and email — but there's no visible email journey after subscribe. Build a 3-email sequence: (1) Welcome + Her. Magazine download, (2) Feature Friday spotlight + ambassador invite, (3) upcoming event or sponsor spotlight. Turns passive sign-ups into engaged community members.",
      timeline: "2–3 Weeks",
    },
  ],
};
