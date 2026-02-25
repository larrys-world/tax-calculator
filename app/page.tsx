'use client';

import { useState } from 'react';
import RelatedTools from './RelatedTools';

export default function TaxCalculator() {
  const [income, setIncome] = useState('');
  const [filingStatus, setFilingStatus] = useState('single');
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

  // 2024 Standard Deductions
  const standardDeductions = {
    single: 14600,
    marriedJointly: 29200,
    marriedSeparately: 14600,
    headOfHousehold: 21900
  };

  const calculateTax = () => {
    const grossIncome = parseFloat(income) || 0;
    if (grossIncome <= 0) {
      alert('Please enter a valid income amount');
      return;
    }

    const deduction = standardDeduction ? standardDeductions[filingStatus as keyof typeof standardDeductions] : 0;
    const taxableIncome = Math.max(0, grossIncome - deduction);
    
    const brackets = filingStatus === 'marriedJointly' ? taxBrackets.marriedJointly : taxBrackets.single;
    
    let tax = 0;
    let previousMax = 0;
    
    for (const bracket of brackets) {
      if (taxableIncome > bracket.min) {
        const taxableInThisBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
        tax += taxableInThisBracket * bracket.rate;
      }
    }
    
    const afterTaxIncome = grossIncome - tax;
    const effectiveRate = (tax / grossIncome) * 100;
    
    setResults({
      grossIncome,
      deduction,
      taxableIncome,
      federalTax: tax,
      afterTaxIncome,
      effectiveRate,
      monthlyTakeHome: afterTaxIncome / 12
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">2024 Federal Tax Calculator</h1>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                Annual Gross Income
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="income"
                  id="income"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-gray-300 rounded-md"
                  placeholder="75,000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="filing-status" className="block text-sm font-medium text-gray-700">
                Filing Status
              </label>
              <select
                id="filing-status"
                name="filing-status"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value)}
              >
                <option value="single">Single</option>
                <option value="marriedJointly">Married Filing Jointly</option>
                <option value="marriedSeparately">Married Filing Separately</option>
                <option value="headOfHousehold">Head of Household</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                id="standard-deduction"
                name="standard-deduction"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={standardDeduction}
                onChange={(e) => setStandardDeduction(e.target.checked)}
              />
              <label htmlFor="standard-deduction" className="ml-2 block text-sm text-gray-900">
                Use Standard Deduction
              </label>
            </div>

            <button
              onClick={calculateTax}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Calculate Tax
            </button>
          </div>

          {results && (
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Tax Calculation Results</h2>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Gross Income:</dt>
                  <dd className="text-sm font-medium text-gray-900">${results.grossIncome.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Standard Deduction:</dt>
                  <dd className="text-sm font-medium text-gray-900">-${results.deduction.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Taxable Income:</dt>
                  <dd className="text-sm font-medium text-gray-900">${results.taxableIncome.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200">
                  <dt className="text-sm font-semibold text-gray-900">Federal Tax:</dt>
                  <dd className="text-sm font-semibold text-red-600">${results.federalTax.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-semibold text-gray-900">After-Tax Income:</dt>
                  <dd className="text-sm font-semibold text-green-600">${results.afterTaxIncome.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Effective Tax Rate:</dt>
                  <dd className="text-sm font-medium text-gray-900">{results.effectiveRate.toFixed(2)}%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Monthly Take-Home:</dt>
                  <dd className="text-sm font-medium text-gray-900">${results.monthlyTakeHome.toFixed(2)}</dd>
                </div>
              </dl>
            </div>
          )}

          <div className="mt-8 text-xs text-gray-500">
            <p>* This calculator provides estimates for 2024 federal income tax only.</p>
            <p>* State taxes, FICA taxes, and other deductions are not included.</p>
            <p>* Consult a tax professional for personalized advice.</p>
          </div>
        </div>

        {/* Related Tools Section */}
        <RelatedTools currentTool="tax-calculator" className="mt-8" />
      </div>
    </div>
  );
}