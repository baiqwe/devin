import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import SEOHead from '@/components/SEOHead'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Users, Target, Award, Heart } from 'lucide-react'


export const metadata: Metadata = generateSEOMetadata({
  title: 'About Us - Devil Hunter Wiki',
  description: 'Learn about Devil Hunter Wiki. Created by veteran players to provide the most accurate codes, tier lists, and guides for Devil Hunter Roblox.',
  keywords: ['About Us', 'Devil Hunter Wiki', 'Team', 'Community', 'E-E-A-T', 'Devil Hunter Guides'],
  canonicalUrl: '/about',
})

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <SEOHead
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' },
        ]}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' },
        ]}
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          About {siteConfig.name}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          We are a community-driven resource dedicated to helping players master <strong>Devil Hunter</strong>, the premier Chainsaw Man inspired experience on Roblox.
        </p>
      </div>

      <section className="mb-12">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3">
            <Users className="h-8 w-8 text-red-600 dark:text-red-500" />
            Who We Are
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            <strong>{siteConfig.name}</strong> is created and maintained by veteran <strong>Devil Hunter</strong> players. We have spent countless hours hunting contracts, rerolling fiends, and optimizing builds.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We built this wiki to stop misinformation and provide the community with a reliable source for Codes, Tier Lists, and Mechanics. We are tired of clickbait videos and outdated wikis.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3">
          <Target className="h-8 w-8 text-red-600 dark:text-red-500" />
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Accurate Tier Lists</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our Contract and Fiend Tier Lists are based on rigorous PvP and PvE testing, not just hype.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Verified Codes</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We verify every code daily. No more &quot;invalid code&quot; frustration.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3">
          <Award className="h-8 w-8 text-red-600 dark:text-red-500" />
          Our Expertise (E-E-A-T)
        </h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-md">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">🎮 Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our team has achieved max level and unlocked reliable meta builds. We document mechanic interactions that aren&apos;t explained in the game itself.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">✅ Trustworthiness</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We are transparent about our sources. When a strategy is theoretical, we say so. Our goal is to protect the community from scams and bad advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3">
          <Heart className="h-8 w-8 text-red-600 dark:text-red-500" />
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">📋 Complete Contracts Database</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              From Ghost to Mantis, we detail every skill and passive ability.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">👹 Fiend Guides</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Learn how to get the 0.1% Chainsaw Fiend and master its moveset.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
