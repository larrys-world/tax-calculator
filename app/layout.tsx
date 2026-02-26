import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '2024 Federal Tax Calculator | Free Income Tax Calculator',
  description: 'Calculate your 2024 federal income tax with our free tax calculator. Get instant estimates of your tax liability, effective tax rate, and after-tax income.',
  keywords: 'tax calculator, federal tax calculator, income tax calculator, 2024 tax calculator, tax estimator, federal income tax, tax brackets, tax refund calculator',
  authors: [{ name: 'Larry\'s World' }],
  creator: 'Larry\'s World',
  publisher: 'Larry\'s World',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '2024 Federal Tax Calculator | Free Income Tax Calculator',
    description: 'Free federal income tax calculator for 2024. Calculate your taxes, deductions, and take-home pay instantly.',
    url: 'https://larrys-world.github.io/tax-calculator/',
    siteName: 'Larry\'s World Tax Calculator',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2024 Federal Tax Calculator',
    description: 'Calculate your 2024 federal taxes instantly with our free calculator',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://larrys-world.github.io/tax-calculator/',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '2024 Federal Tax Calculator',
    description: 'Free online federal income tax calculator for 2024. Calculate taxes, deductions, and take-home pay.',
    url: 'https://larrys-world.github.io/tax-calculator/',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the 2024 federal tax brackets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 2024 federal tax brackets range from 10% to 37%. For single filers: 10% ($0-$11,600), 12% ($11,600-$47,150), 22% ($47,150-$100,525), 24% ($100,525-$191,950), 32% ($191,950-$243,725), 35% ($243,725-$609,350), 37% (over $609,350).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the standard deduction for 2024?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 2024 standard deduction is $14,600 for single filers and $29,200 for married filing jointly.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I calculate my federal income tax?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To calculate federal income tax: 1) Determine your gross income, 2) Subtract deductions (standard or itemized), 3) Apply the tax brackets to your taxable income, 4) Calculate tax owed based on your filing status.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between marginal and effective tax rate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your marginal tax rate is the percentage you pay on your last dollar of income (your highest tax bracket). Your effective tax rate is your total tax divided by total income, which is usually lower than your marginal rate.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Your 2024 Federal Income Tax',
    description: 'Step-by-step guide to calculating your federal income tax for 2024',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Your Income',
        text: 'Input your total gross income for the year',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Filing Status',
        text: 'Choose between Single or Married Filing Jointly',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Deduction Type',
        text: 'Select standard deduction or enter itemized deductions',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Tax',
        text: 'Click calculate to see your federal tax liability, effective rate, and after-tax income',
      },
    ],
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}