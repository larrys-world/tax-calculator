(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29131,e=>{"use strict";var a=e.i(43476);function t({slot:e,format:t="auto",className:s="",label:r="Advertisement"}){return(0,a.jsxs)("div",{className:`bg-gray-100 border border-gray-300 rounded-lg p-4 text-center ${s}`,children:[(0,a.jsx)("p",{className:"text-sm text-gray-500 mb-2",children:r}),(0,a.jsx)("div",{className:"bg-gray-200 rounded",style:{minHeight:"horizontal"===t?"90px":"250px",width:"100%"},children:(0,a.jsxs)("p",{className:"text-xs text-gray-400 pt-8",children:["Ad Space - ","horizontal"===t?"728x90":"300x250"]})})]})}function s({children:e}){return(0,a.jsxs)("div",{className:"min-h-screen",children:[(0,a.jsx)("div",{className:"max-w-4xl mx-auto px-4 pt-4",children:(0,a.jsx)(t,{slot:"header",format:"horizontal",className:"mb-6",label:"Advertisement"})}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row max-w-7xl mx-auto px-4",children:[(0,a.jsx)("div",{className:"flex-1 lg:mr-8",children:e}),(0,a.jsx)("div",{className:"lg:w-80 mt-8 lg:mt-0",children:(0,a.jsx)("div",{className:"sticky top-4",children:(0,a.jsx)(t,{slot:"sidebar",format:"rectangle",className:"mb-6",label:"Advertisement"})})})]}),(0,a.jsx)("div",{className:"max-w-4xl mx-auto px-4 pb-8 mt-12",children:(0,a.jsx)(t,{slot:"footer",format:"horizontal",className:"mt-6",label:"Advertisement"})})]})}let r=`
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
`;e.s(["ADSENSE_INTEGRATION_GUIDE",0,r,"AdPlaceholder",()=>t,"MonetizationWrapper",()=>s])},49882,e=>{e.n(e.i(29131))}]);