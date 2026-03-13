import { TCustomer } from "../customers";

export const CustomerNovartis: TCustomer = {
  id: "novartis",
  logo: "/images/clients/logos/novartis.svg",
  wwaMaxWidth: 187,
  order: 2,

  industry: 'Pharma & Life Sciences',
  outcome: 'AI & Tech',
  outcomeTitle: 'AI Transformation Pharma & Life Sciences',
  outcomeOrder: 1,

  slide1: {
    bgImage: "",
    challenge: {
      title: "To translate innovation into consistent execution at scale, Novartis needed a workforce that thinks critically, takes accountability, and collaborates effectively across global teams and networks.",
    },
    scale: "65,000 employees with AI Coaching\n300+ leaders annually on Lead platform\nGlobal deployment across markets",
    speedToValue: "[MISSING: Timeline to strategic capability gains]",
    businessImpact: "Enterprise-wide coaching accessibility\nStrategic execution capability\nInnovation acceleration",
    withBetterupText: "Personalized, scalable approach to AI & human coaching",
    withBetterupStats: [
      {
        label: "of participants report being more effective at work",
        value: 94,
        suffix: "%",
      },
      {
        label: "IMPROVEMENT IN STRATEGIC PLANNING",
        value: 32,
        suffix: "%",
      },
    ],
  }
}
