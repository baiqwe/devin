'use client'

import { useState, useMemo } from 'react'
import { ArrowUpDown, Search, Sword, Shield, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import contractsData from '@/data/contracts.json'

import SEOHead from '@/components/SEOHead'
import Breadcrumbs from '@/components/Breadcrumbs'

type SortOrder = 'asc' | 'desc' | null

// Tier color mapping for badges
const getTierBadgeVariant = (tier: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
  switch (tier) {
    case 'S':
      return 'destructive'
    case 'A':
      return 'default'
    case 'B':
      return 'secondary'
    case 'C':
      return 'outline'
    default:
      return 'secondary'
  }
}

const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'Mythical':
      return 'text-red-500'
    case 'Legendary':
      return 'text-amber-500'
    case 'Epic':
      return 'text-purple-500'
    case 'Rare':
      return 'text-blue-500'
    default:
      return 'text-gray-500'
  }
}

export default function ContractsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [tierFilter, setTierFilter] = useState<string | null>(null)

  // Filter contracts
  const filteredContracts = useMemo(() => {
    let filtered = contractsData.filter((contract) =>
      contract.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (tierFilter) {
      filtered = filtered.filter((contract) => contract.tier === tierFilter)
    }

    return filtered
  }, [searchQuery, tierFilter])

  // Group by tier for display
  const sTierContracts = filteredContracts.filter(c => c.tier === 'S')
  const aTierContracts = filteredContracts.filter(c => c.tier === 'A')
  const bTierContracts = filteredContracts.filter(c => c.tier === 'B')

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
          Complete guide to all <strong>Devil Hunter Roblox contracts</strong>. Contracts are pacts made with devils that grant powerful abilities in exchange for specific debuffs.
          Find the best contracts for PvP and PvE gameplay.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
          <strong>S-Tier contracts</strong> like <strong>Ghost Devil</strong> and <strong>Snake Devil</strong> are extremely powerful but require difficult quests or rare rerolls.
          Use <a href="/codes" className="text-red-600 hover:underline font-semibold">Devil Hunter codes</a> to get free Fiend Rerolls for contract rerolling!
        </p>
      </div>

      {/* Search and Filter Controls */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search contracts by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800"
              />
            </div>
            <div className="flex gap-2">
              {['S', 'A', 'B'].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setTierFilter(tierFilter === tier ? null : tier)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${tierFilter === tier
                      ? 'bg-red-600 text-white'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
                    }`}
                >
                  {tier}-Tier
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* S-Tier Contracts */}
      {sTierContracts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            S-Tier Contracts (Best in Game)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sTierContracts.map((contract) => (
              <Card key={contract.name} className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-xl ${contract.color}`}>{contract.name}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="destructive">{contract.tier}-Tier</Badge>
                      <Badge variant="outline" className={getRarityColor(contract.rarity)}>{contract.rarity}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{contract.description}</p>
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">ABILITIES</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {contract.abilities.map((ability, i) => (
                        <span key={i} className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded text-xs">
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Sword className="h-4 w-4 text-red-500" />
                      <span>DMG: {contract.stats.Damage}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span>SPD: {contract.stats.Speed}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-blue-500" />
                      <span>CMB: {contract.stats.Combo}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    <strong>How to get:</strong> {contract.obtainable}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* A-Tier Contracts */}
      {aTierContracts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-600 dark:text-amber-400 flex items-center gap-2">
            A-Tier Contracts (Strong Choices)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aTierContracts.map((contract) => (
              <Card key={contract.name} className="border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className={`text-lg ${contract.color}`}>{contract.name}</CardTitle>
                    <Badge variant="default">{contract.tier}-Tier</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{contract.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {contract.abilities.slice(0, 2).map((ability, i) => (
                      <span key={i} className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded text-xs">
                        {ability}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    <strong>Get:</strong> {contract.obtainable}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* B-Tier Contracts */}
      {bTierContracts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
            B-Tier Contracts (Solid Options)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bTierContracts.map((contract) => (
              <Card key={contract.name} className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className={`text-lg ${contract.color}`}>{contract.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{contract.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    <strong>Get:</strong> {contract.obtainable}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

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
