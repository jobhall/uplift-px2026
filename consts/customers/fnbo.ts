import { TCustomer } from "../customers";

export const CustomerFnbo: TCustomer = {
  id: "fnbo",
  logo: "/images/clients/logos/fnbo.svg",

  wwaMaxWidth: 92,
  industry: 'Financial Services',
  outcome: 'Performance',
  outcomeTitle: 'Performance (sales) Professional Services',
  outcomeOrder: 6,

  slide1: {
    bgImage: "",
    challenge: {
      title: "To become a $50B premier financial institution, FNBO needed to maintain high performance and retain critical talent through mergers, process shifts, and rising leadership expectations.",
    },
    scale: "~100 managers and professionals coached\n57 coached managers with team impact\nMulti-year deployment",
    speedToValue: "2 consecutive years to demonstrate\nconsistent 15% performance\nimprovement",
    businessImpact: "4X ROI\nManager turnover reduced to U.S. average\nTeam turnover decreased from 12% to 10%",
    withBetterupText: "Leadership capabilities strengthened during transformation",
    withBetterupStats: [
      {
        label: "GREATER TOP PERFORMANCE VS PEERS",
        value: 15,
        suffix: "%",
      },
      {
        label: "TEAM EXCEPTIONAL PERFORMANCE",
        value: 7,
        suffix: "%",
      },
    ]
  }
}
