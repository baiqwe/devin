import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types/blog'

const blogDirectory = path.join(process.cwd(), 'src/data/blog')

export function getAllBlogPosts(): BlogPost[] {
    try {
        if (!fs.existsSync(blogDirectory)) {
            console.warn(`Blog directory not found: ${blogDirectory}`)
            return []
        }
        const fileNames = fs.readdirSync(blogDirectory)

        const posts = fileNames
            .filter(fileName => fileName.endsWith('.md'))
            .map(fileName => {
                const slug = fileName.replace(/\.md$/, '')
                const fullPath = path.join(blogDirectory, fileName)
                const fileContents = fs.readFileSync(fullPath, 'utf8')
                const { data, content } = matter(fileContents)

                return {
                    slug,
                    title: data.title,
                    description: data.description,
                    content,
                    author: data.author || { name: 'Devil Hunter Wiki Team', role: 'Game Expert' },
                    publishedAt: data.publishedAt,
                    updatedAt: data.updatedAt,
                    category: data.category,
                    tags: data.tags || [],
                    featuredImage: data.featuredImage,
                    readingTime: data.readingTime,
                    lang: data.lang || 'en',
                } as BlogPost
            })
            .sort((a, b) => {
                // Sort by date, newest first
                return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
            })

        return posts
    } catch (error) {
        console.error('Error getting all blog posts:', error)
        return []
    }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(blogDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            slug,
            title: data.title,
            description: data.description,
            content,
            author: data.author || { name: 'Devil Hunter Wiki Team', role: 'Game Expert' },
            publishedAt: data.publishedAt,
            updatedAt: data.updatedAt,
            category: data.category,
            tags: data.tags || [],
            featuredImage: data.featuredImage,
            readingTime: data.readingTime,
            lang: data.lang || 'en',
        } as BlogPost
    } catch (error) {
        return null
    }
}

export function getAllBlogSlugs(): string[] {
    try {
        if (!fs.existsSync(blogDirectory)) {
            return []
        }
        const fileNames = fs.readdirSync(blogDirectory)
        return fileNames
            .filter(fileName => fileName.endsWith('.md'))
            .map(fileName => fileName.replace(/\.md$/, ''))
    } catch (error) {
        return []
    }
}
