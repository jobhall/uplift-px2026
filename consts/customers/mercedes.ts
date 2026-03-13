import { TCustomer } from "../customers";

export const CustomerMercedes: TCustomer = {
  id: "mercedes",
  logo: "/images/clients/logos/mercedes.svg",
  wwaMaxWidth: 197,
  order: 1,

  industry: 'Automotive',
  outcome: 'Performance',
  outcomeTitle: 'Performance automotive',
  outcomeOrder: 1,

  slide1: {
    bgImage: "/images/clients/bgs/mercedes-2.webp",
    challenge: {
      title: "Scale elite human performance across all their entire workforce.",
      text: "To keep winning at the highest level, the Mercedes-AMG PETRONAS F1 Team needed to equip every leader, engineer, manager, and shift worker with the mental tools to adapt quickly, collaborate across time zones, and deliver under constant pressure.",
    },
    scale: "1,300+ employees\nGlobal operations",
    speedToValue: "~6 months to 21%\nproductivity gains",
    businessImpact: "Systematic performance infrastructure\nIncreased productivity and wellbeing",
    withBetterupText: "Human performance is measured as a business variable",
    withBetterupDetails: [
      {
        title: "Validated Assessments",
        value: "Kirkpatrick-aligned pre/post measurement of <span>flourishing & performance</span>",
      },
      {
        title: "Behavioral Change Reporting",
        value: "<span>99%</span> reported real improvements in daily performance",
      },
      {
        title: "Business-Level Productivity Outcomes",
        value: "<span>+21%</span> productivity gains across the organization",
      },
    ],
    withBetterupStats: [
      {
        label: "PRODUCTIVITY GAINS",
        value: 21,
        suffix: "%",
      },
      {
        label: "REPORTED REAL IMPROVEMENTS IN DAILY PERFORMANCE",
        value: 99,
        suffix: "%",
      },
    ],
  },
  slide2: {
    bgImage: "/images/clients/bgs/mercedes-1.webp",
    solution: {
      title: "Mercedes built systematic human performance infrastructure for all 1,300+ employees —",
      text: "combining personalized human and AI coaching, science-backed resilience frameworks, and on-demand support to make human performance development as rigorous as their physical and technical programs."
    },
    approach: "Personalized human & AI coaching\nScience-backed resilience tools\nOn-demand support",
    culturalShift: "Coaching became a shared\nlanguage across the organization",
    adoptionModel: "Leadership-first, then scaled to\nall 1,300+ employees",
    platformConfigurationByRole: [
      {
        text: "<span><b>Leadership</b> <i>Team Principal</i>, C-Suite, Department Heads</span> required resilience frameworks and strategic mindsets to sustain high performance under global scrutiny and championship pressure.",
        tags: ['Executive-level human coaching', 'Resilience frameworks for high-pressure leadership'],
      },
      {
        text: "<span><b>First-Time Managers</b></span> needed judgment-free space to build leadership capabilities outside internal performance pressures and spotlight conditions.",
        tags: ['Dedicated manager coaching', 'AI-supported reflection and feedback', 'Tools to connect leadership growth to team outcomes'],
      },
      {
        text: "<span><b>Engineers & technical staff</b></span> needed tools to manage decision fatigue, maintain precision under time pressure, and collaborate effectively across locations.",
        tags: ['1:1 coaching for focus and decision quality', 'Frameworks for managing decision fatigue in tight timelines', 'AI nudges in critical moments'],
      },
      {
        text: "<span><b>Shift workers</b> <i>Mechanics, Pit Crew, Operations</i></span> required specialist support for sleep optimization and nutrition to maintain peak performance across time zones and demanding schedules.",
        tags: ['Specialist coaching (sleep & recovery)', 'On-demand recovery resources', 'Tools to maintain readiness across race cycles'],
      },
    ],
    integrations: [
      '/images/clients/integrations/workday.svg',
      '/images/clients/integrations/microsoft.svg',
    ]
  },
  slide3: {
    bgImage: "/images/clients/bgs/mercedes-3.webp",
    organizationalImpact: {
      title: "Mercedes and BetterUp redefined performance at scale —",
      text: "transforming human performance from an elite-level capability into a strategic infrastructure embedded across the organization. What began with leadership adoption became a systematic capability that now drives productivity gains, workforce resilience, and competitive advantage.",
    },
    theTransformation: [
      {
        from: "From reactive stress management",
        to: "Proactive resilience building",
      },
      {
        from: "From physical excellence alone",
        to: "Well-being as competitive edge",
      },
      {
        from: "From individual capability",
        to: "Team-wide performance infrastructure",
      },
    ],
    bottomBlocks: [
      {
        title: "Enterprise productivity",
        text: "Performance gains institutionalized at scale",
      },
      {
        title: "Workforce resilience",
        text: "Reduced burnout risk, increased capacity",
      },
      {
        title: "Competitive advantage",
        text: "Human performance as strategic differentiator",
      },
    ]
  },
  slide4: {
    bgImage: "/images/clients/bgs/mercedes-4.webp",
    mediaBlock: [
      {
        videoLoop: "/images/clients/videos/mercedes.webm",
        vimeoId: "https://vimeo.com/1124392363/f531a52d58",
      },
      {
        imgSmall1: "/images/clients/imgs/mercedes-4-1.webp",
        imgSmall2: "/images/clients/imgs/mercedes-4-2.webp",
      }
    ],
    testimonials: [
      {
        text: '“BetterUp is an essential part in ensuring our team has the fuel in the tank to succeed because even a fraction of a second can mean the difference between winning or losing.”',
        author: "Toto Wolff",
        position: "Team Principal and CEO, Mercedes-AMG PETRONAS F1 Team",
        image: "/images/clients/testimonials/mercedes__toto.webp",
      },
      {
        text: '“The AI capability within BetterUp is really exciting. We see huge potential to unlock new levels of engagement, self-reflection, and mental strength for the team.”',
        author: "Anca Raines",
        position: "Chief People Officer, Mercedes-AMG PETRONAS F1 Team",
        image: "/images/clients/testimonials/mercedes__anca.webp",
      },
      {
        text: '“BetterUp gave me the freedom to lead without passing on my own stress.”',
        author: "Emma Hunter",
        position: "Reliability Engineer, Mercedes-AMG PETRONAS F1 Team",
        image: "/images/clients/testimonials/mercedes__emma.webp",
      },
      {
        text: '“People stop me in the corridors to say thank you. I hear conversations in kitchens, garages, even trackside about how much coaching has helped.”',
        author: "Chris Armstrong",
        position: "Head of Wellbeing, Mercedes-AMG PETRONAS F1 Team",
        image: "/images/clients/testimonials/mercedes__chris.webp",
      },
    ],
  }
}
