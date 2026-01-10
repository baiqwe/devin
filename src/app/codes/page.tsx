// File: src/app/codes/page.tsx

import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import codesData from '@/data/codes.json'

import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ArrowRight, Skull, Sword } from 'lucide-react'
import CopyButton from '@/components/CopyButton'
import LastUpdated from '@/components/LastUpdated'
import AdsterraBanner300x250 from '@/components/ads/AdsterraBanner300x250'
import AdsterraNative from '@/components/ads/AdsterraNative'

// 1. Dynamic Date Logic for SEO Titles (Static for build)
const date = new Date();
const currentMonth = date.toLocaleString('default', { month: 'long' });
const currentYear = date.getFullYear();

// 2. SEO Metadata
export const metadata: Metadata = generateSEOMetadata({
  title: `Devil Hunter Codes (${currentMonth} ${currentYear}) - Wiki & Trello`,
  description: `All active Devil Hunter codes for ${currentMonth} ${currentYear}. Get free Yen, Fiend Rerolls, Clan Rerolls, and Skill Point Resets. Updated daily!`,
  keywords: [
    'Devil Hunter Codes',
    'Devil Hunter Roblox Codes',
    'Devil Hunter Trello',
    'Devil Hunter Wiki',
    'Devil Hunter Fiend Reroll',
    'Roblox Devil Hunter',
  ],
  canonicalUrl: `${siteConfig.url}/codes`,
  type: 'website',
})

export default function CodesPage() {
  const activeCodes = codesData.filter((code) => code.status === 'Active')
  const expiredCodes = codesData.filter((code) => code.status === 'Expired')

  // Static date - update this manually when codes are actually updated
  const lastVerifiedDate = "2026-01-10T12:00:00.000Z"

  // FAQ Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: lastVerifiedDate,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I redeem codes in Devil Hunter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First, join the official Devil Hunter Roblox group and reach "First Class Hunter" status after completing the tutorial. Then open your phone by pressing N, select the blue bird "Codes" icon, enter the code and press enter.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the latest active codes for Devil Hunter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Currently, there are ${activeCodes.length} active codes available, including rewards like Yen, Fiend Rerolls, Clan Rerolls, and Skill Point Resets.`,
        },
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 max-w-6xl">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Codes', url: '/codes' },
        ]}
      />

      {/* SEO Head Component with Schema */}
      <SEOHead
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Codes', url: '/codes' },
        ]}
        schema={jsonLd}
      />

      {/* SEO Intro Content (Keyword Rich) */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          Devil Hunter Codes ({currentMonth} {currentYear})
        </h1>

        {/* Dynamic Date Component */}
        <div className="flex justify-center mb-6">
          <LastUpdated />
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Looking for the latest <strong className="text-gray-900 dark:text-gray-100">Devil Hunter codes</strong>?
          We monitor the official Discord daily to bring you free Yen, Fiend Rerolls, and Skill Point Resets!
        </p>
      </div>

      {/* Internal Linking / CTA Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
        {/* Link 1: Contract Tier List */}
        <a href="/wiki/contracts" className="group relative overflow-hidden bg-gradient-to-br from-red-500 to-orange-600 rounded-xl p-5 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sword className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
            Contract Tier List (S-Tier Meta) <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </h3>
          <p className="text-red-100 text-xs sm:text-sm font-medium">
            Got <strong>Fiend Rerolls</strong>? See which contracts are dominating the meta right now.
          </p>
        </a>

        {/* Link 2: Surgery Kit Guide */}
        <a href="/guides/surgery-kit" className="group relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-5 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Skull className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
            Surgery Kit Guide <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </h3>
          <p className="text-blue-100 text-xs sm:text-sm font-medium">
            How to use the Surgery Kit to harvest body parts for contracts like Leech Devil and Mold Devil.
          </p>
        </a>
      </div>

      {/* Active Codes Grid */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            Active Codes
          </h2>
          <span className="text-xs sm:text-sm bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full font-medium whitespace-nowrap">
            {activeCodes.length} Working
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {activeCodes.map((code, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 border-l-4 border-red-500 shadow-md rounded-lg p-4 sm:p-5 hover:shadow-lg transition-all hover:border-red-600">
              <div className="flex justify-between items-start mb-3 gap-2">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="font-mono text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 tracking-wide break-all">{code.code}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <CopyButton text={code.code} size="sm" />
                  {code.isNew && (
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full uppercase">NEW</span>
                  )}
                  <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded-full uppercase">Active</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-red-700 dark:text-red-400 font-medium mb-1">🎁 {code.reward}</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{code.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Adsterra Ad - Desktop: 300x250, Mobile: Native Banner */}
      <div className="mb-16">
        <div className="hidden md:block">
          <AdsterraBanner300x250 />
        </div>
        <div className="block md:hidden">
          <AdsterraNative />
        </div>
      </div>

      {/* How to Redeem Codes Section */}
      <div className="prose prose-lg dark:prose-invert max-w-none bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">How to Redeem Devil Hunter Codes (2026)</h2>

        <p className="lead text-xl text-gray-700 dark:text-gray-300 mb-6">
          Redeeming codes in <strong>Devil Hunter</strong> requires a few steps. Here&apos;s the complete guide:
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">Step 1: Join the Roblox Group</h3>
        <p className="text-gray-700 dark:text-gray-300">
          You must first join the <strong>official Devil Hunter Roblox group</strong> to unlock the ability to redeem codes.
          This is a requirement set by the developers.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">Step 2: Complete the Tutorial</h3>
        <p className="text-gray-700 dark:text-gray-300">
          After joining the game, complete the tutorial by speaking to the <strong>Division Captains</strong>.
          Once you reach <strong>&quot;First Class Hunter&quot;</strong> status, you&apos;ll unlock your in-game phone.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">Step 3: Open Your Phone</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Press <strong>N</strong> to open your phone, then select the blue bird <strong>&quot;Codes&quot;</strong> icon.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">Step 4: Enter the Code</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Type or paste the code exactly as shown (codes are case-sensitive), then press <strong>Enter</strong> to claim your reward.
        </p>

        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-l-4 border-l-4 border-red-500 my-4">
          <p className="font-bold text-red-900 dark:text-red-100">
            ⚠️ Trouble Redeeming?
          </p>
          <p className="text-sm text-red-800 dark:text-red-200 mt-1">
            Make sure you&apos;ve joined the Roblox group and completed the tutorial. Some codes require you to be in a fresh server.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">What Do Codes Give You?</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Yen:</strong> In-game currency for buying items and upgrades</li>
          <li><strong>Fiend Rerolls:</strong> Chance to get a better Fiend form (use on <a href="/wiki/fiends" className="text-red-600 hover:underline">Fiend Tier List</a>)</li>
          <li><strong>Clan Rerolls:</strong> Reroll your clan for better passives</li>
          <li><strong>Skill Point Resets:</strong> Reset your skill points to try a new build</li>
          <li><strong>Haircolor Rerolls:</strong> Customize your character appearance</li>
        </ul>
      </div>

      {/* Expired Codes (SEO Food - Keep them but visually muted) */}
      {expiredCodes.length > 0 && (
        <div className="opacity-70">
          <h2 className="text-xl font-bold mb-4 text-gray-600 dark:text-gray-400">Expired Codes (Archive)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {expiredCodes.map((code, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                <span className="font-mono font-semibold text-gray-600 dark:text-gray-400 line-through block">{code.code}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
