import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: '2024 Federal Tax Calculator | Free Income Tax Calculator',
  description: 'Calculate your 2024 federal income tax with our free tax calculator. Get instant estimates of your tax liability, effective tax rate, and after-tax income.',
  keywords: 'tax calculator, federal tax calculator, income tax calculator, 2024 tax calculator, tax estimator, federal income tax',
  openGraph: {
    title: '2024 Federal Tax Calculator',
    description: 'Free federal income tax calculator for 2024. Calculate your taxes, deductions, and take-home pay instantly.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'google-site-verification': 'your-verification-code-here',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}