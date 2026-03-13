import { TCustomer } from "../customers";

export const CustomerBp: TCustomer = {
  id: "bp",
  logo: "/images/clients/logos/bp.svg",

  wwaMaxWidth: 74,
  industry: 'Energy',
  outcome: 'Culture',
  outcomeTitle: 'Culture at Scale Energy',
  outcomeOrder: 2,

  slide1: {
    bgImage: "",
    challenge: {
      title: "Leading a performance culture reset without leaving people behind.",
      text: "As bp restructures to achieve top-quartile operating efficiency, the company faces a defining challenge: drive a fundamental shift toward a stronger, more consistent performance culture while honoring a deep commitment to the wellbeing of colleagues navigating unprecedented levels of change."
    },
    scale: "4,000 colleagues Leaders + workforce populations",
    speedToValue: "[MISSING: Timeline to outcomes]",
    businessImpact: "Stronger performance culture\nLeaders equipped to drive strategic reset",
    withBetterupText: "Leadership capability became the engine of bp's performance culture reset.",
    withBetterupStats: [
      {
        label: "increase in DECISION MAKING",
        value: 22,
        suffix: "%",
      },
      {
        label: "increase in STRATEGIC THINKING",
        value: 23,
        suffix: "%",
      },
    ]
  }
}
