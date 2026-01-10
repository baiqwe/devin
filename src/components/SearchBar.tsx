'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import contractsData from '@/data/contracts.json'
import fiendsData from '@/data/fiends.json'
import codesData from '@/data/codes.json'

// Normalize data for search
const searchIndex = [
  ...contractsData.map(c => ({
    name: c.name,
    type: 'Contract',
    desc: c.description,
    url: '/wiki/contracts',
    rarity: c.rarity,
    tier: c.tier
  })),
  ...fiendsData.map(f => ({
    name: f.name,
    type: 'Fiend',
    desc: f.description,
    url: '/wiki/fiends',
    rarity: f.rarity,
    tier: f.tier
  })),
  ...codesData.filter(c => c.status === 'Active').map(c => ({
    name: c.code,
    type: 'Code',
    desc: c.reward,
    url: '/codes',
    rarity: 'Active',
    tier: ''
  }))
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof searchIndex>([])
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.length > 0) {
      const filtered = searchIndex.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.desc.toLowerCase().includes(value.toLowerCase()) ||
          item.type.toLowerCase().includes(value.toLowerCase())
      )
      setResults(filtered.slice(0, 5))
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search contracts, fiends, codes..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.length > 0 && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <svg
          className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl max-h-96 overflow-y-auto overflow-hidden">
          {results.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    {item.name}
                    {item.tier && <span className="text-xs bg-gray-100 dark:bg-gray-700 px-1.5 rounded">{item.tier}</span>}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{item.desc}</div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                  ${item.type === 'Code' ? 'bg-green-100 text-green-800' :
                    item.type === 'Contract' ? 'bg-red-100 text-red-800' :
                      'bg-orange-100 text-orange-800'}`}>
                  {item.type}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {showResults && query.length > 0 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4 text-center text-gray-500 dark:text-gray-400">
          No results found
        </div>
      )}
    </div>
  )
}
