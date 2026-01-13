import { Metadata } from 'next'
import Link from 'next/link'
import questsData from '@/data/quests.json'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
    title: 'Devil Hunter Quests Guide - Test of the Strongest Walkthrough',
    description: 'Complete guide for all Devil Hunter quests including the difficult Test of the Strongest. Rewards, locations, and tips.',
}

export default function QuestsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Quests & Walkthroughs</h1>
            <div className="grid gap-4">
                {questsData.map((quest) => (
                    <Card key={quest.id} id={quest.id}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl text-blue-600 dark:text-blue-400">{quest.name}</CardTitle>
                                <Badge variant="outline">{quest.requirements}</Badge>
                            </div>
                            <CardDescription>Giver: {quest.giver}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-gray-700 dark:text-gray-300"><strong>Rewards:</strong> {quest.rewards}</p>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                                <h4 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Walkthrough Guide:</h4>
                                <p className="whitespace-pre-line text-sm text-gray-600 dark:text-gray-300">{quest.guide}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
