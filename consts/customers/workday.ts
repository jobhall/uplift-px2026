import { TCustomer } from "../customers";

export const CustomerWorkday: TCustomer = {
  id: "workday",
  logo: "/images/clients/logos/workday.svg",

  wwaMaxWidth: 175,
  industry: 'Technology',
  outcome: 'AI & Tech',
  outcomeTitle: 'AI Transformation Technology',
  outcomeOrder: 6,

  slide1: {
    bgImage: "",
    challenge: {
      title: "Deploy AI in human moments without sacrificing trust or governance.",
      text: "As a leader in enterprise technology, Workday needed AI that managers would actually trust, embedded in real workflows, operating within responsible AI standards, and enhancing judgment rather than replacing it.",
    },
    scale: "Enterprise manager population\nEmbedded directly in flow of work",
    speedToValue: "Immediate usability within existing workflows\nRapid adoption driven by trust-first design",
    businessImpact: "Accelerated trusted AI adoption\nStrengthened enterprise AI credibility and governance positioning",
    withBetterupText: "Trusted human-centered AI embedded in manager workflows",
    withBetterupStats: [
      {
        label: "TBD",
        value: 0,
        suffix: "%",
      },
      {
        label: "TBD",
        value: 0,
        suffix: "%",
      },
    ]
  }
}
