import { Metadata } from "next"

const date = new Date()
const currentMonth = date.toLocaleString('default', { month: 'long' })
const currentYear = date.getFullYear()

export const metadata: Metadata = {
  title: `Devil Hunter Fiend Reroll Simulator (${currentMonth} ${currentYear}) - Test Your Luck`,
  description: `Simulate rolling for Fiends in Devil Hunter Roblox. Test your chances of getting the 0.1% Chainsaw Fiend before spending Robux. Updated ${currentMonth} ${currentYear}.`,
  keywords: [
    'Devil Hunter Reroll Simulator',
    'Devil Hunter Fiend Reroll',
    'Roblox Devil Hunter Reroll',
    'Devil Hunter Fiend Simulator',
    'Devil Hunter Chainsaw Fiend',
    'Devil Hunter Reroll Calculator',
  ],
}

export default function RerollSimulatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
