import { TCustomer } from "../customers";

export const CustomerUnilever: TCustomer = {
  id: "unilever",
  logo: "/images/clients/logos/unilever.svg",

  wwaMaxWidth: 82,
  industry: 'Consumer Goods',
  outcome: 'AI & Tech',
  outcomeTitle: 'AI Transformation Consumer Goods',
  outcomeOrder: 2,

  slide1: {
    bgImage: "",
    challenge: {
      title: "Shift four critical leadership behaviors to drive scaled innovation",
      text: "With cost pressures mounting and brand growth on the line, Unilever needed its leaders to think, decide, and execute differently — shifting culture across 4,000 senior leaders and 15,000 employees simultaneously."
    },
    scale: "19,000 leaders and employees",
    speedToValue: "[MISSING — no timeline data available, needs account team confirmation]",
    businessImpact: "Culture transformation at enterprise scale\nScaled innovation and market performance",
    withBetterupText: "[MISSING: Overarching theme]",
    withBetterupStats: [
      {
        label: "INCREASE IN STRATEGIC THINKING",
        value: 23,
        suffix: "%",
      },
      {
        label: "INCREASE IN GOAL ATTAINMENT",
        value: 18,
        suffix: "%",
      },
    ]
  }
}
