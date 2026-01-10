"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dice6, RotateCcw } from "lucide-react"
import Link from "next/link"
import fiendsData from "@/data/fiends.json"
import Breadcrumbs from "@/components/Breadcrumbs"
import SEOHead from "@/components/SEOHead"

// Fiend probabilities (based on game data)
const fiendProbabilities = {
  "S+": 0.001, // 0.1% for S+ tier (Chainsaw)
  S: 0.01, // 1% for S tier
  A: 0.05, // 5% for A tier
  B: 0.15, // 15% for B tier
  C: 0.789, // Rest for C tier
}

function getRandomFiend() {
  const random = Math.random()
  let cumulative = 0

  for (const [tier, probability] of Object.entries(fiendProbabilities)) {
    cumulative += probability
    if (random <= cumulative) {
      const tierFiends = fiendsData.filter((fiend) => fiend.tier === tier)
      if (tierFiends.length > 0) {
        return tierFiends[Math.floor(Math.random() * tierFiends.length)]
      }
    }
  }

  // Fallback to C tier
  const cTierFiends = fiendsData.filter((fiend) => fiend.tier === "C")
  if (cTierFiends.length > 0) {
    return cTierFiends[0]
  }

  // Final fallback
  return fiendsData[0] || null
}

export default function RerollSimulatorPage() {
  const [currentFiend, setCurrentFiend] = useState<typeof fiendsData[0] | null>(
    null
  )
  const [rollHistory, setRollHistory] = useState<typeof fiendsData[0][]>([])
  const [rollCount, setRollCount] = useState(0)

  const handleRoll = () => {
    const newFiend = getRandomFiend()
    if (newFiend) {
      setCurrentFiend(newFiend)
      setRollHistory((prev) => [newFiend, ...prev].slice(0, 10)) // Keep last 10
      setRollCount((prev) => prev + 1)
    }
  }

  const handleReset = () => {
    setCurrentFiend(null)
    setRollHistory([])
    setRollCount(0)
  }

  const tierColors: Record<string, string> = {
    "S+": "from-orange-600 to-red-600",
    S: "from-red-600 to-pink-600",
    A: "from-amber-600 to-yellow-600",
    B: "from-blue-600 to-cyan-600",
    C: "from-gray-600 to-slate-600",
  }

  // Dynamic date for SEO
  const date = new Date()
  const currentMonth = date.toLocaleString('default', { month: 'long' })
  const currentYear = date.getFullYear()

  // FAQ data for SEO
  const faqData = [
    {
      question: 'How do I get free Fiend Rerolls in Devil Hunter?',
      answer: 'You can get free Fiend Rerolls by redeeming codes like "100KLIKES", "FPS", or "MELO150K" from our codes page. The tutorial also grants initial rerolls.',
    },
    {
      question: 'What are the best Fiends to reroll for in Devil Hunter?',
      answer: 'The best Fiend is Chainsaw Fiend (S+ tier, 0.1% drop rate) - extremely rare but incredibly powerful. A-tier Fiends like Shark Fiend and Violence Fiend are strong alternatives.',
    },
    {
      question: 'What are the Fiend reroll probabilities in Devil Hunter?',
      answer: 'Based on community data: Chainsaw Fiend (S+) 0.1%, S-tier 1%, A-tier 5%, B-tier 15%, C-tier 78.9%. Use this simulator to understand your chances.',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 max-w-6xl">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
          { name: 'Reroll Simulator', url: '/tools/reroll-simulator' },
        ]}
      />

      {/* SEO Head */}
      <SEOHead
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
          { name: 'Reroll Simulator', url: '/tools/reroll-simulator' },
        ]}
        faq={faqData}
      />

      {/* SEO Intro Content */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          Devil Hunter Fiend Reroll Simulator ({currentMonth} {currentYear})
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Test your luck with our <strong>Devil Hunter reroll simulator</strong>! Simulate rolling for Fiends to see your chances of getting <span className="font-semibold text-red-700 dark:text-red-400">Chainsaw Fiend</span> (0.1% drop rate) or other rare forms before spending your reroll tokens.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Updated: <span className="font-medium text-red-600 dark:text-red-400">{currentMonth} {new Date().getDate()}, {currentYear}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Simulator */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Roll for a Fiend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center">
                <Button
                  onClick={handleRoll}
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                >
                  <Dice6 className="mr-2 h-5 w-5" />
                  Roll Now
                </Button>
              </div>

              {currentFiend && (
                <div className="text-center">
                  <div
                    className={`bg-gradient-to-r ${tierColors[currentFiend.tier] || tierColors.C
                      } p-6 rounded-lg mb-4`}
                  >
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {currentFiend.name}
                    </h2>
                    <Badge variant="secondary" className="text-lg bg-white/20 text-white">
                      {currentFiend.tier} Tier - {currentFiend.rarity}
                    </Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">{currentFiend.description}</p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      Abilities:
                    </h3>
                    <ul className="space-y-1">
                      {(currentFiend.abilities || []).map((ability: string, idx: number) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2"
                        >
                          <span className="text-red-500 dark:text-red-400">•</span>
                          {ability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {rollCount > 0 && (
                <div className="flex items-center justify-center gap-4">
                  <Button onClick={handleReset} variant="outline">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                  <span className="text-gray-600 dark:text-gray-400">
                    Total Rolls: <strong className="text-red-600 dark:text-red-400">{rollCount}</strong>
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Roll History */}
          {rollHistory.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Recent Rolls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {rollHistory.map((fiend, index) => (
                    fiend && (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={
                              fiend.tier === "S+" || fiend.tier === "S"
                                ? "destructive"
                                : fiend.tier === "A"
                                  ? "default"
                                  : "outline"
                            }
                          >
                            {fiend.tier || "?"}
                          </Badge>
                          <span className="font-semibold text-gray-800 dark:text-gray-100">
                            {fiend.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                          {fiend.rarity || "Unknown"}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Probability Info & SEO Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Roll Probabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-orange-600 to-red-600">
                      S+
                    </Badge>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Chainsaw</span>
                  </div>
                  <span className="font-bold text-orange-600 dark:text-orange-400">
                    0.1%
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-red-600 to-pink-600">
                      S
                    </Badge>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Tier (Rare)</span>
                  </div>
                  <span className="font-bold text-red-600 dark:text-red-400">
                    1.0%
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-amber-600 to-yellow-600">
                      A
                    </Badge>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Tier (Legendary)</span>
                  </div>
                  <span className="font-bold text-amber-600 dark:text-amber-400">
                    5.0%
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600">
                      B
                    </Badge>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Tier (Epic)</span>
                  </div>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    15.0%
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-gray-600 to-slate-600">
                      C
                    </Badge>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Tier (Common)</span>
                  </div>
                  <span className="font-bold text-gray-600 dark:text-gray-400">
                    78.9%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Content Section */}
          <Card>
            <CardHeader>
              <CardTitle>How to Get Free Rerolls</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Get free Fiend Rerolls by redeeming <Link href="/codes" className="text-red-600 dark:text-red-400 hover:underline font-semibold">Devil Hunter codes</Link> like &quot;100KLIKES&quot; or &quot;FPS&quot;. Each code grants multiple rerolls!
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Check our <Link href="/wiki/fiends" className="text-red-600 dark:text-red-400 hover:underline font-semibold">Fiend Tier List</Link> to see which Fiends are worth aiming for!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About This Simulator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                This <strong>Devil Hunter reroll simulator</strong> uses probability data from community research. The ultra-rare <strong>Chainsaw Fiend</strong> has only a <strong>0.1% drop rate</strong> - on average you&apos;ll need 1000 rerolls to get one!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SEO Content: Extended Guide */}
      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What is the Devil Hunter Fiend Reroll Simulator?</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The <strong>Fiend Reroll Simulator</strong> is an interactive tool designed to help <strong>Devil Hunter Roblox</strong> players understand their chances of obtaining different Fiend forms before spending valuable reroll tokens or Robux.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In <strong>Devil Hunter</strong>, your Fiend form determines your combat abilities, transformations, and overall power level. Fiends range from Common (C-tier) like Zombie Fiend to the ultra-rare <strong>Chainsaw Fiend</strong> (S+ tier) with only a 0.1% drop rate.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This simulator uses probability data collected from the community to provide accurate estimates of Fiend drop rates. Test your luck here before spending real money!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Probability Calculations & Strategy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-3">
                <p className="text-sm mb-2"><strong>Probability Distribution:</strong></p>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  <li><strong>Chainsaw Fiend (S+):</strong> 0.1% chance = 1 in 1000 average</li>
                  <li><strong>S-tier:</strong> 1% chance = 1 in 100 average</li>
                  <li><strong>A-tier (Legendary):</strong> 5% chance = 1 in 20 average</li>
                  <li><strong>B-tier (Epic):</strong> 15% chance = 1 in 6.67 average</li>
                  <li><strong>C-tier (Common):</strong> 78.9% chance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Optimal Strategy</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li><strong>If you have C-tier:</strong> Always reroll. You have a 21% chance of getting B-tier or higher.</li>
                  <li><strong>If you have B-tier:</strong> Consider keeping unless you have 50+ rerolls. B-tier is solid for most content.</li>
                  <li><strong>If you have A-tier:</strong> Only reroll if you&apos;re specifically chasing Chainsaw Fiend and have 500+ rerolls saved.</li>
                  <li><strong>If you have Chainsaw Fiend:</strong> Never reroll. You&apos;ve won the lottery!</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Best Fiends to Reroll For</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The absolute best Fiend is <strong>Chainsaw Fiend</strong> (S+ tier, 0.1% drop rate). It has the unique ability to permanently delete other devils by consuming them, plus insane regeneration. However, with only a 0.1% drop rate, you&apos;ll need extreme luck.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              For more realistic goals, A-tier Fiends like <strong>Shark Fiend</strong>, <strong>Violence Fiend</strong>, and <strong>Power Fiend</strong> are excellent choices with a 5% combined drop rate. Shark Fiend has dive combos, Violence Fiend has burst damage, and Power Fiend has versatile blood manipulation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Check our <Link href="/wiki/fiends" className="text-red-600 dark:text-red-400 hover:underline font-semibold">complete Fiend Tier List</Link> for detailed rankings and ability breakdowns!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
