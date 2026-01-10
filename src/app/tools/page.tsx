import { Metadata } from 'next'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dice5, Calculator, MapPin, Hammer } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import SEOHead from '@/components/SEOHead'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = generateSEOMetadata({
  title: 'The Forge Calculator & Tools - Forge Simulator, Ore Finder, Reroll',
  description: 'Free online calculators for The Forge Roblox. Use our Forging Calculator to plan crafting, Ore Depth Finder for mining, and Race Reroll Simulator to test your luck before spending Robux.',
  keywords: [
    'the forge calculator',
    'forge calculator roblox',
    'the forge tools',
    'forge reroll simulator',
    'the forge ore depth',
    'forging calculator',
    'ore depth finder',
    'roblox the forge wiki',
    'the forge crafting calculator',
    'race reroll simulator',
  ],
  canonicalUrl: `${siteConfig.url}/tools`,
  type: 'website',
})

const tools = [
  {
    title: 'Reroll Simulator',
    description: 'Simulate race rerolls to test your luck before spending Robux. See your chances of getting Mythical races like Angel and Demon.',
    href: '/tools/reroll-simulator',
    icon: Dice5,
    color: 'from-purple-500 to-indigo-600',
    hoverColor: 'hover:from-purple-600 hover:to-indigo-700',
    badge: 'Popular',
  },
  {
    title: 'Ore Depth Finder',
    description: 'Find which ores you can mine at your current depth, or discover the best depth to find specific ores. Essential for efficient mining.',
    href: '/tools/ore-depth-finder',
    icon: MapPin,
    color: 'from-blue-500 to-cyan-600',
    hoverColor: 'hover:from-blue-600 hover:to-cyan-700',
    badge: 'New',
  },
  {
    title: 'Forging Calculator',
    description: 'Calculate the exact materials needed to forge weapons and tools. Plan your mining trips efficiently with this comprehensive calculator.',
    href: '/tools/forging-calculator',
    icon: Calculator,
    color: 'from-amber-500 to-orange-600',
    hoverColor: 'hover:from-amber-600 hover:to-orange-700',
    badge: 'New',
  },
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 max-w-6xl">
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
        ]}
      />

      <SEOHead
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
        ]}
      />

      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
          The Forge Tools
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Interactive tools and calculators to help you master The Forge Roblox. Plan your strategy, test your luck, and optimize your gameplay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <a
              key={tool.href}
              href={tool.href}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-amber-400 dark:hover:border-amber-600">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} ${tool.hoverColor} transition-all group-hover:scale-110`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {tool.badge && (
                      <span className="px-2 py-1 text-xs font-bold rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          )
        })}
      </div>

      {/* Additional Info */}
      <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Why Use These Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">💰 Save Resources</h3>
              <p>Plan your mining and forging activities to avoid wasting rare materials on inefficient strategies.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">🎯 Optimize Strategy</h3>
              <p>Test different approaches before committing to in-game actions. Know your odds before spending Robux.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">📊 Data-Driven Decisions</h3>
              <p>Make informed choices based on accurate calculations and probability simulations.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">⚡ Save Time</h3>
              <p>Quickly find the information you need without manually calculating or testing in-game.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Content Section */}
      <div className="mt-12 prose prose-lg max-w-none bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">About The Forge Calculator Tools</h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our <strong>Forge Calculator</strong> suite provides essential tools for mastering The Forge on Roblox. Whether you&apos;re a new player trying to understand ore depths or an experienced crafter optimizing your forging process, these calculators give you the data you need.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">How the Forging Calculator Works</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Forging Calculator uses the exact in-game recipes to calculate material requirements. Enter your target weapon or tool, and it instantly shows you the ore count, ingot requirements, and estimated mining time. This saves hours of trial-and-error crafting.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Ore Depth Finder Algorithm</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our Ore Depth Finder maps all ore spawn ranges from 0m to 1200m+ depth. The algorithm cross-references official spawn tables with community-verified data to show you exactly where each ore spawns, its rarity at each depth level, and optimal farming zones.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Race Reroll Probability</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Reroll Simulator uses the official drop rates: Common races (Human, Goblin) at 30%, Rare races (Dwarf, Elf) at 15%, Epic races at 5%, and Mythical races (Angel, Demon) at 0.5-1%. Simulate thousands of rerolls before spending real Robux to understand your true odds.
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">
          All calculator data is verified against The Forge game mechanics as of January 2026. For detailed guides, check our <a href="/blog" className="text-amber-600 dark:text-amber-400 hover:underline">Blog</a> and <a href="/wiki" className="text-amber-600 dark:text-amber-400 hover:underline">Wiki</a>.
        </p>
      </div>
    </div>
  )
}

