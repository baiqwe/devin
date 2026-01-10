import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SEOHead from '@/components/SEOHead'
import Breadcrumbs from '@/components/Breadcrumbs'
import { MapPin, User, Skull } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Devil Hunter Map Locations & NPC Coordinates',
    description: 'Find every important NPC and location in Devil Hunter Roblox. Coordinates for Black Market, Headquarters, Devil Spawns, and Raid Bosses.',
}

const locations = [
    {
        area: "Headquarters (Public Safety)",
        description: "The main hub for Devil Hunters. Safe zone.",
        npcs: [
            { name: "Starter Devil Hunter", role: "Quest Giver", detail: "Near main exit. Gives tutorial quests." },
            { name: "Contract Terminator", role: "Service", detail: "Floor 0. Remove contracts for 180 Robux." },
            { name: "Future Devil", role: "Contract", detail: "Floor 0. Requires Junior Hunter + 30 Eyes." },
            { name: "Curse Devil", role: "Contract", detail: "Floor 0. Next to Future Devil." },
            { name: "Dorian Graves", role: "Quest Giver", detail: "Outside HQ, on a bench to the right. Unlocks Black Market access." }
        ]
    },
    {
        area: "City Outskirts",
        description: "Dangerous area outside the city walls. Contains several Devil spawns.",
        npcs: [
            { name: "Bat Devil", role: "Boss Spawn", detail: "Building left of highway tunnel." },
            { name: "Mold Devil", role: "Boss Spawn", detail: "Alley across from Signal Tower." },
            { name: "Stone Devil", role: "Boss Spawn", detail: "Near Monk Temple (Random)." },
            { name: "Farmer NPC", role: "Guide", detail: "North of HQ. Leads to Snake Devil cave." }
        ]
    },
    {
        area: "Commercial District",
        description: "Urban area with shops and hidden secrets.",
        npcs: [
            { name: "Black Market Merchant", role: "Shop", detail: "Under the bridge near Shopping Street entrance. (Requires Dorian Graves quest)." },
            { name: "Violence Fiend", role: "Service", detail: "Outside Skateboard Shop. Toggle Fiend visual talents (15k Yen)." },
            { name: "Keeper Renji", role: "Contract", detail: "Chinatown alleyway. Fox Devil Shrine (50k Yen)." }
        ]
    },
    {
        area: "Park & Cemetery",
        description: "Open areas for gathering and low-level farming.",
        npcs: [
            { name: "Fish/Worm Devil", role: "Boss Spawn", detail: "Park area. Use Worm Carcass to spawn Fish Devil." },
            { name: "Ghost Devil", role: "Mob/Boss", detail: "Cemetery Grounds. Drop essences for Dorian Graves." }
        ]
    }
]

export default function LocationsPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <SEOHead
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Wiki', url: '/wiki' },
                    { name: 'Locations', url: '/wiki/locations' },
                ]}
            />
            <Breadcrumbs
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Wiki', url: '/wiki' },
                    { name: 'Locations', url: '/wiki/locations' },
                ]}
            />

            <div className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">Map Locations & NPCs</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Never get lost again. Find the exact location of every Contract trainer, Boss spawn, and the secret Black Market.
                </p>
            </div>

            <div className="space-y-8">
                {locations.map((loc, index) => (
                    <section key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                        <div className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 p-6 border-b border-gray-200 dark:border-gray-600">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-6 w-6 text-red-600" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{loc.area}</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mt-2 ml-9">{loc.description}</p>
                        </div>

                        <div className="p-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                {loc.npcs.map((npc, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <div className={`mt-1 p-1.5 rounded-full ${npc.role === 'Boss Spawn' ? 'bg-red-100 text-red-600' :
                                                npc.role === 'Contract' ? 'bg-purple-100 text-purple-600' :
                                                    npc.role === 'Shop' ? 'bg-green-100 text-green-600' :
                                                        'bg-blue-100 text-blue-600'
                                            }`}>
                                            {npc.role === 'Boss Spawn' ? <Skull className="h-4 w-4" /> : <User className="h-4 w-4" />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 dark:text-gray-200">{npc.name}</h3>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{npc.role}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{npc.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
