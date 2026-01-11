import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site'

const date = new Date()
const currentMonth = date.toLocaleString('default', { month: 'long' })
const currentYear = date.getFullYear()

export const metadata: Metadata = generateSEOMetadata({
  title: `Devil Hunter Contracts & Tier List (${currentMonth} ${currentYear})`,
  description: `Complete Devil Hunter Roblox contracts database with tier rankings, abilities, and how to obtain them. Find the best contracts for PvP and PvE including Ghost Devil and Snake Devil.`,
  keywords: [
    'Devil Hunter Contracts',
    'Devil Hunter Tier List',
    'Devil Hunter Contract Guide',
    'Devil Hunter Roblox Contracts',
    'Devil Hunter Ghost Devil',
    'Devil Hunter Wiki',
  ],
  canonicalUrl: `${siteConfig.url}/wiki/contracts`,
  type: 'article',
})

export default function ContractsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
