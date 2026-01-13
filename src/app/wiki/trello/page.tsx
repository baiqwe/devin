import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageSquare, Map, Info } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Devil Hunter Roblox Trello Link & Official Discord',
    description: 'Official Devil Hunter Roblox Trello link, Discord server, and game controls. Access the official roadmap and tier lists here.',
    keywords: ['Devil Hunter Trello', 'Devil Hunter Discord', 'Official Trello Link', 'Roblox Devil Hunter Wiki Trello'],
}

export default function TrelloPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Devil Hunter Official Trello & Links</h1>

            <div className="grid gap-6 md:grid-cols-2 mb-10">
                {/* Trello Card */}
                <Card className="border-blue-500 border-l-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Map className="h-6 w-6 text-blue-600" />
                            Official Trello Board
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            The official Trello contains the game roadmap, list of all contracts, drop rates, and developer updates.
                        </p>
                        <div className="flex flex-col gap-2">
                            <Button asChild className="w-full bg-[#0079BF] hover:bg-[#026AA7]">
                                <a href={siteConfig.links.game} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Open Trello Board
                                </a>
                            </Button>
                            <p className="text-xs text-muted-foreground text-center mt-2">
                                *Note: Trello is managed by the game developers, not this wiki.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Discord Card */}
                <Card className="border-indigo-500 border-l-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-6 w-6 text-indigo-600" />
                            Official Discord Server
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Join the community to trade items, find raid groups, and see the latest announcements.
                        </p>
                        <Button asChild className="w-full bg-[#5865F2] hover:bg-[#4752C4]">
                            <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Join Discord Server
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Trello Summary Content (SEO Content) */}
            <div className="prose dark:prose-invert max-w-none">
                <h2>What&apos;s on the Devil Hunter Trello?</h2>
                <p>
                    Many players look for the <strong>Devil Hunter Trello</strong> to find specific stats about contracts and fiends.
                    Here is a summary of the key information you can find there:
                </p>
                <ul>
                    <li><strong>Contract Tier Lists:</strong> Official rankings from the developers.</li>
                    <li><strong>Spawn Locations:</strong> Maps for finding Contracts and NPCs.</li>
                    <li><strong>Update Logs:</strong> Details on the latest patches and nerfs.</li>
                </ul>
                <p>
                    If you cannot access Trello, you can browse our <a href="/wiki/contracts" className="text-blue-600 hover:underline">Contracts Wiki</a> or <a href="/codes" className="text-blue-600 hover:underline">Active Codes</a> page which we keep updated manually.
                </p>
            </div>
        </div>
    )
}
