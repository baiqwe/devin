import { siteConfig } from '@/config/site'
import SearchBar from '@/components/SearchBar'
import codesData from '@/data/codes.json'
import guidesData from '@/data/guides.json'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sword, Skull, Gift, Play, ScrollText, Sparkles } from 'lucide-react'
import YouTubeVideo from '@/components/YouTubeVideo'


export default function HomePage() {
  const activeCodes = codesData.filter((c) => c.status === 'Active')
  const featuredGuides = guidesData.slice(0, 4)

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-8 py-10 bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-red-100 dark:border-gray-800">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          Devil Hunter Roblox Wiki & Strategy Guide
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          The ultimate resource for <strong>Devil Hunter Roblox</strong>. <br />
          Find Codes, Contract Tier Lists, Fiend Guides, and the official Trello/Discord links.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-8 relative z-10">
          <div className="w-full max-w-xl">
            <SearchBar />
          </div>
        </div>

        {/* Quick Actions / Trello Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href={siteConfig.links.game} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-700 transition-all shadow-lg hover:shadow-gray-500/30">
            <Play className="w-5 h-5" /> Play Game
          </a>
          <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#5865F2] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4752C4] transition-all shadow-lg hover:shadow-blue-500/30">
            Discord
          </a>
          <a href="/wiki/tier-list" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30">
            <Sword className="w-5 h-5" /> Meta Tier List
          </a>
        </div>

        {/* 🎯 策略一：直接展示 Top 3 Codes - 留住搜 Codes 的用户 */}
        <div className="w-full max-w-2xl mx-auto bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl border-2 border-green-500 shadow-xl overflow-hidden">
          <div className="bg-green-600 px-4 py-3 flex justify-between items-center">
            <h3 className="text-white font-bold flex items-center gap-2">
              <Gift className="w-5 h-5" /> Latest Working Codes
            </h3>
            <a href="/codes" className="text-xs text-white underline hover:text-green-100">View All {activeCodes.length} Codes →</a>
          </div>
          <div className="p-0">
            <table className="w-full text-sm text-left">
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {activeCodes.slice(0, 3).map((code) => (
                  <tr key={code.code} className="hover:bg-green-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-green-600 dark:text-green-400 select-all cursor-pointer text-lg">
                      {code.code}
                    </td>
                    <td className="p-4 text-gray-600 dark:text-gray-300 text-sm">
                      🎁 {code.reward}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 dark:bg-gray-900/50 px-4 py-3 text-center border-t border-green-100 dark:border-gray-700">
            <a href="/codes" className="text-sm font-bold text-green-600 hover:underline flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" /> Click to see all {activeCodes.length} codes and how to redeem...
            </a>
          </div>
        </div>
      </div>

      {/* 🎰 策略三：Reroll 模拟器前置 - 增加互动 */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-2 border-amber-400 dark:border-amber-600 p-6 rounded-xl text-center mb-10 shadow-lg">
        <p className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-lg">🎰 Feeling Lucky?</p>
        <a href="/tools/reroll-simulator" className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-amber-600 hover:-translate-y-1 transition-all text-lg">
          Simulate Fiend Reroll (Free)
        </a>
        <p className="text-sm text-amber-700 dark:text-amber-400 mt-3">Don&apos;t waste Robux! Test your luck here first. Can you roll the 0.1% Chainsaw Fiend?</p>
      </div>

      {/* Featured Content: Chainsaw Fiend & 策略二：视觉化 Meta Tier List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Chainsaw Fiend Promo */}
        <div className="bg-gradient-to-br from-red-900 to-orange-900 text-white rounded-xl p-8 relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1 block">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-red-500 text-white border-none animate-pulse">S+ TIER</Badge>
              <span className="text-red-200 font-semibold text-sm">0.1% Drop Rate</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Chainsaw Fiend</h2>
            <p className="text-red-100 mb-6">
              The rarest and most powerful transformation in Devil Hunter. Learn about its insane regeneration and devil-eating abilities.
            </p>
            <a href="/wiki/fiends" className="inline-block bg-white text-red-900 px-6 py-2 rounded-lg font-bold hover:bg-red-50 transition-colors">
              View Stats & Abilities →
            </a>
          </div>
          <Skull className="absolute -bottom-6 -right-6 w-48 h-48 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
        </div>

        {/* 🎯 策略二：视觉化 Tier List - 利用 "谁最强" 心理 */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-6 relative overflow-hidden group border border-gray-700">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Current Meta (Jan 2026)
                </h2>
                <p className="text-gray-400 text-xs">Based on PVP win rates</p>
              </div>
              <Badge className="bg-purple-600 border-none">S-TIER</Badge>
            </div>

            {/* 视觉化列表 */}
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm shadow-lg">1</div>
                <div className="flex-1">
                  <div className="font-bold text-sm">Ghost Devil</div>
                  <div className="text-[10px] text-gray-300">Best for: M1/M2 Grab Combos</div>
                </div>
                <span className="text-[10px] bg-purple-500/30 px-2 py-1 rounded">0.5%</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm shadow-lg">2</div>
                <div className="flex-1">
                  <div className="font-bold text-sm">Snake Devil</div>
                  <div className="text-[10px] text-gray-300">Best for: Devil Summons</div>
                </div>
                <span className="text-[10px] bg-purple-500/30 px-2 py-1 rounded">0.3%</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm shadow-lg">3</div>
                <div className="flex-1">
                  <div className="font-bold text-sm">Mantis Devil</div>
                  <div className="text-[10px] text-gray-300">Best for: Infinite Combos</div>
                </div>
                <span className="text-[10px] bg-purple-500/30 px-2 py-1 rounded">0.5%</span>
              </div>
            </div>

            <a href="/wiki/tier-list" className="w-full block text-center bg-white text-gray-900 px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform text-sm">
              View Full Tier List (13 Contracts) →
            </a>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Codes Update Card */}
          <a href="/codes" className="bg-white dark:bg-gray-800 border-l-4 border-green-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-bold rounded-full">CODES</span>
              <span className="text-xs text-gray-500">Updated Today</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors">
              New Codes Available!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Found <strong>{activeCodes.length} active codes</strong> for free Yen and Rerolls. Redeem them before they expire!
            </p>
          </a>

          {/* Surgery Kit Guide Card */}
          <a href="/blog/how-to-use-surgery-kit" className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-bold rounded-full">GUIDE</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
              How to Use Surgery Kit
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Learn how to harvest hearts and legs from enemies to form contracts with Leech and Mold devils.
            </p>
          </a>

          {/* Reroll Simulator Card */}
          <a href="/tools/reroll-simulator" className="bg-white dark:bg-gray-800 border-l-4 border-amber-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-bold rounded-full">TOOL</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-amber-600 transition-colors">
              Simulate Fiend Rerolls
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Test your luck! See if you can roll the 0.1% Chainsaw Fiend without spending real Robux.
            </p>
          </a>
        </div>
      </div>



      {/* Featured Guides Grid */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Popular Guides</h2>
          <a
            href="/wiki"
            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 font-semibold"
          >
            View All Guides →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGuides.map((guide) => (
            <a
              key={guide.slug}
              href={guide.slug.startsWith('..') ? guide.slug.replace('..', '') : `/wiki/${guide.slug}`}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                  {guide.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 flex-grow">{guide.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{guide.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-3">
            <Play className="h-8 w-8 text-red-600" />
            Watch Gameplay
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Devil Hunter Beginner Guide</h3>
            <YouTubeVideo
              videoId="gnat7SB3-3g"
              title="The COMPLETE Devil Hunter Starter Guide"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Fiend Showcase</h3>
            <YouTubeVideo
              videoId="Zpu5X1ivEoY"
              title="Fiend is WAY TOO BROKEN in DEVIL HUNTER"
            />
          </div>
        </div>
      </div>

      {/* Game Info Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Devil Hunter Roblox</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          <strong>Devil Hunter</strong> is a popular Roblox open-world RPG inspired by the anime Chainsaw Man.
          Players can form contracts with Devils, complete quests, and hunt down fiends.
          Choose to remain human with powerful contracts, or become a Fiend yourself to gain monstrous abilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Game Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Open World exploration with dynamic events</li>
              <li>13+ Unique Contracts (Ghost, Snake, Fox, etc.)</li>
              <li>8+ Playable Fiend Forms (Chainsaw, Shark, Bomb, etc.)</li>
              <li>Raids, Clan Wars, and Ranked PvP</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Wiki Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Up-to-date Code List for free rewards</li>
              <li>Contract & Fiend Tier Lists</li>
              <li>Detailed guides for items like Surgery Kit</li>
              <li>Community tools and simulators</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
