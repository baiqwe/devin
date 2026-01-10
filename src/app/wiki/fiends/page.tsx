import { Metadata } from "next"
import Link from "next/link"
import { TierList } from "@/components/TierList"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import fiendsData from "@/data/fiends.json"
import Breadcrumbs from "@/components/Breadcrumbs"
import SEOHead from "@/components/SEOHead"
import { Dice5, ArrowRight, Sparkles, Skull } from "lucide-react"

const date = new Date()
const currentMonth = date.toLocaleString('default', { month: 'long' })
const currentYear = date.getFullYear()

export const metadata: Metadata = {
  title: `Devil Hunter Fiend Tier List & Guide (${currentMonth} ${currentYear}) - Roblox`,
  description: `Complete Devil Hunter Roblox fiend tier list with stats, abilities, and drop rates. Learn how to become a fiend and which fiend form is the best for combat.`,
  keywords: [
    "Devil Hunter Fiends",
    "Devil Hunter Fiend Tier List",
    "Devil Hunter Roblox Fiends",
    "Devil Hunter Chainsaw Fiend",
    "Devil Hunter Shark Fiend",
    "How to become a fiend Devil Hunter",
    "Devil Hunter Wiki",
    "Roblox Devil Hunter",
  ],
}

// Table Schema for fiend stats
const tableSchema = {
  '@context': 'https://schema.org',
  '@type': 'Table',
  about: 'Devil Hunter Roblox Fiend Statistics',
  name: 'Devil Hunter Fiend Tier List',
  description: 'Complete statistics for all fiends in Devil Hunter Roblox game',
}

// Convert fiends data to TierList format
const fiendTierData = fiendsData.map(fiend => ({
  name: fiend.name,
  tier: fiend.tier,
  rarity: fiend.rarity,
  dropRate: fiend.dropRate,
  description: fiend.description,
  passives: fiend.passives || [],
  abilities: fiend.abilities,
  special: fiend.special,
}))

