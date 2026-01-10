'use client'

import { useState, useMemo } from 'react'
import { Search, Sword, Shield, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import contractsData from '@/data/contracts.json'

const getRarityColor = (rarity: string): string => {
    switch (rarity) {
        case 'Mythical':
            return 'text-red-500'
        case 'Legendary':
            return 'text-amber-500'
        case 'Epic':
            return 'text-purple-500'
        case 'Rare':
            return 'text-blue-500'
        default:
            return 'text-gray-500'
    }
}

export default function ContractsClient() {
    const [searchQuery, setSearchQuery] = useState('')
    const [tierFilter, setTierFilter] = useState<string | null>(null)

    // Filter contracts
    const filteredContracts = useMemo(() => {
        let filtered = contractsData.filter((contract) =>
            contract.name.toLowerCase().includes(searchQuery.toLowerCase())
        )

        if (tierFilter) {
            filtered = filtered.filter((contract) => contract.tier === tierFilter)
        }

        return filtered
    }, [searchQuery, tierFilter])

    // Group by tier for display
    const sTierContracts = filteredContracts.filter(c => c.tier === 'S')
    const aTierContracts = filteredContracts.filter(c => c.tier === 'A')
    const bTierContracts = filteredContracts.filter(c => c.tier === 'B')

    return (
        <>
            {/* Search and Filter Controls */}
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="relative flex-1 w-full sm:max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search contracts by name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800"
                            />
                        </div>
                        <div className="flex gap-2">
                            {['S', 'A', 'B'].map((tier) => (
                                <button
                                    key={tier}
                                    onClick={() => setTierFilter(tierFilter === tier ? null : tier)}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${tierFilter === tier
                                        ? 'bg-red-600 text-white'
                                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
                                        }`}
                                >
                                    {tier}-Tier
                                </button>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* S-Tier Contracts */}
            {sTierContracts.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                        S-Tier Contracts (Best in Game)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sTierContracts.map((contract) => (
                            <Card key={contract.name} className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <CardTitle className={`text-xl ${contract.color}`}>{contract.name}</CardTitle>
                                        <div className="flex gap-2">
                                            <Badge variant="destructive">{contract.tier}-Tier</Badge>
                                            <Badge variant="outline" className={getRarityColor(contract.rarity)}>{contract.rarity}</Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{contract.description}</p>
                                    <div className="mb-3">
                                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">ABILITIES</span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {contract.abilities.map((ability, i) => (
                                                <span key={i} className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded text-xs">
                                                    {ability}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Sword className="h-4 w-4 text-red-500" />
                                            <span>DMG: {contract.stats.Damage}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Zap className="h-4 w-4 text-yellow-500" />
                                            <span>SPD: {contract.stats.Speed}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Shield className="h-4 w-4 text-blue-500" />
                                            <span>CMB: {contract.stats.Combo}</span>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                        <strong>How to get:</strong> {contract.obtainable}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* A-Tier Contracts */}
            {aTierContracts.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-amber-600 dark:text-amber-400 flex items-center gap-2">
                        A-Tier Contracts (Strong Choices)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {aTierContracts.map((contract) => (
                            <Card key={contract.name} className="border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <CardTitle className={`text-lg ${contract.color}`}>{contract.name}</CardTitle>
                                        <Badge variant="default">{contract.tier}-Tier</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{contract.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        {contract.abilities.slice(0, 2).map((ability, i) => (
                                            <span key={i} className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded text-xs">
                                                {ability}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        <strong>Get:</strong> {contract.obtainable}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {/* B-Tier Contracts */}
            {bTierContracts.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        B-Tier Contracts (Solid Options)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {bTierContracts.map((contract) => (
                            <Card key={contract.name} className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                                <CardHeader className="pb-2">
                                    <CardTitle className={`text-lg ${contract.color}`}>{contract.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{contract.description}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        <strong>Get:</strong> {contract.obtainable}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
