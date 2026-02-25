// Related tools mapping for inter-tool linking
export const toolRelationships = {
  'tax-calculator': {
    name: 'Tax Calculator',
    url: 'https://larrys-world.github.io/tax-calculator/',
    related: ['investment-calculator', 'mortgage-calculator', 'business-loan-calculator'],
    description: 'Calculate federal and state taxes'
  },
  'investment-calculator': {
    name: 'Investment Calculator',
    url: 'https://larrys-world.github.io/investment-calculator/',
    related: ['tax-calculator', 'mortgage-calculator', 'business-loan-calculator'],
    description: 'Calculate investment returns and compound interest'
  },
  'mortgage-calculator': {
    name: 'Mortgage Calculator',
    url: 'https://larrys-world.github.io/mortgage-calculator/',
    related: ['tax-calculator', 'investment-calculator', 'percentage-calculator'],
    description: 'Calculate mortgage payments and amortization'
  },
  'business-loan-calculator': {
    name: 'Business Loan Calculator',
    url: 'https://larrys-world.github.io/business-loan-calculator/',
    related: ['tax-calculator', 'investment-calculator', 'percentage-calculator'],
    description: 'Calculate business loan payments and interest'
  },
  'password-generator': {
    name: 'Password Generator',
    url: 'https://larrys-world.github.io/password-generator/',
    related: ['qr-code-generator', 'lorem-ipsum-generator', 'word-counter'],
    description: 'Generate secure passwords'
  },
  'unit-converter': {
    name: 'Unit Converter',
    url: 'https://larrys-world.github.io/unit-converter/',
    related: ['percentage-calculator', 'tip-calculator', 'bmi-calculator'],
    description: 'Convert between different units of measurement'
  },
  'lorem-ipsum-generator': {
    name: 'Lorem Ipsum Generator',
    url: 'https://larrys-world.github.io/lorem-ipsum-generator/',
    related: ['word-counter', 'password-generator', 'qr-code-generator'],
    description: 'Generate placeholder text'
  },
  'freelance-rate-calculator': {
    name: 'Freelance Rate Calculator',
    url: 'https://larrys-world.github.io/freelance-rate-calculator/',
    related: ['tax-calculator', 'business-loan-calculator', 'percentage-calculator'],
    description: 'Calculate freelance hourly rates'
  },
  'percentage-calculator': {
    name: 'Percentage Calculator',
    url: 'https://larrys-world.github.io/percentage-calculator/',
    related: ['tip-calculator', 'tax-calculator', 'business-loan-calculator'],
    description: 'Calculate percentages and percentage changes'
  },
  'tip-calculator': {
    name: 'Tip Calculator',
    url: 'https://larrys-world.github.io/tip-calculator/',
    related: ['percentage-calculator', 'unit-converter', 'tax-calculator'],
    description: 'Calculate tips and split bills'
  },
  'word-counter': {
    name: 'Word Counter',
    url: 'https://larrys-world.github.io/word-counter/',
    related: ['lorem-ipsum-generator', 'password-generator', 'freelance-rate-calculator'],
    description: 'Count words, characters, and paragraphs'
  },
  'bmi-calculator': {
    name: 'BMI Calculator',
    url: 'https://larrys-world.github.io/bmi-calculator/',
    related: ['unit-converter', 'age-calculator', 'percentage-calculator'],
    description: 'Calculate Body Mass Index'
  },
  'age-calculator': {
    name: 'Age Calculator',
    url: 'https://larrys-world.github.io/age-calculator/',
    related: ['bmi-calculator', 'tax-calculator', 'investment-calculator'],
    description: 'Calculate age in years, months, and days'
  },
  'qr-code-generator': {
    name: 'QR Code Generator',
    url: 'https://larrys-world.github.io/qr-code-generator/',
    related: ['password-generator', 'lorem-ipsum-generator', 'unit-converter'],
    description: 'Generate QR codes for text, URLs, and more'
  }
};

export function getRelatedTools(currentTool) {
  const tool = toolRelationships[currentTool];
  if (!tool || !tool.related) return [];
  
  return tool.related.map(relatedKey => toolRelationships[relatedKey]).filter(Boolean);
}

export function getAllTools() {
  return Object.entries(toolRelationships).map(([key, tool]) => ({
    ...tool,
    key
  }));
}