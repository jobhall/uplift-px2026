import { TCustomer } from "../customers";

export const CustomerWestMonroe: TCustomer = {
  id: "west-monroe",
  logo: "/images/clients/logos/west-monroe.svg",

  wwaMaxWidth: 185,
  industry: 'Consulting',
  outcome: 'Performance',
  outcomeTitle: 'Performance Financial Services',
  outcomeOrder: 7,

  slide1: {
    bgImage: "",
    challenge: {
      title: "To unlock revenue potential and strengthen sales performance, West Monroe invested in developing underperforming sellers through targeted coaching rather than replacement.",
    },
    scale: "31 underperforming sellers in pilot\n85 total underperformers identified",
    speedToValue: "6 months to $170K per person\nquota improvement",
    businessImpact: "$14.5M revenue potential (if scaled to\nall underperformers)\nInvestment of $3,750 returns\n$170,502 per person",
    withBetterupText: "Underperforming sellers close the performance gap",
    withBetterupStats: [
      {
        label: "COACHED SELLERS ACHIEVED 2X FASTER QUOTA IMPROVEMENT",
        value: 2,
        suffix: "X",
      },
      {
        label: "MORE QUOTA ATTAINMENT PER PERSON",
        prefix: "$",
        value: 170,
        suffix: "K",
      },
    ]
  }
}
