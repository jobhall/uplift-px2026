import { TCustomer } from "../customers";

export const CustomerSalesforce: TCustomer = {
  id: "salesforce",
  logo: "/images/clients/logos/salesforce.svg",

  wwaMaxWidth: 104,
  industry: 'Technology',
  outcome: 'Retention',
  outcomeTitle: 'Talent retention Professional Services',
  outcomeOrder: 2,

  slide1: {
    bgImage: "",
    challenge: {
      title: "To accelerate high-potential leaders and retain strong performers at risk of burnout, Salesforce deployed dual-track coaching to strengthen succession readiness and prevent talent loss.",
    },
    scale: "35,000+ employees activated\n325,000+ coaching sessions\n45 countries",
    speedToValue: "2 years to promotion velocity\nand retention impact",
    businessImpact: "Tens of millions saved in retention\nAccelerated succession pipeline\nSustained high performer retention",
    withBetterupText: "Targeted development accelerates promotion & retention",
    withBetterupStats: [
      {
        label: "REDUCTION IN TURNOVER FOR COACHED PARTICIPANTS",
        value: 45,
        suffix: "%",
      },
      {
        label: "INCREASE IN FOCUS & PRODUCTIVITY",
        value: 24,
        suffix: "%",
      },
    ]
  }
}
