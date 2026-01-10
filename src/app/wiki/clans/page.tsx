import { Metadata } from 'next'
import clansData from '@/data/clans.json'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SEOHead from '@/components/SEOHead'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
    title: 'Devil Hunter Clans Tier List & Buffs - Best Bloodlines',
    description: 'Complete list of all Clans in Devil Hunter Roblox, ranked by Tier. Find out which clans give the best Soul, Posture, and Health buffs. Reroll guide included.',
}

export default function ClansPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <SEOHead
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Wiki', url: '/wiki' },
                    { name: 'Clans', url: '/wiki/clans' },
                ]}
            />
            <Breadcrumbs
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Wiki', url: '/wiki' },
                    { name: 'Clans', url: '/wiki/clans' },
                ]}
            />

            <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">Clans & Bloodlines Tier List</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Clans (Bloodlines) provide permanent stat buffs. Legendary clans like Hayakawa and Kishimoto are S-Tier for their massive Soul and Posture bonuses.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {clansData.map((clan) => (
                    <Card key={clan.id} className="hover:shadow-xl transition-all border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">{clan.name}</CardTitle>
                            <Badge variant={
                                clan.tier === 'S' ? 'destructive' :
                                    clan.tier === 'A' ? 'default' :
                                        'secondary'
                            } className={
                                clan.tier === 'S' ? 'bg-red-600 hover:bg-red-700' :
                                    clan.tier === 'A' ? 'bg-amber-600 hover:bg-amber-700' :
                                        'bg-gray-500 hover:bg-gray-600'
                            }>
                                Tier {clan.tier}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rarity</span>
                                <p className={`font-medium ${clan.rarity_chance === 'Legendary' ? 'text-amber-500' :
                                        clan.rarity_chance === 'Rare' ? 'text-blue-500' :
                                            'text-gray-500'
                                    }`}>
                                    {clan.rarity_chance}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-semibold text-sm text-gray-900 dark:text-gray-200">Clan Buffs:</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                    {clan.buffs.map((buff, index) => (
                                        <li key={index}>{buff}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-xs text-gray-500 italic">
                                    {clan.description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