export default function FiendsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 max-w-6xl">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Wiki', url: '/wiki' },
          { name: 'Fiends', url: '/wiki/fiends' },
        ]}
      />

      {/* SEO Head with Table Schema */}
      <SEOHead
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Wiki', url: '/wiki' },
          { name: 'Fiends', url: '/wiki/fiends' },
        ]}
        schema={tableSchema}
      />

      {/* SEO Intro Content */}
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Skull className="h-8 w-8 text-red-600" />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            Devil Hunter Fiend Tier List & Guide (Roblox)
          </h1>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
          Complete guide to all <strong>Devil Hunter Roblox fiends</strong> with detailed stats, abilities, and drop rates.
          Fiends are monster forms that players can transform into, gaining unique powers and abilities.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
          <strong>Important:</strong> The <strong>Chainsaw Fiend</strong> (S+ tier) is the rarest with only a
          <span className="font-bold text-red-600"> 0.1% drop rate</span>. Save your rerolls and use them wisely!
        </p>
      </div>

      {/* Reroll Simulator CTA */}
      <div className="mb-10">
        <Link
          href="/tools/reroll-simulator"
          className="group relative overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-red-500/50 transition-all hover:-translate-y-2 block"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity">
            <Dice5 className="w-32 h-32" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 opacity-10">
            <Sparkles className="w-24 h-24" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 rounded-full p-3 group-hover:bg-white/30 transition-colors">
                <Dice5 className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-1">
                  🎮 Test Your Luck Before Spending Robux!
                </h2>
                <p className="text-red-100 text-sm md:text-base">
                  Use our Fiend Reroll Simulator to see your chances of getting Chainsaw Fiend
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-red-100 group-hover:text-white transition-colors">
              <span className="font-semibold">Try Reroll Simulator Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <div className="bg-white/20 rounded-full px-4 py-1.5">
                <span className="font-semibold">0.1% Chainsaw Rate</span>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-1.5">
                <span className="font-semibold">Free to Use</span>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-1.5">
                <span className="font-semibold">No Robux Required</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* How to Become a Fiend Section */}
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">How to Become a Fiend in Devil Hunter</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          To become a <strong>Fiend</strong> in <strong>Devil Hunter Roblox</strong>, you must first die as a human and choose to be reborn as a devil.
          Fiends gain skills by ranking up and accumulating <strong>&quot;Fear&quot;</strong> through defeating other players, PvE entities, and consuming Devil flesh.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Get free Fiend Rerolls by redeeming <a href="/codes" className="text-red-600 hover:underline font-semibold">Devil Hunter codes</a> like &quot;100KLIKES&quot; or &quot;FPS&quot;.
          Test your luck with our <a href="/tools/reroll-simulator" className="text-red-600 hover:underline font-semibold">Reroll Simulator</a> before spending your rerolls!
        </p>
      </div>

      <TierList races={fiendTierData} />

      {/* Detailed Fiend Stats */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Detailed Fiend Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* S+ Tier */}
          <Card className="border-2 border-red-500">
            <CardHeader>
              <CardTitle className="text-red-600">S+ Tier: Chainsaw Fiend (0.1% Drop Rate)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Chainsaw Fiend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Abilities:</strong> Chainsaw Slash, Chain Pull, Devil Eater, Berserk Mode</li>
                  <li><strong>Passive:</strong> Devil Consumption - absorb devils for Fear</li>
                  <li><strong>Passive:</strong> Extreme HP Regeneration</li>
                  <li><strong>Special:</strong> Can permanently delete devils by consuming them</li>
                  <li><strong>Best For:</strong> End-game PvP, boss hunting</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* A-Tier */}
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-600">A-Tier: Legendary Fiends (1-1.5%)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Shark Fiend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Abilities:</strong> Shark Dive, Bite Rush, Blood Frenzy</li>
                  <li><strong>Passive:</strong> Dive acts as free combo extender</li>
                  <li><strong>Best For:</strong> Aggressive PvP combos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Violence Fiend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Abilities:</strong> Masked Strike, Unleash Power, Brutal Combo</li>
                  <li><strong>Passive:</strong> Remove mask for massive damage boost</li>
                  <li><strong>Best For:</strong> Burst damage builds</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Power Fiend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Abilities:</strong> Blood Hammer, Blood Spear, Crimson Shield</li>
                  <li><strong>Passive:</strong> Create weapons from blood</li>
                  <li><strong>Best For:</strong> Versatile combat with melee/ranged options</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* B-Tier */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">B-Tier: Epic Fiends (3%)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Bomb Fiend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Abilities:</strong> Bomb Throw, Cluster Bomb, Chain Reaction</li>
                  <li><strong>Best For:</strong> AoE damage, crowd control</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Spider Fiend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Abilities:</strong> Web Shot, Cocoon Trap, Venom Bite</li>
                  <li><strong>Best For:</strong> Crowd control, area denial</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* C-Tier */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-600">C-Tier: Common Fiends (15%)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Zombie Fiend</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Abilities:</strong> Zombie Bite, Undead Horde, Plague Spread</li>
                  <li><strong>Passive:</strong> Immune to fear debuffs</li>
                  <li><strong>Best For:</strong> Learning the game, tanky playstyle</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Fiend vs Contract Section */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Fiend vs Contract: Which Should You Choose?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Choose Fiend If:</h3>
              <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc pl-5 space-y-1">
                <li>You want a complete transformation with unique abilities</li>
                <li>You prefer a more &quot;monster&quot; playstyle</li>
                <li>You want to accumulate Fear for ranking up</li>
                <li>You&apos;re aiming for Chainsaw Fiend (the ultimate form)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Choose Contract If:</h3>
              <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc pl-5 space-y-1">
                <li>You want to stay human while gaining devil powers</li>
                <li>You want to stack multiple contracts simultaneously</li>
                <li>You prefer more tactical, combo-based combat</li>
                <li>You want access to Public Safety faction</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Links */}
      <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Related Guides & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/tools/reroll-simulator" className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline font-semibold block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 transition-colors">
            → Fiend Reroll Simulator
          </a>
          <a href="/codes" className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline font-semibold block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 transition-colors">
            → Get Free Reroll Codes
          </a>
          <a href="/wiki/contracts" className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline font-semibold block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 transition-colors">
            → Contract Tier List
          </a>
          <a href="/guides/surgery-kit" className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline font-semibold block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-red-300 transition-colors">
            → Surgery Kit Guide
          </a>
        </div>
      </div>
    </div>
  )
}
