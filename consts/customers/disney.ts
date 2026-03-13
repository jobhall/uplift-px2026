import { TCustomer } from "../customers";

export const CustomerDisney: TCustomer = {
  id: "disney",
  logo: "/images/clients/logos/disney.svg",

  wwaMaxWidth: 124,
  industry: 'Entertainment & Media',
  outcome: 'Performance',
  outcomeTitle: 'Performance Entertainment',
  outcomeOrder: 4,

  slide1: {
    bgImage: "/images/clients/bgs/disney-1.webp",
    challenge: {
      title: "As Disney scaled operations across parks and global teams, leadership consistency and frontline resilience became critical to sustaining guest excellence.",
    },
    scale: "9,000 leaders & 40,000 managers\nactivated globally across\n60+ countries\nCEO-sponsored",
    speedToValue: "[MISSING: Timeline to enterprise-wide behavior alignment embedded across leadership population]",
    businessImpact: "Leadership excellence activated at global scale\nReinforced innovation culture across markets\nLeadership capability as a revenue growth driver",
    withBetterupText: "Enterprise-wide leadership activation, co-designed with CEO and CHRO.",
    withBetterupStats: [
      {
        label: "Increase in Strategic Thinking",
        value: 21,
        suffix: "%",
      },
      {
        label: "Increase in alignment",
        value: 18,
        suffix: "%",
      },
    ]
  },
}
