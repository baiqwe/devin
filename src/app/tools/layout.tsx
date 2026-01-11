import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tools",
  description: "Interactive tools for Devil Hunter Roblox - Fiend reroll simulator and more",
  keywords: [
    "Devil Hunter Tools",
    "Devil Hunter Reroll Simulator",
    "Roblox Devil Hunter",
    "Devil Hunter Wiki",
  ],
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
