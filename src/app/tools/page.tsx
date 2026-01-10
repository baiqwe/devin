import { Metadata } from 'next'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dice5, Skull, Sword } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import SEOHead from '@/components/SEOHead'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Devil Hunter Tools - Fiend Reroll Simulator, Contract Spinner',
  description: 'Free online tools for Devil Hunter Roblox. Use our Fiend Reroll Simulator to test your luck before spending Robux. See your chances of getting Chainsaw Fiend or S-tier contracts.',
  keywords: [
    'devil hunter tools',
    'devil hunter reroll simulator',
    'devil hunter fiend simulator',
    'devil hunter contract spinner',
    'roblox devil hunter wiki',
    'fiend reroll calculator',
  ],
  canonicalUrl: `${siteConfig.url}/tools`,
  type: 'website',
})

const tools = [
  {
    title: 'Fiend Reroll Simulator',
    description: 'Simulate Fiend rerolls to test your luck before spending Robux. See your chances of getting Chainsaw Fiend (0.1%) and other rare forms.',
    href: '/tools/reroll-simulator',
    icon: Dice5,
    color: 'from-red-500 to-orange-600',
    hoverColor: 'hover:from-red-600 hover:to-orange-700',
    badge: 'Popular',
  },
  {
    title: 'Contract Tier Guide',
    description: 'Browse all devil contracts ranked by tier. Find the best contracts for PvP and PvE, with detailed ability breakdowns.',
    href: '/wiki/contracts',
    icon: Sword,
    color: 'from-purple-500 to-indigo-600',
    hoverColor: 'hover:from-purple-600 hover:to-indigo-700',
    badge: 'Guide',
  },
  {
    title: 'Fiend Tier Guide',
    description: 'Complete guide to all Fiend forms. Learn how to become a Fiend and which form is the best for your playstyle.',
    href: '/wiki/fiends',
    icon: Skull,
    color: 'from-gray-700 to-gray-900',
    hoverColor: 'hover:from-gray-800 hover:to-black',
    badge: 'Guide',
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          Devil Hunter Tools
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Interactive tools and calculators to help you master Devil Hunter Roblox. Test your luck with reroll simulators and find the best contracts and fiends.
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
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-red-400 dark:hover:border-red-600">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} ${tool.hoverColor} transition-all group-hover:scale-110`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {tool.badge && (
                      <span className="px-2 py-1 text-xs font-bold rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
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
      <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Why Use These Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">💰 Save Robux</h3>
              <p>Test your reroll luck before spending real money. Know your odds of getting Chainsaw Fiend or S-tier contracts.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">🎯 Optimize Strategy</h3>
              <p>Understand which contracts and fiends are meta. Plan your build before committing to in-game choices.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">📊 Data-Driven Decisions</h3>
              <p>Make informed choices based on accurate drop rates and tier rankings from the community.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">⚡ Save Time</h3>
              <p>Quickly find the information you need without searching through Discord or random videos.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Content Section */}
      <div className="mt-12 prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Devil Hunter Tools</h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our <strong>Devil Hunter tools</strong> provide essential utilities for mastering Devil Hunter on Roblox. Whether you&apos;re trying to get the rare Chainsaw Fiend or find the best contract for PvP, these tools give you the data you need.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Fiend Reroll Probability</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The Reroll Simulator uses the official drop rates: Common Fiends at 15%, Epic Fiends at 3%, Legendary Fiends at 1%, and the ultra-rare <strong>Chainsaw Fiend at 0.1%</strong>. Simulate thousands of rerolls to understand your true odds before spending Robux.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">Contract Tier Rankings</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our contract tier list is based on community consensus and PvP/PvE effectiveness. S-tier contracts like <strong>Ghost Devil</strong> and <strong>Snake Devil</strong> dominate the meta, while A-tier options provide solid alternatives for most players.
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">
          All tool data is verified against Devil Hunter game mechanics as of January 2026. For detailed guides, check our <a href="/blog" className="text-red-600 dark:text-red-400 hover:underline">Blog</a> and <a href="/wiki" className="text-red-600 dark:text-red-400 hover:underline">Wiki</a>.
        </p>
      </div>
    </div>
  )
}
