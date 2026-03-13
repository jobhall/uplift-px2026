import { TCustomer } from "../customers";

export const CustomerPfizer: TCustomer = {
  id: "pfizer",
  logo: "/images/clients/logos/pfizer.svg",

  wwaMaxWidth: 100,
  industry: 'Pharma & Life Sciences',
  outcome: 'Culture',
  outcomeTitle: 'Culture at Scale Pharma & Life Sciences',
  outcomeOrder: 4,

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
