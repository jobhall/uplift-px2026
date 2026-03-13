import { CustomerMercedes } from "./customers/mercedes";
import { CustomerNovartis } from "./customers/novartis";
import { CustomerUsaf } from "./customers/usaf";
import { CustomerBp } from "./customers/bp";
import { CustomerUnilever } from "./customers/unilever";
import { CustomerSalesforce } from "./customers/salesforce";
import { CustomerBlackrock } from "./customers/blackrock";
import { CustomerDisney } from "./customers/disney";
import { CustomerWellsFargo } from "./customers/wells-fargo";
import { CustomerPfizer } from "./customers/pfizer";
import { CustomerGoogle } from "./customers/google";
import { CustomerLumen } from "./customers/lumen";
import { CustomerAccenture } from "./customers/accenture";
import { CustomerAnalogDevices } from "./customers/analog-devices";
import { CustomerGeVernova } from "./customers/ge-vernova";
import { CustomerPureStorage } from "./customers/pure-storage";
import { CustomerJohnMuir } from "./customers/john-muir";
import { CustomerModerna } from "./customers/moderna";
import { CustomerFnbo } from "./customers/fnbo";
import { CustomerWestMonroe } from "./customers/west-monroe";
import { CustomerWorkday } from "./customers/workday";
import { CustomerRollsRoyce } from "./customers/rolls-royce";

export const customersOutcomesPageTexts: Record<typeof customersOutcomes[number], { title: string; description: string }> = {
  'Performance': {
    title: 'performance',
    description: 'Improving performance to drive measurable gains in productivity, execution speed, and revenue',
  },
  'Retention': {
    title: 'talent retention',
    description: 'Reducing regretted attrition while keeping critical talent productive and in role',
  },
  'Culture': {
    title: 'culture at scale',
    description: 'Building the culture that strengthens leadership, improves decision quality, and sustains performance',
  },
  'AI & Tech': {
    title: 'ai transformation',
    description: 'AI at scale that earns trust and drives sustained productivity and innovation',
  },
}

export const customersOutcomesDescription: Record<typeof customersOutcomes[number], string[]> = {
  'Performance': [
    'Manager effectiveness',
    'Leadership resilience & agility',
    'Reskilling & upskilling',
    'Workforce readiness'
  ],
  'Retention': [
    'Succession planning ',
    'Workforce engagement',
    'Talent mobility',
    'Critical talent'
  ],
  'Culture': [
    'Organizational agility',
    'Enterprise transformation',
    'Change & integration',
    'Trust & alignment'
  ],
  'AI & Tech': [
    'AI adoption at scale',
    'AI change readiness',
    'Responsible AI leadership',
    'Digital fluency'
  ],
}

export const customersOutcomes = [
  'Performance',
  'Retention',
  'Culture',
  'AI & Tech',
];

export const customersIndustries = [
  'Automotive',
  'Consumer Goods',
  'Consulting',
  'Energy',
  'Entertainment & Media',
  'Financial Services',
  'Govt & Military',
  'Healthcare',
  'Hospitality',
  'Insurance',
  'Manufacturing',
  'Pharma & Life Sciences',
  'Professional Services',
  'Technology',
  'Utilities',
];

export interface TCustomer {
  id: string;
  logo: string;
  wwaMaxWidth: number;
  order?: number;

  industry?: typeof customersIndustries[number];
  outcome?: typeof customersOutcomes[number];
  outcomeTitle?: string;
  outcomeOrder?: number;

  slide1?: {
    challenge: {
      title?: string;
      text?: string;
    };
    scale: string;
    speedToValue: string;
    businessImpact: string;
    bgImage: string;
    withBetterupText?: string;
    withBetterupDetails?: {
      title: string;
      value: string;
    }[];
    withBetterupStats?: {
      label: string;
      value: number;
      suffix?: string;
      prefix?: string;
    }[];
  };
  slide2?: {
    solution: {
      title?: string;
      text?: string;
    };
    platformConfigurationByRole?: {
      text: string;
      tags?: string[];
    }[];
    approach: string;
    culturalShift: string;
    adoptionModel: string;
    bgImage: string;
    integrations?: string[];
  };
  slide3?: {
    bgImage: string;
    organizationalImpact: {
      title?: string;
      text?: string;
    };
    theTransformation?: {
      from: string;
      to: string;
      isToInline?: boolean;
    }[];
    theTransformationGraph?: {
      beforePercentage: number; // Max height from Figma = 220px
      beforeLabel: string;
      afterPercentage: number;
      afterLabel: string;
      afterValueInsideGraph: string;
      title: string;
      description: string;
    }[];
    bottomBlocks?: {
      title: string;
      text: string;
    }[];
  };
  slide4?: {
    bgImage: string;
    mediaBlock: {
      videoLoop?: string;
      vimeoId?: string;
      imgLarge?: string;
      imgSmall1?: string;
      imgSmall2?: string;
    }[];
    testimonials: {
      text: string;
      author: string;
      position: string;
      image: string;
    }[];
  };
}

export const customers: TCustomer[] = [
  CustomerMercedes,
  CustomerNovartis,
  CustomerUsaf,
  CustomerBp,
  CustomerUnilever,
  CustomerSalesforce,
  CustomerBlackrock,
  CustomerDisney,
  CustomerWellsFargo,
  CustomerPfizer,
  CustomerGoogle,
  CustomerLumen,
  CustomerAccenture,
  CustomerAnalogDevices,
  CustomerGeVernova,
  CustomerPureStorage,
  CustomerJohnMuir,
  CustomerModerna,
  CustomerFnbo,
  CustomerWestMonroe,
  CustomerWorkday,
  CustomerRollsRoyce,
]
