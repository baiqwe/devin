import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import guidesData from "@/data/guides.json"
import Breadcrumbs from "@/components/Breadcrumbs"
import SEOHead from "@/components/SEOHead"
import { ScrollText, Skull, Gift, Wrench, Sword, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Devil Hunter Wiki Hub - Contracts, Fiends, & Guides",
  description: "The ultimate Devil Hunter Roblox Wiki. Complete guides for Contracts, Fiends, Codes, Mechanics, and more.",
  keywords: [
    "Devil Hunter Wiki",
    "Devil Hunter Guides",
    "Roblox Devil Hunter",
    "Devil Hunter Contracts",
    "Devil Hunter Fiends",
  ],
}

const categories = [
  {
    name: "Contracts",
    href: "/wiki/contracts",
    description: "Tier list and ability guide for all Human Contracts",
    icon: ScrollText,
    count: 13,
    color: "text-red-500",
  },
  {
    name: "Fiends",
    href: "/wiki/fiends",
    description: "Detailed stats and drop rates for all Fiend transformations",
    icon: Skull,
    count: 8,
    color: "text-orange-500",
  },
  {
    name: "Codes",
    href: "/codes",
    description: "Latest active codes for free Yen and Rerolls",
    icon: Gift,
    count: 10,
    color: "text-green-500",
  },
  {
    name: "Tools",
    href: "/tools",
    description: "Reroll Simulators and utility tools",
    icon: Wrench,
    count: 2,
    color: "text-blue-500",
  },
]

export default function WikiPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Wiki', url: '/wiki' },
        ]}
      />

      {/* SEO Head */}
      <SEOHead
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Wiki', url: '/wiki' },
        ]}
      />

      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          Devil Hunter Wiki Hub
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The most comprehensive database for <strong className="text-gray-900 dark:text-gray-100">Devil Hunter Roblox</strong>.
          Master the game with our tier lists, guides, and tools.
        </p>
      </div>

      {/* Meta Promo */}
      <div className="mb-12">
        <Link href="/wiki/fiends" className="block relative overflow-hidden rounded-xl bg-gradient-to-r from-red-900 to-red-600 p-8 shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-1">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-red-500 text-white border-none animate-pulse">HOT</Badge>
                <span className="text-red-100 font-semibold">Current Meta</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Chainsaw Fiend Discovered!</h2>
              <p className="text-red-100 text-lg max-w-xl">
                The S+ Tier Chainsaw Fiend has a 0.1% drop rate. Check out its insane stats and regeneration abilities in our updated database.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3 text-white">
                <AlertTriangle className="text-yellow-400" />
                <span className="font-mono font-bold text-xl">0.1% Drop Rate</span>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <Sword className="absolute -bottom-4 -right-4 w-48 h-48 text-white/5 rotate-[-15deg]" />
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <a key={category.name} href={category.href}>
              <Card className="hover:border-red-500 transition-all cursor-pointer h-full hover:shadow-md group">
                <CardHeader className="pb-2">
                  <div className={`text-4xl mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-xl flex justify-between items-center">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 min-h-[40px]">{category.description}</p>
                  <Badge variant="outline" className="group-hover:bg-red-50 dark:group-hover:bg-red-900/20 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {category.count} Items
                  </Badge>
                </CardContent>
              </Card>
            </a>
          )
        })}
      </div>

      {/* Featured Guides */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <ScrollText className="w-8 h-8 text-red-600" />
          Featured Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidesData.map((guide) => (
            <a key={guide.slug} href={guide.slug.startsWith('..') ? guide.slug.replace('..', '') : `/wiki/${guide.slug}`}>
              <Card className="hover:border-red-500 transition-all cursor-pointer h-full hover:shadow-lg border-l-4 border-l-transparent hover:border-l-red-500">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200">{guide.category}</Badge>
                    <span
                      className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${guide.difficulty === "Beginner"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                        : guide.difficulty === "Intermediate"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                    >
                      {guide.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {guide.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
