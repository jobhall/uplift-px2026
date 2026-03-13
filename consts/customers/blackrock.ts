import { TCustomer } from "../customers";

export const CustomerBlackrock: TCustomer = {
  id: "blackrock",
  logo: "/images/clients/logos/blackrock.svg",
  wwaMaxWidth: 152,
  order: 4,

  industry: 'Financial Services',
  outcome: 'Performance',
  outcomeTitle: 'Performance Financial Services',
  outcomeOrder: 2,

  slide1: {
    bgImage: "/images/clients/bgs/blackrock-3.webp",
    challenge: {
      title: "BlackRock is targeting to double income by 2030 through three strategic levers: expansion into private markets, technology & data innovation, and scale & performance. Achieving this requires a workforce with best-in-class cultural cohesion, team agility, and sustained high performance across a global, matrixed enterprise.",
    },
    scale: "4,600+ leaders coached\n34,000+ human coaching sessions\n5,000+ AI coaching sessions",
    speedToValue: "18 months to performance gains\nand retention impact",
    businessImpact: "$4.8M saved in retention\n0.25% revenue lift potential\nSustained high performance\ninfrastructure",
    withBetterupText: "Workforce capabilities aligned to growth strategy",
    withBetterupStats: [
      {
        label: "REDUCTION IN MANAGER TURNOVER",
        value: 32,
        suffix: "%",
      },
      {
        label: "INCREASE IN TOP PERFORMING TEAMS",
        value: 10,
        suffix: "%",
      },
    ]
  },
  slide2: {
    bgImage: "/images/clients/bgs/blackrock-3.webp",
    solution: {
      title: "Deploy tiered human + AI coaching to stabilize leadership pipelines and accelerate team performance at scale",
      text: "BetterUp delivered expert coaching to 200+ VPs and Directors, strengthening critical leadership capability across business units. BlackRock expanded to 1,200 managers with human + AI coaching—targeting frontline leaders driving day-to-day performance and building systematic performance infrastructure across the global enterprise."
    },
    approach: "Tiered human + AI coaching\nPerformance-focused interventions\nNomination-based for senior leaders\nOpt-in for managers",
    culturalShift: "Employees across levels and\nbusiness units breaking down silos\nand aligning to shared values and\nleadership behaviors",
    adoptionModel: "Lead launched 2020\nManage launched May 2024",
    platformConfigurationByRole: [
      {
        text: "<span><b>Leadership</b> <i>200+ VPs, Directors</i></span> Differential investment in high-performing leaders paired with expert coaches to build deeply-rooted behaviors and mindsets required to drive business success.",
        tags: ['Executive-level human coaching', 'Performance frameworks for high-pressure leadership', 'Strategic leadership development across business units'],
      },
      {
        text: "<span><b>Managers</b> <i>1,200+ people managers</i></span> Scaled investment to drive functional outcomes and cultural momentum. Human + AI coaching to close skill gaps and strengthen influence across the organization.",
        tags: ['Manager effectiveness development', 'Blended human + AI coaching', 'Leadership foundations and habit formation'],
      },
    ],
    integrations: [
      '/images/clients/integrations/workday.svg',
      '/images/clients/integrations/salesforce.svg',
      '/images/clients/integrations/microsoft.svg',
    ]
  },
  slide3: {
    bgImage: "/images/clients/bgs/blackrock-3.webp",
    organizationalImpact: {
      title: "BlackRock created a scalable engine for sustained performance and cultural alignment—",
      text: "extending human performance investment to all 4,600+ leaders. Leaders modeled adoption, tailored support activated every population, and human performance development became systematic across the organization.",
    },
    /*
    theTransformation: [
      {
        from: "From manager burnout and team underperformance",
        to: "Sustained high performance and greater retention of critical talent",
        isToInline: true,
      },
      {
        from: "From individual leadership capability",
        to: "Team-wide performance infrastructure",
      },
      {
        from: "From fragmented culture",
        to: "Cultural cohesion across global, matrixed enterprise",
      },
    ],
    */
    theTransformationGraph: [
      {
        beforePercentage: 53,
        beforeLabel: "High-performing leaders without betterup",
        afterPercentage: 95,
        afterLabel: "with 5+ betterup sessions",
        afterValueInsideGraph: "+9%",
        title: "% high performance scores",
        description: "2024",
      },
      {
        beforePercentage: 64,
        beforeLabel: "managers without betterup",
        afterPercentage: 78,
        afterLabel: "managers with 2+ sessions and/or 2+ plans",
        afterValueInsideGraph: "+10%",
        title: "% of team high performer distribution in 2024",
        description: "",
      },
      {
        beforePercentage: 95,
        beforeLabel: "Current vp turnover rate",
        afterPercentage: 57,
        afterLabel: "vps with 2+ sessions or 2+ plans",
        afterValueInsideGraph: "-39%",
        title: "% VP Voluntary Attrition",
        description: "2025",
      },
      {
        beforePercentage: 84,
        beforeLabel: "managers without betterup",
        afterPercentage: 56,
        afterLabel: "managers with 2+ sessions or 2+ plans",
        afterValueInsideGraph: "-32%",
        title: "% manager voluntary attrition",
        description: "may 2024-november 2025",
      }
    ],
    bottomBlocks: [
      {
        title: "LEADERSHIP PIPELINE STABILITY",
        text: "39% reduction in VP turnover\n32% reduction in manager turnover",
      },
      {
        title: "SUSTAINED TEAM PERFORMANCE",
        text: "10% increase in top performing teams",
      },
      {
        title: "REVENUE IMPACT",
        text: "Estimated 0.25% revenue lift\n$4.8M in turnover savings",
      },
    ]
  },
  slide4: {
    bgImage: "/images/clients/bgs/blackrock-3.webp",
    mediaBlock: [
      {
        imgLarge: "/images/clients/imgs/blackrock-4-top.webp",
      },
      {
        imgSmall1: "/images/clients/imgs/blackrock-4-1.webp",
        imgSmall2: "/images/clients/imgs/blackrock-4-1.webp",
      }
    ],
    testimonials: [
      {
        text: '“BetterUp is an essential part in ensuring our team has the fuel in the tank to succeed because even a fraction of a second can mean the difference between winning or losing.”',
        author: "Nicole Panichella",
        position: "Head of Talent & Executive Development\nBlackRock",
        image: "/images/clients/testimonials/blackrock__nicole.webp",
      },
      {
        text: '“The AI capability within BetterUp is really exciting. We see huge potential to unlock new levels of engagement, self-reflection, and mental strength for the team.”',
        author: "Kathy Clemons",
        position: "Global Head of Leadership & Manager Development\nBlackRock",
        image: "/images/clients/testimonials/blackrock__kathy.webp",
      }
    ],
  }
}
