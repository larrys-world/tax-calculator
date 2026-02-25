'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import monetization to avoid SSR issues
const MonetizationWrapper = dynamic(
  () => import('../components/monetization/MonetizationWrapper').then(mod => mod.MonetizationWrapper),
  { ssr: false }
);

type FilingStatus = 'single' | 'marriedJointly';

export default function TaxCalculator() {
  const [income, setIncome] = useState('');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [standardDeduction, setStandardDeduction] = useState(true);
  const [results, setResults] = useState<any>(null);

  // 2024 Tax Brackets
  const taxBrackets = {
    single: [
      { min: 0, max: 11600, rate: 0.10 },
      { min: 11600, max: 47150, rate: 0.12 },
      { min: 47150, max: 100525, rate: 0.22 },
      { min: 100525, max: 191950, rate: 0.24 },
      { min: 191950, max: 243725, rate: 0.32 },
      { min: 243725, max: 609350, rate: 0.35 },
      { min: 609350, max: Infinity, rate: 0.37 }
    ],
    marriedJointly: [
      { min: 0, max: 23200, rate: 0.10 },
      { min: 23200, max: 94300, rate: 0.12 },
      { min: 94300, max: 201050, rate: 0.22 },
      { min: 201050, max: 383900, rate: 0.24 },
      { min: 383900, max: 487450, rate: 0.32 },
      { min: 487450, max: 731200, rate: 0.35 },
      { min: 731200, max: Infinity, rate: 0.37 }
    ]
  };

  const standardDeductions = {
    single: 14600,
    marriedJointly: 29200
  };

  const calculateTax = () => {
    const grossIncome = parseFloat(income) || 0;
    const deduction = standardDeduction ? standardDeductions[filingStatus] : 0;
    const taxableIncome = Math.max(0, grossIncome - deduction);
    
    const brackets = taxBrackets[filingStatus];
    let tax = 0;
    let previousMax = 0;
    
    for (const bracket of brackets) {
      if (taxableIncome > bracket.min) {
        const taxableInBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
        tax += taxableInBracket * bracket.rate;
      }
    }
    
    const afterTaxIncome = grossIncome - tax;
    const effectiveRate = grossIncome > 0 ? (tax / grossIncome) * 100 : 0;
    
    setResults({
      grossIncome,
      deduction,
      taxableIncome,
      tax,
      afterTaxIncome,
      effectiveRate
    });
  };

  return (
    <MonetizationWrapper>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Free Tax Calculator 2024
          </h1>
          
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Income
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your annual income"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filing Status
                </label>
                <select
                  value={filingStatus}
                  onChange={(e) => setFilingStatus(e.target.value as FilingStatus)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="single">Single</option>
                  <option value="marriedJointly">Married Filing Jointly</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="standardDeduction"
                  checked={standardDeduction}
                  onChange={(e) => setStandardDeduction(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="standardDeduction" className="ml-2 block text-sm text-gray-700">
                  Use Standard Deduction (${standardDeductions[filingStatus].toLocaleString()})
                </label>
              </div>
              
              <button
                onClick={calculateTax}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
              >
                Calculate Tax
              </button>
            </div>
            
            {results && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Results</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Income:</span>
                    <span className="font-medium">${results.grossIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Standard Deduction:</span>
                    <span className="font-medium">-${results.deduction.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxable Income:</span>
                    <span className="font-medium">${results.taxableIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Federal Tax:</span>
                    <span className="font-medium">-${results.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600 text-lg font-semibold pt-3 border-t">
                    <span>After-Tax Income:</span>
                    <span>${results.afterTaxIncome.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Effective Tax Rate:</span>
                    <span>{results.effectiveRate.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto text-center text-sm text-gray-600">
            <p>This calculator provides estimates based on 2024 federal tax brackets.</p>
            <p>Consult a tax professional for personalized advice.</p>
          </div>
        </div>
      </div>
    </MonetizationWrapper>
  );
}