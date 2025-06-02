"use client"

import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

interface TechStackProps {
  title: string
  description: string
  technologies: {
    name: string
    icon?: string // Optional simple-icons slug
    proficiency: number
    customSvg?: string // Optional custom SVG path
    customColor?: string // Optional custom color for the SVG
  }[]
}

export function TechStack({ title, description, technologies }: TechStackProps) {
  const [svgContents, setSvgContents] = useState<Record<string, string>>({})

  useEffect(() => {
    // Load all custom SVGs
    const loadSvgs = async () => {
      const contents: Record<string, string> = {}
      for (const tech of technologies) {
        if (tech.customSvg) {
          try {
            const response = await fetch(tech.customSvg)
            const svgContent = await response.text()
            contents[tech.customSvg] = svgContent
          } catch (error) {
            console.error(`Failed to load SVG for ${tech.name}:`, error)
          }
        }
      }
      setSvgContents(contents)
    }

    loadSvgs()
  }, [technologies])

  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center space-x-3 sm:space-x-4 rounded-lg border p-3 sm:p-4"
          >
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-primary/10">
              {tech.icon}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-base font-medium">{tech.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{tech.proficiency}%</p>
              </div>
              <Progress value={tech.proficiency} className="h-1.5 sm:h-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
