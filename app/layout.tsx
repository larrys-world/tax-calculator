import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}