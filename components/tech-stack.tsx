"use client"

import { SkillItem } from "@/components/skill-item"
import { useEffect, useState } from "react"
import * as si from "simple-icons"

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
    <div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-6 text-muted-foreground">{description}</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => {
          // If custom SVG is provided, use it directly
          if (tech.customSvg && svgContents[tech.customSvg]) {
            return (
              <SkillItem
                key={index}
                name={tech.name}
                iconPath={svgContents[tech.customSvg]}
                iconColor={tech.customColor || "#000000"}
              />
            )
          }

          // Otherwise try to use simple-icons
          if (tech.icon) {
            const iconKey = `si${tech.icon.charAt(0).toUpperCase()}${tech.icon.slice(1)}` as keyof typeof si
            const icon = si[iconKey] as any
            
            if (!icon) {
              console.warn(`Icon not found for ${tech.icon}`)
              return null
            }
            
            const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#${icon.hex}" d="${icon.path}"/></svg>`
            return (
              <SkillItem
                key={index}
                name={tech.name}
                iconPath={svg}
                iconColor={`#${icon.hex}`}
              />
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
