import React from "react"

interface SkillItemProps {
  name: string
  iconPath?: string
  iconColor?: string
  logo?: React.ReactNode
}

export function SkillItem({ name, iconPath, iconColor, logo }: SkillItemProps) {
  if (logo) {
    return (
      <div className="flex items-center gap-4 rounded-lg border bg-card/50 p-4 shadow-sm transition-all hover:shadow-md">
        <div className="flex-shrink-0 h-12 w-12">
          {logo}
        </div>
        <span className="text-base font-medium">{name}</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4 rounded-lg border bg-card/50 p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex-shrink-0 h-12 w-12">
        <div
          className="h-full w-full [&>svg]:h-full [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: iconPath || "" }}
        />
      </div>
      <span className="text-base font-medium">{name}</span>
    </div>
  )
} 