import { siteConfig } from '@/config/site'

export default function JsonLd() {
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Devil Hunter Wiki',
        alternateName: ['Devil Hunter Hub', 'Devil Hunter Roblox Wiki'],
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Devil Hunter Wiki',
            url: siteConfig.url,
        },
    }

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Devil Hunter Wiki',
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.discord,
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
        </>
    )
}
