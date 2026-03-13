import { TCustomer } from "../customers";

export const CustomerPureStorage: TCustomer = {
  id: "pure-storage",
  logo: "/images/clients/logos/pure-storage.svg",
  wwaMaxWidth: 229,
  order: 5,

  industry: 'Energy',
  outcome: 'Performance',
  outcomeTitle: 'Performance (sales) Technology',
  outcomeOrder: 3,

  slide1: {
    bgImage: "/images/clients/bgs/pure-storage-1.webp",
    challenge: {
      title: "Uneven manager capability constrained quota attainment, drove turnover and threatened revenue growth targets",
      text: "As Pure Storage scaled, leadership recognized that traditional sales enablement couldn't develop the manager capabilities needed for consistent team quota performance. The fastest path to growth wasn't hiring more sellers—it was unlocking performance across existing teams through better leadership."
    },
    scale: "~1,000 employees coached since 2019\n~35% of District Managers\n14,000+ coaching sessions completed",
    speedToValue: "18 months to 16% quota attainment lift and $4.24M additional revenue per coached manager team",
    businessImpact: "De-risked revenue concentration\nElevated mid-tier performer capability\nBuilt leadership bench from within",
    withBetterupText: "Manager effectiveness unlocked team performance",
    withBetterupStats: [
      {
        label: "additional revenue annually",
        prefix: "$",
        value: 72,
        suffix: "M",
      },
      {
        label: "quota attainment (coached manager teams vs. 91% for non-coached teams)",
        value: 107,
        suffix: "%",
      },
    ]
  },
  slide2: {
    bgImage: "/images/clients/bgs/pure-storage-1.webp",
    solution: {
      title: "Deployed precision coaching to strengthen manager effectiveness—the highest-leverage capability for revenue growth",
      text: "Rather than hiring more sellers, Pure Storage invested in the leadership layer that could unlock performance across existing teams—deploying precision coaching with AI-powered insights to build strategic planning, alignment, and coaching capability."
    },
    platformConfigurationByRole: [
      {
        text: "<span><b>District Managers</b></span> needed strategic planning and coaching capability to drive quota attainment without hero-performer dependency.",
        tags: ["Executive 1:1 coaching", "Team alignment frameworks", "Tools linking leadership to quota outcomes"]
      },
      {
        text: "<span><b>Account Executives</b></span> needed self-awareness, growth mindset, and resilience to sustain performance under quota pressure in complex enterprise sales.",
        tags: ["Personalized sales effectiveness coaching", "Self-efficacy and locus of control development", "Resilience building for sustained performance"]
      },
      {
        text: "<span><b>Engineers & High-Potential Technical Talent</b></span> needed belonging, mental agility, and focus to maintain precision, collaborate globally, and prepare for leadership promotion.",
        tags: ["1:1 coaching for technical leadership", "Decision quality frameworks under time pressure", "Collaboration capability building"]
      }
    ],
    integrations: [
      "/images/clients/integrations/workday.svg",
      "/images/clients/integrations/salesforce.svg",
      "/images/clients/integrations/microsoft.svg",
    ],
    approach: "AI-powered insights\nPrecision coaching\nScience-backed capability development",
    culturalShift: "Managers became the essential linchpin for driving team performance",
    adoptionModel: "Targeted District Managers—the highest-leverage layer for revenue impact, then scaled to quota carriers and technical talent",

  },
  slide3: {
    bgImage: "/images/clients/bgs/pure-storage-1.webp",
    organizationalImpact: {
      title: "Pure Storage made manager effectiveness a systematic revenue multiplier—",
      text: "transforming from hero-dependent sales performance to scalable leadership capability that drives consistent quota attainment. District Manager coaching became the fastest path to revenue growth without hiring, elevating mid-tier performers through better leadership while building the promotion bench from within."
    },
    theTransformation: [
      {
        from: "From hero-dependent revenue",
        to: "Systematic manager-driven quota attainment",
      },
      {
        from: "From individual seller performance",
        to: "Team-wide quota participation",
      },
      {
        from: "From hiring for growth",
        to: "Building leadership bench internally",
      },
    ],
    bottomBlocks: [
      {
        title: "SALES PERFORMANCE",
        text: "Coached managers drive $4.24M more per team—equivalent of 3 additional hires"
      },
      {
        title: "LEADERSHIP CAPABILITY",
        text: "10% increase in top performance ratings sustained across multiple years"
      },
      {
        title: "TALENT CONTINUITY",
        text: "26% higher promotion rates for coached employees\nReduced high-performer turnover"
      },
    ]
  },
  slide4: {
    bgImage: "/images/clients/bgs/pure-storage-1.webp",
    testimonials: [
      {
        text: '"[MISSING: Need some quotes]"',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAZUlEQVR42u3PQQ0AAAgEIK9/QtPo3wZu0ID01GsREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQELgWUnqxYRoliB8AAAAASUVORK5CYII=",
        author: "TBD",
        position: "TBD"
      }
    ],
    mediaBlock: [
      {
        imgLarge: "/images/clients/imgs/pure-storage-4-top.webp",
      },
      {
        imgLarge: "/images/clients/imgs/pure-storage-4-bottom.webp",
      }
    ]
  },
}
