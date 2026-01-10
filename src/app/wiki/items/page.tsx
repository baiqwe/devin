import { Metadata } from 'next'
import itemsData from '@/data/items.json'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import SEOHead from '@/components/SEOHead'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { ShoppingBag, Coins, MapPin } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Devil Hunter Items Guide - Surgery Kit, Wipe Potion & More',
    description: 'Guide to important items in Devil Hunter Roblox. Learn how to get the Surgery Kit, where to buy Wipe Potions, and item prices.',
}

export default function ItemsPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <SEOHead
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Wiki', url: '/wiki' },
                    { name: 'Items', url: '/wiki/items' },
                ]}
            />
            <Breadcrumbs
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Wiki', url: '/wiki' },
                    { name: 'Items', url: '/wiki/items' },
                ]}
            />

            <div className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">Important Items Guide</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Where to find essential tools like the <strong>Surgery Kit</strong> and <strong>Wipe Potion</strong>.
                </p>
            </div>

            <div className="grid gap-6">
                {itemsData.map((item) => (
                    <Card key={item.id} className="overflow-hidden border-l-4 border-l-amber-500 hover:shadow-lg transition-all bg-white dark:bg-gray-800">
                        <div className="md:flex">
                            <div className="p-6 md:w-3/4">
                                <div className="flex items-center gap-3 mb-2">
                                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">{item.name}</CardTitle>
                                    <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 dark:bg-amber-900/20">{item.type}</Badge>
                                </div>
                                <CardDescription className="text-base text-gray-600 dark:text-gray-300 mb-4">
                                    {item.description}
                                </CardDescription>

                                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-2">
                                    <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-200 mb-1 flex items-center gap-2">
                                        How to Use:
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {item.usage}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700/30 p-6 md:w-1/4 flex flex-col justify-center space-y-4 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700">
                                <div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                        <Coins className="h-4 w-4" /> Price
                                    </div>
                                    <p className="text-lg font-bold text-green-600 dark:text-green-400">{item.price}</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                        <MapPin className="h-4 w-4" /> Location
                                    </div>
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
