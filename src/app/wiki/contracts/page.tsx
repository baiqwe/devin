import { Metadata } from 'next'
import { ArrowUpDown, Search, Sword, Shield, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import SEOHead from '@/components/SEOHead'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContractsClient from './ContractsClient'

export const metadata: Metadata = {
  title: 'All Contracts & Fiends List - Devil Hunter Wiki',
  description: 'Complete list of Contracts (Darkness, Eraser) and Fiends in Devil Hunter. View stats, rarity, and abilities.',
}

export default function ContractsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 max-w-6xl">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Wiki', url: '/wiki' },
          { name: 'Contracts', url: '/wiki/contracts' },
        ]}
      />

      <SEOHead
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Wiki', url: '/wiki' },
          { name: 'Contracts', url: '/wiki/contracts' },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Table',
          about: 'Devil Hunter Roblox Contracts Database',
          name: 'Devil Hunter Contract Tier List',
          description: 'Complete database of all devil contracts in Devil Hunter Roblox with tier rankings, abilities, and how to obtain them',
        }}
        faq={[
          {
            question: "What is the best contract in Devil Hunter?",
            answer: "Ghost Devil, Snake Devil, Mantis Devil, and Curse Devil are all considered S-tier contracts. Ghost Devil is particularly strong for combo starters, while Snake Devil can consume and resummon defeated devils."
          },
          {
            question: "How do I get contracts in Devil Hunter Roblox?",
            answer: "Contracts are obtained through Contract Quests, Rerolls using Fiend Rerolls from codes, or special quest chains. Some contracts like Leech Devil and Mold Devil require body parts harvested with the Surgery Kit."
          }
        ]}
      />

      {/* SEO Intro Content */}
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sword className="h-8 w-8 text-red-600" />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            Devil Hunter Contract Tier List & Guide
          </h1>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
          Complete guide to all <strong>Devil Hunter Roblox contracts</strong>. Contracts are the main abilities inspired by Chainsaw Man that grant humans powerful moves.
          Contracts are pacts made with devils that grant powerful abilities in exchange for specific debuffs.
          Find the best contracts for PvP and PvE gameplay.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
          <strong>S-Tier contracts</strong> like <strong>Ghost Devil</strong> and <strong>Snake Devil</strong> are extremely powerful but require difficult quests or rare rerolls.
          Use <a href="/codes" className="text-red-600 hover:underline font-semibold">Devil Hunter codes</a> to get free Fiend Rerolls for contract rerolling!
        </p>
      </div>

      <ContractsClient />

      {/* Contract Guide Section */}
      <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 mt-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Devil Hunter Contract Guide</h2>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">What are Contracts?</h3>
        <p className="text-gray-700 dark:text-gray-300">
          In <strong>Devil Hunter Roblox</strong>, contracts are pacts made with devils that grant humans powerful abilities.
          Unlike Fiend forms (monster transformations), contracts allow you to remain human while gaining devil powers.
          You can have <strong>multiple contracts</strong> active simultaneously!
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">How to Get Contracts</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Contract Quests:</strong> Complete specific quests to earn contracts</li>
          <li><strong>Fiend Rerolls:</strong> Use rerolls from <a href="/codes" className="text-red-600 hover:underline">codes</a> to try for better contracts</li>
          <li><strong>Surgery Kit Contracts:</strong> Some contracts (Leech Devil, Mold Devil) require body parts harvested with the <a href="/guides/surgery-kit" className="text-red-600 hover:underline">Surgery Kit</a></li>
          <li><strong>Raid Drops:</strong> Zombie Devil drops from Zombie Raid</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">Contract Tier Explanation</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong className="text-red-600">S-Tier:</strong> Best contracts for high-level PvP and PvE. Ghost Devil and Snake Devil dominate the meta.</li>
          <li><strong className="text-amber-600">A-Tier:</strong> Strong contracts that are easier to obtain. Great for most content.</li>
          <li><strong className="text-blue-600">B-Tier:</strong> Solid starter contracts. Good for learning the game.</li>
        </ul>
      </div>

      {/* Related Links */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/wiki/fiends" className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline font-semibold block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-500 transition-colors">
            → Fiend Tier List & Guide
          </a>
          <a href="/guides/surgery-kit" className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline font-semibold block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-500 transition-colors">
            → Surgery Kit Guide
          </a>
          <a href="/codes" className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline font-semibold block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-500 transition-colors">
            → Get Free Reroll Codes
          </a>
          <a href="/tools/reroll-simulator" className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline font-semibold block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 dark:hover:border-red-500 transition-colors">
            → Contract Reroll Simulator
          </a>
        </div>
      </div>
    </div>
  )
}
