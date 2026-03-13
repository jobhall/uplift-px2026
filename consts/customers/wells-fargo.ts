import { TCustomer } from "../customers";

export const CustomerWellsFargo: TCustomer = {
  id: "wells-fargo",
  logo: "/images/clients/logos/wells-fargo.svg",

  wwaMaxWidth: 64,
  industry: 'Financial Services',
  outcome: 'Culture',
  outcomeTitle: 'Culture at Scale Banking',
  outcomeOrder: 3,

  slide1: {
    bgImage: "",
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
