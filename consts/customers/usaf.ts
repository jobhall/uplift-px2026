import { TCustomer } from "../customers";

export const CustomerUsaf: TCustomer = {
  id: "usaf",
  logo: "/images/clients/logos/usaf.svg",
  wwaMaxWidth: 98,
  order: 3,

  industry: 'Govt & Military',
  outcome: 'Retention',
  outcomeTitle: 'Talent retention technology',
  outcomeOrder: 1,

  slide1: {
    bgImage: "/images/clients/bgs/usaf-1.webp",
    challenge: {
      title: "Turn pilot retention crisis into sustained force readiness",
      text: "The Air Force loses 900+ pilots annually, with steepest attrition at the 10-year mark when they reach peak capability. Despite $250M in annual retention bonuses yielding only 0.03% improvement, the real crisis wasn't compensation—it was declining belonging, purpose, and psychological readiness among Airmen and their families that traditional programs couldn't address at scale."
    },
    scale: "2.5K fighter pilots\n300 Weapons School pilots\nMilitary spouses",
    speedToValue: "In 4 months, BetterUp members were 15% more\nresilient, 13% better prepared for wartime jobs, and\n7% more committed to military careers.",
    businessImpact: "~$924M in avoided training costs\n22 additional pilots retained annually\nProtected leadership pipeline",
    withBetterupText: "Strengthened the behavioral drivers that sustain military commitment and combat readiness",
    withBetterupStats: [
      {
        label: "annual increase in pilot retention",
        value: 10,
        suffix: "%",
      },
      {
        label: "increase in mission readiness",
        value: 20,
        suffix: "%",
      },
    ]
  },
  slide2: {
    bgImage: "/images/clients/bgs/usaf-1.webp",
    solution: {
      title: "USAF built scalable readiness infrastructure for fighter pilots and their families—",
      text: "combining personalized human and AI coaching, science-backed resilience frameworks, and family-system support that develops mission-critical mindsets as measurable, trainable competencies across pilots, officers, enlisted personnel, and spouses."
    },
    platformConfigurationByRole: [
      {
        text: "<span><b>5th Generation Fighter Pilots</b></span> needed to sustain high performance under sustained pressure and combat declining belonging, purpose, and psychological readiness that drove the 10-year retention cliff.",
        tags: [
          "Executive-level coaching focused on mission readiness",
          "Science-backed frameworks for stress management",
          "AI-driven insights for tracking commitment and readiness",
        ],
      },
      {
        text: "<span><b>Elite Tactical Populations</b> <i>Weapons School students, instructors, and squadron commanders</i></span> needed to sustain lethality, warfighter capability, and force readiness under the most demanding conditions.",
        tags: [
          "Specialized coaching for elite tactical leadership",
          "Tools for managing high-stakes performance",
          "On-demand resources for continuous tactical readiness",
        ],
      },
      {
        text: "<span><b>New Undergraduate Pilots</b></span> needed to build the habits and mindsets required to become the next generation of Air Force leaders while developing resilience against burnout early in their careers.",
        tags: [
          "1:1 human coaching",
          "Early-career resilience frameworks and burnout prevention",
          "Tools for building sustainable high-performance habits",
        ],
      },
      {
        text: "<span><b>Military Spouses</b></span> needed support as strategic retention levers, with 95% of pilots staying when their spouse supports the decision versus only 44% without spouse support.",
        tags: [
          "Targeted coaching for family system support",
          "On-demand resilience frameworks",
          "Resources for managing deployment stress and wellbeing",
        ],
      },
    ],
    approach: "Personalized human & AI coaching\nScience-backed resilience tools\nContinuous readiness measurement",
    culturalShift: "Human transformation became a\nshared capability to proactively build\nresilience and commitment.",
    adoptionModel: "Initial deployment to fighter pilots\nand spouses, then expanded to elite\ntactical populations and new pilots in\nundergraduate training",
  },
  slide3: {
    bgImage: "/images/clients/bgs/usaf-1.webp",
    organizationalImpact: {
      title: "USAF and BetterUp set a new standard for mission-critical talent retention and readiness",
      text: "strengthening belonging, purpose, and resilience at scale to deliver measurable mission readiness and multi-million dollar ROI. What began with pilots became systematic capability development that now protects the Air Force's pilot pipeline and warfighter effectiveness.",
    },
    bottomBlocks: [
      {
        title: "FORCE READINESS",
        text: "Pilots and aircrew strengthened the intrinsic drivers\nthat sustain commitment and combat effectiveness.",
      },
      {
        title: "OFFICERS & ENLISTED",
        text: "Readiness gains scaled across all ranks, building\nbehavioral drivers for sustained performance.",
      },
      {
        title: "STRATEGIC ROI",
        text: "Intrinsic commitment delivered measurable\nretention and cost avoidance that bonuses could\nnot, including ~$924M in avoided training costs",
      },
    ],
    theTransformation: [
      {
        from: "From $250M bonuses with marginal gains",
        to: "Intrinsic commitment at scale",
        isToInline: true,
      },
      {
        from: "From declining belonging & purpose",
        to: "Resilience and commitment at scale",
      },
      {
        from: "From individual pilot retention",
        to: "Org-wide readiness infrastructure",
      },
    ],
  },
  slide4: {
    bgImage: "/images/clients/bgs/usaf-1.webp",
    testimonials: [
      {
        text: '"The power of BetterUp is that it combines technology and humans to provide coaching in any place in the world at any time."',
        image: "/images/clients/testimonials/usaf__gina.webp",
        author: "Lieutenant General Gina Grosso (Ret.)",
        position: "U.S. Air Force",
      },
    ],
    mediaBlock: [
      {
        imgLarge: "/images/clients/imgs/usaf-4-top.webp",
      },
      {
        videoLoop: "/images/clients/videos/usaf.webm",
        vimeoId: "https://vimeo.com/399738123/8aac60a3f8",
      }
    ],
  }
}
