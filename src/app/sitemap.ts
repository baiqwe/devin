import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { BlogPost } from '@/types/blog'
import { getAllBlogPosts } from '@/lib/blog'
// Import data sources for dynamic sitemap generation
import contractsData from '@/data/contracts.json'
import fiendsData from '@/data/fiends.json'
import itemsData from '@/data/items.json'

// Helper to create URL-friendly slugs from names
function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const baseBuildDate = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/codes`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wiki`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wiki/contracts`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wiki/fiends`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wiki/clans`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wiki/locations`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wiki/items`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wiki/tier-list`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/reroll-simulator`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: baseBuildDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: baseBuildDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Blog Posts
  const blogPosts = getAllBlogPosts()
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post: BlogPost) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic Wiki Detail Pages - Contracts
  const contractPages: MetadataRoute.Sitemap = contractsData.map((contract: { name: string }) => ({
    url: `${baseUrl}/wiki/contracts/${toSlug(contract.name)}`,
    lastModified: baseBuildDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic Wiki Detail Pages - Fiends
  const fiendPages: MetadataRoute.Sitemap = fiendsData.map((fiend: { name: string }) => ({
    url: `${baseUrl}/wiki/fiends/${toSlug(fiend.name)}`,
    lastModified: baseBuildDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic Wiki Detail Pages - Items
  const itemPages: MetadataRoute.Sitemap = itemsData.map((item: { id: string }) => ({
    url: `${baseUrl}/wiki/items/${item.id}`,
    lastModified: baseBuildDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...contractPages, ...fiendPages, ...itemPages]
}
