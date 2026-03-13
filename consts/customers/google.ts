import { TCustomer } from "../customers";

export const CustomerGoogle: TCustomer = {
  id: "google",
  logo: "/images/clients/logos/google.svg",

  wwaMaxWidth: 162,
  industry: 'Technology',
  outcome: 'Performance',
  outcomeTitle: 'Performance Technology',
  outcomeOrder: 5,

  slide1: {
    bgImage: "/images/clients/bgs/google-1.webp",
    challenge: {
      title: "Sustaining innovation velocity across critical leadership",
      text: "Google's top Product Managers drive innovation at unprecedented pace, leading complex initiatives across the organization. These elite leaders needed to master influence without authority and strategic planning under constant pressure to maintain Google's competitive edge.",
    },
    scale: "25,000+ managers\nTop 5% of Product Managers",
    speedToValue: "6-12 month coaching journeys\nEmbedded in manager development programs",
    businessImpact: "Leadership capability as innovation infrastructure\nMeasurable performance gains",
    withBetterupText: "Leadership capability powers innovation at scale",
    withBetterupStats: [
      {
        label: "Employee performance improvement via AI coaching",
        value: 25,
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
