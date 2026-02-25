import React from 'react';

interface AdPlaceholderProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
  label?: string;
}

// Placeholder AdSense component - will be replaced with real ads when operator provides AdSense account
export function AdPlaceholder({ 
  slot, 
  format = 'auto', 
  className = '',
  label = 'Advertisement'
}: AdPlaceholderProps) {
  return (
    <div className={`bg-gray-100 border border-gray-300 rounded-lg p-4 text-center ${className}`}>
      <p className="text-sm text-gray-500 mb-2">{label}</p>
      <div className="bg-gray-200 rounded" style={{ 
        minHeight: format === 'horizontal' ? '90px' : '250px',
        width: '100%'
      }}>
        <p className="text-xs text-gray-400 pt-8">
          Ad Space - {format === 'horizontal' ? '728x90' : '300x250'}
        </p>
      </div>
    </div>
  );
}

interface MonetizationWrapperProps {
  children: React.ReactNode;
}

// Monetization wrapper that includes strategic ad placements
export function MonetizationWrapper({ children }: MonetizationWrapperProps) {
  return (
    <div className="min-h-screen">
      {/* Header Ad - 728x90 leaderboard */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <AdPlaceholder 
          slot="header" 
          format="horizontal" 
          className="mb-6"
          label="Advertisement"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4">
        {/* Content Area */}
        <div className="flex-1 lg:mr-8">
          {children}
        </div>

        {/* Sidebar Ad - 300x250 rectangle */}
        <div className="lg:w-80 mt-8 lg:mt-0">
          <div className="sticky top-4">
            <AdPlaceholder 
              slot="sidebar" 
              format="rectangle" 
              className="mb-6"
              label="Advertisement"
            />
          </div>
        </div>
      </div>

      {/* Footer Ad - 728x90 leaderboard */}
      <div className="max-w-4xl mx-auto px-4 pb-8 mt-12">
        <AdPlaceholder 
          slot="footer" 
          format="horizontal" 
          className="mt-6"
          label="Advertisement"
        />
      </div>
    </div>
  );
}

// Export ready-to-use AdSense integration instructions
export const ADSENSE_INTEGRATION_GUIDE = `
# AdSense Integration Guide

## Quick Setup (Once operator provides AdSense account):

1. Replace AdPlaceholder component with real AdSense code:
   - Update data-ad-client with your publisher ID (ca-pub-XXXXXXXXXX)
   - Update data-ad-slot for each placement

2. Add AdSense script to layout.tsx:
   <Script
     async
     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossOrigin="anonymous"
   />

3. Current ad placements:
   - Header: 728x90 leaderboard
   - Sidebar: 300x250 rectangle (desktop only)
   - Footer: 728x90 leaderboard

4. Estimated revenue per 1000 visitors:
   - Low: $2-5 (0.2-0.5% CTR)
   - Medium: $5-15 (0.5-1.5% CTR)
   - High: $15-30 (1.5-3% CTR)
`;