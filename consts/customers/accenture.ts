import { TCustomer } from "../customers";

export const CustomerAccenture: TCustomer = {
  id: "accenture",
  logo: "/images/clients/logos/accenture.svg",

  wwaMaxWidth: 163,
  industry: 'Technology',
  outcome: 'AI & Tech',
  outcomeTitle: 'AI Transformation Professional Services',
  outcomeOrder: 3,

  slide1: {
    bgImage: "/images/clients/bgs/accenture-1.webp",
    challenge: {
      title: "[MISSING: Business context - ~160 characters]",
    },
    scale: "[MISSING: Number of employees Deployment scope]",
    speedToValue: "[MISSING: Timeline to outcomes]",
    businessImpact: "[MISSING: Strategic impact description]",
    withBetterupText: "[MISSING: Overarching theme]",
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
