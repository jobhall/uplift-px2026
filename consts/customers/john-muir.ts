import { TCustomer } from "../customers";

export const CustomerJohnMuir: TCustomer = {
  id: "john-muir",
  logo: "/images/clients/logos/john-muir.svg",
  wwaMaxWidth: 182,
  order: 8,

  industry: 'Healthcare',
  outcome: 'Retention',
  outcomeTitle: 'Talent retention Healthcare',
  outcomeOrder: 3,

  slide1: {
    bgImage: "/images/clients/bgs/john-muir-1.webp",
    challenge: {
      title: "Rebuild workforce resilience and well-being to protect leadership pipeline, clinical capacity, and patient outcomes",
      text: "Years of relentless clinical pressure were pushing leaders to the brink. Burnout wasn't just affecting morale, it was threatening the organization's ability to deliver care. Traditional wellness programs provided reactive support but couldn't systematically rebuild well-being or develop leadership capability at scale.",
    },
    scale: "Lead deployed to 100 high-performing leaders\nReady available organization-wide",
    speedToValue: "3 years to 13× ROI and 62% lower leader attrition",
    businessImpact: "$13M estimated value in productivity and cost savings through reduced attrition",
    withBetterupText: "A systematic well-being and leadership strategy delivered measurable retention and performance outcomes.",
    withBetterupStats: [
      {
        label: "ROI From retention savings and performance gains",
        value: 13,
        suffix: "X",
      },
      {
        label: "lower attrition Among coached leaders",
        value: 62,
        suffix: "%",
      },
    ]
  },
  slide2: {
    bgImage: "/images/clients/bgs/john-muir-1.webp",
    solution: {
      title: "Deploy enterprise-scale well-being and leadership development for leaders and staff —",
      text: "combining personalized human and AI coaching, science-backed resilience tools, and AI-powered insights that strengthened leadership capability, rebuilt workforce well-being, and reduced costly attrition. BetterUp’s platform scaled systematically across the organization, making human performance development as rigorous as their clinical and operational programs."
    },
    platformConfigurationByRole: [
      {
        text: "<span><b>Leadership</b> <i>Clinical Managers, Department Heads, Executive Leaders</i></span> faced highest burnout and attrition risk, requiring leadership effectiveness and emotional regulation to sustain performance.",
        tags: ["Executive-level human coaching", "Resilience frameworks for healthcare leadership", "AI-driven performance and well-being insights"]
      },
      {
        text: "<span>All Employees [Clinicians, Nurses, Frontline Staff?]</span> [Max ~175 characters describing their specific burnout/well-being challenges and needed capabilities]",
        tags: ["AI-powered coaching and resilience tools", "[Need specific Ready interventions]", "[Need delivery approach]"]
      }
    ],
    integrations: ["/images/clients/integrations/workday.svg"],
    approach: "Personalized human & AI coaching\nScience-backed resilience tools\nOn-demand support",
    culturalShift: "Burnout and eroding morale shifted to shared resilience and sustained commitment",
    adoptionModel: "Human coaching for 100 high-performing leaders; AI-powered well-being and resilience support scaled organization-wide"
  },
  slide3: {
    bgImage: "/images/clients/bgs/john-muir-1.webp",
    organizationalImpact: {
      title: "John Muir Health and BetterUp transformed workforce crisis into retention advantage —",
      text: "turning well-being development into measurable business outcomes that protected clinical capacity, reduced replacement costs, and stabilized organizational performance. What began as post-pandemic workforce stabilization became systematic infrastructure that drives sustained retention, performance gains, and leadership pipeline protection.",
    },
    theTransformation: [
      {
        from: "From pandemic-driven burnout",
        to: "Systematic workforce resilience",
      },
      {
        from: "From costly leadership attrition",
        to: "62% retention improvement & 13× ROI",
      },
      {
        from: "From reactive wellness programs",
        to: "Proactive performance infrastructure",
      },
    ],
    bottomBlocks: [
      {
        title: "WORKFORCE STABILITY",
        text: "62% lower leader attrition\n46% lower employee attrition",
      },
      {
        title: "PERFORMANCE GAINS",
        text: "16% higher performance scores\n1.48x promotion rates",
      },
      {
        title: "FINANCIAL IMPACT",
        text: "$13M estimated value from retention savings and performance gains",
      },
    ]
  },
  slide4: {
    bgImage: "/images/clients/bgs/john-muir-1.webp",
    testimonials: [
      {
        text: '“For the first time ever, we had a completely customizable platform delivered at the employee’s convenience. It was a complete and utter game-changer. Our leaders love it.”',
        image: "/images/clients/testimonials/john-muir__lisa.webp",
        author: "Lisa Foust",
        position: "Chief People & Engagement Officer, John Muir Health"
      },
    ],
    mediaBlock: [
      { imgLarge: "/images/clients/imgs/john-muir-4-top.webp" },
      { imgLarge: "/images/clients/imgs/john-muir-4-bottom.webp" }
    ]
  }
}
