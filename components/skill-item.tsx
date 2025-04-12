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
      <div className="flex items-center gap-3 rounded-lg border bg-card/50 p-3 shadow-sm transition-all hover:shadow-md">
        <div className="flex-shrink-0 h-8 w-8">
          {logo}
        </div>
        <div className="flex-grow">
          <span className="text-sm font-medium">{name}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-card/50 p-3 shadow-sm transition-all hover:shadow-md">
      <div className="flex-shrink-0 h-8 w-8">
        <div
          className="h-full w-full [&>svg]:h-full [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: iconPath || "" }}
        />
      </div>
      <div className="flex-grow">
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  )
} 