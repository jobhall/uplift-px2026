import { TCustomer } from "../customers";

export const CustomerLumen: TCustomer = {
  id: "lumen",
  logo: "/images/clients/logos/lumen.svg",
  wwaMaxWidth: 153,
  order: 7,

  industry: 'Technology',
  outcome: 'Culture',
  outcomeTitle: 'Culture at Scale Telecom',
  outcomeOrder: 5,

  slide1: {
    bgImage: "/images/clients/bgs/lumen-1.webp",
    challenge: {
      title: "Playing not to lose in a rapidly changing world",
      text: "Lumen had the assets to lead the industry, but its culture was playing not to lose rather than playing to win. Weighed down by $20 billion in debt, the company was defending outdated ways of working instead of running toward disruption. Lumen’s CEO knew that wasn’t enough in a rapidly changing world, and that the business transformation could only move as fast as its leaders were able to go."
    },
    scale: "Nearly 30,000 employees, inclusive of over 200 VP+ Sr Leaders, nearly 900 Directors and Sr Directors, frontline managers, and ICs",
    speedToValue: "Quarterly loops to sustained behavior change;\nphased rollout through August 2026",
    businessImpact: "Systematic courage infrastructure\nEnhanced accountability and follow-through",
    withBetterupText: "Lumen is building a courageous culture and turning courage into an everyday leadership behavior",
    withBetterupStats: [
      {
        label: "INCREASE IN COURAGE",
        value: 12,
        suffix: "%",
      },
      {
        label: "DECREASE IN BURNOUT",
        value: 11,
        suffix: "%",
      },
    ]
  },
  slide2: {
    bgImage: "/images/clients/bgs/lumen-1.webp",
    solution: {
      title: "Lumen bet on building the courage to win",
      text: `By bringing Brené Brown's research-backed courage frameworks together with BetterUp's Human Transformation Platform, Lumen is embedding the language of courage and vulnerability into its culture at scale. It’s turning a company that was playing not to lose into one bold enough to play to win.`
    },
    platformConfigurationByRole: [
      {
        text: "<span><b>VP+ Senior Leaders</b></span> supported with personalized Dare to Lead coaching, enabling them to sustain momentum through transformation, lead wholeheartedly, and drive performance.",
        tags: ["Dare To Lead Executive Coaching (ongoing since Jan 2025)", "Dare to Lead onboarding support for new VP+ leaders"]
      },
      {
        text: "<span><b>Directors and Senior Directors</b></span> needed the skills to self-manage under pressure, connect work to purpose, and act with courage — even in the face of misalignment and uncertainty.",
        tags: ["Skill-building modules on navigating today’s environment", "Guided small group and large-group experiences", "Always-on Dare to Lead AI preparation & practice coaching"]
      },
      {
        text: "<span><b>Frontline Leaders and Individual Contributors</b></span> scaling courage across the organization through on-demand reinforcement and ensuring the mindset to play to win reaches every level.",
        tags: ["Org-wide skill-building access", "Dare to Lead AI Coaching (upcoming)"]
      }
    ],
    approach: "Quarterly loops, spiral learning and practice, sustained engagement mechanisms",
    culturalShift: "Directors become culture carriers driving organization-wide transformation",
    adoptionModel: "Two-wave approach with VP steering during nomination process",
    integrations: [
      "/images/clients/integrations/workday.svg",
      "/images/clients/integrations/microsoft.svg"
    ]
  },
  slide3: {
    bgImage: "/images/clients/bgs/lumen-1.webp",
    organizationalImpact: {
      title: "To date, our partnership has driven measurable org-wide transformation to accelerate innovation & business performance,",
      text: "achieving a 12% increase in courage and an 11% decrease in burnout, while helping teams be more agile, innovative, and willing to play to win. The investment in courage is helping to deliver capabilities for enhanced accountability, cross-functional collaboration, and the organizational agility required for industry disruption."
    },
    /*
    theTransformation: [
      {
        from: "From armored leadership",
        to: "Courageous culture carriers"
      },
      {
        from: "From siloed execution",
        to: "Cross-functional accountability"
      },
      {
        from: "From individual capability",
        to: "Org-wide transformation infrastructure"
      },
    ],
    */
    theTransformationGraph: [
      {
        title: "stock price performance",
        description: "Nov 2022 low • Nov 2025 high • Current price: $7.93",
        beforePercentage: 10,
        beforeLabel: "Nov 2022\n<span>$0.76</span>",
        afterPercentage: 100,
        afterLabel: "Nov 2025\n<span>$10.52</span>",
        afterValueInsideGraph: "+1300%",
      },
    ],
    bottomBlocks: [
      {
        title: "ORGANIZATIONAL OUTCOMES",
        text: "Enhanced accountability and follow-through across leadership layers"
      },
      {
        title: "CULTURE TRANSFORMATION",
        text: "Living Lumen 8 without fear becomes the organizational norm"
      },
      {
        title: "AGILITY",
        text: "Faster decision-making and improved cross-functional collaboration effectiveness"
      },
    ]
  },
  slide4: {
    bgImage: "/images/clients/bgs/lumen-1.webp",
    testimonials: [
      {
        text: '"Reflecting on difficult interactions has allowed me to think more critically and produce more effective outcomes both personally and professionally."',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAZUlEQVR42u3PQQ0AAAgEIK9/QtPo3wZu0ID01GsREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQELgWUnqxYRoliB8AAAAASUVORK5CYII=",
        author: "Senior Leader",
        position: "Lumen"
      }
    ],
    mediaBlock: [
      {
        videoLoop: "/images/clients/videos/mercedes.webm",
        vimeoId: "https://vimeo.com/1124392363/f531a52d58",
      }
    ]
  }
}
