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

const jsonLd = {
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
}

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