import { Metadata } from 'next'
import SEOHead from '@/components/SEOHead'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sword, Skull, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Devil Hunter Tier List (2026) - Best Contracts & Clans Ranked',
    description: 'Find out the best Contracts and Clans in the current meta. PVE and PVP Tier List for Devil Hunter Roblox. Updated Rankings.',
}

export default function TierListPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <SEOHead
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Wiki', url: '/wiki' },
                    { name: 'Tier List', url: '/wiki/tier-list' },
                ]}
            />
            <Breadcrumbs
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Wiki', url: '/wiki' },
                    { name: 'Tier List', url: '/wiki/tier-list' },
                ]}
            />

            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
                    Devil Hunter Tier List (Meta 2026)
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    The most up-to-date rankings for <strong>Contracts, Fiends, and Clans</strong>.
                    Use this tier list to decide what to reroll for with your free codes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Contracts Tier Card */}
                <Card className="hover:shadow-xl transition-all border-l-4 border-red-600 overflow-hidden group">
                    <CardHeader className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/10 dark:to-gray-800">
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                <Sword className="h-6 w-6 text-red-600" /> Contracts
                            </CardTitle>
                            <Badge variant="destructive" className="animate-pulse">S+ Updated</Badge>
                        </div>
                        <CardDescription>Best abilities for PVP & PVE</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b pb-2">
                                <span className="font-bold text-red-600">S Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Ghost, Snake, Mantis</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span className="font-bold text-amber-600">A Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Fox, Future</span>
                            </li>
                            <li className="flex justify-between items-center pb-2">
                                <span className="font-bold text-blue-600">B Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Blood, Claw</span>
                            </li>
                        </ul>
                        <a href="/wiki/contracts" className="mt-6 flex items-center justify-center gap-2 w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors">
                            View Full Rankings <ArrowRight className="h-4 w-4" />
                        </a>
                    </CardContent>
                </Card>

                {/* Fiends Tier Card */}
                <Card className="hover:shadow-xl transition-all border-l-4 border-orange-600 overflow-hidden group">
                    <CardHeader className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/10 dark:to-gray-800">
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                <Skull className="h-6 w-6 text-orange-600" /> Fiends
                            </CardTitle>
                            <Badge variant="secondary">Hybrid</Badge>
                        </div>
                        <CardDescription>Strongest Transformations</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b pb-2">
                                <span className="font-bold text-red-600">S+ Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Chainsaw (0.1%)</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span className="font-bold text-red-500">S Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Bomb, Gun</span>
                            </li>
                            <li className="flex justify-between items-center pb-2">
                                <span className="font-bold text-amber-600">A Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Katana, Power</span>
                            </li>
                        </ul>
                        <a href="/wiki/fiends" className="mt-6 flex items-center justify-center gap-2 w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold transition-colors">
                            View Fiend Stats <ArrowRight className="h-4 w-4" />
                        </a>
                    </CardContent>
                </Card>

                {/* Clans Tier Card */}
                <Card className="hover:shadow-xl transition-all border-l-4 border-blue-600 overflow-hidden group">
                    <CardHeader className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-gray-800">
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                <Users className="h-6 w-6 text-blue-600" /> Clans
                            </CardTitle>
                            <Badge variant="outline">Buffs</Badge>
                        </div>
                        <CardDescription>Best Bloodline Bonuses</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b pb-2">
                                <span className="font-bold text-red-600">S Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Hayakawa, Kishimoto</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span className="font-bold text-amber-600">A Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Fujimoto, Himeno</span>
                            </li>
                            <li className="flex justify-between items-center pb-2">
                                <span className="font-bold text-blue-600">B Tier</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300">Sawatari, Yoshida</span>
                            </li>
                        </ul>
                        <a href="/wiki/clans" className="mt-6 flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors">
                            View All Buffs <ArrowRight className="h-4 w-4" />
                        </a>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Need More Rerolls?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Don&apos;t settle for C-Tier! Grab the latest codes to get free Clan and Fiend rerolls instantly.
                </p>
                <a href="/codes" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30">
                    Get Reroll Codes Now <ArrowRight className="h-5 w-5" />
                </a>
            </div>

        </div>
    )
}
