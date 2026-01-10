"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TierItem {
  name: string
  tier: string
  description: string
  abilities: string[]
  rarity: string
  dropRate?: string
  passive?: string
  passives?: string[] // Support array of passives
  special?: string
}

interface TierListProps {
  races: TierItem[] // Generic naming
}

const tierColors: Record<string, string> = {
  "S+": "from-red-100 to-rose-200 border-red-400",
  S: "from-red-50 to-orange-100 border-red-300",
  A: "from-amber-50 to-yellow-100 border-amber-300",
  B: "from-blue-50 to-cyan-100 border-blue-300",
  C: "from-gray-50 to-slate-100 border-gray-300",
}

const tierLabels: Record<string, string> = {
  "S+": "S+ Tier - Mythical (One of a Kind)",
  S: "S Tier - Legendary",
  A: "A Tier - Excellent",
  B: "B Tier - Good",
  C: "C Tier - Common",
}

export function TierList({ races }: TierListProps) {
  // Use generic processing
  const items = races;

  const groupedByTier = items.reduce((acc, item) => {
    if (!acc[item.tier]) {
      acc[item.tier] = []
    }
    acc[item.tier].push(item)
    return acc
  }, {} as Record<string, TierItem[]>)

  const tierOrder = ["S+", "S", "A", "B", "C"]

  return (
    <div className="space-y-8">
      {tierOrder.map((tier) => {
        const tierItems = groupedByTier[tier] || []
        if (tierItems.length === 0) return null

        return (
          <div key={tier} className="space-y-4">
            <div
              className={`bg-gradient-to-r ${tierColors[tier] || tierColors.C} p-4 rounded-lg border-2`}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-900">
                {tierLabels[tier] || `${tier} Tier`}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tierItems.map((item) => (
                <Card key={item.name} className="hover:border-red-500 transition-colors bg-white dark:bg-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{item.name}</CardTitle>
                      <Badge variant="secondary">{item.rarity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.dropRate && (
                      <div className="mb-3">
                        <Badge variant="outline" className="text-xs font-semibold text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                          {item.dropRate} Drop Rate
                        </Badge>
                      </div>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>

                    {/* Abilities List */}
                    {item.abilities && item.abilities.length > 0 && (
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Abilities:
                        </h4>
                        <ul className="space-y-1.5">
                          {item.abilities.map((ability, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                            >
                              <span className="text-red-600 font-bold">•</span>
                              {ability}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Passive (Single or Array) */}
                    {(item.passive || (item.passives && item.passives.length > 0)) && (
                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          Passives:
                        </h4>
                        {item.passive && (
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-1">{item.passive}</p>
                        )}
                        {item.passives && item.passives.map((p, idx) => (
                          <p key={idx} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-1 flex gap-2">
                            <span className="text-blue-500 text-xs mt-1">🔹</span> {p}
                          </p>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
