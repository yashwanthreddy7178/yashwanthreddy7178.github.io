"use client"

import { useEffect, useState } from "react"

interface TechStackProps {
  title: string
  description: string
  technologies: {
    name: string
    icon?: string // Optional simple-icons slug
    proficiency: number
    customSvg?: string // Optional custom SVG path
    customImage?: string // Optional custom image path (PNG, JPG, etc.)
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

  const renderIcon = (tech: any) => {
    if (tech.customSvg && svgContents[tech.customSvg]) {
      // Render custom SVG as inline element with proper sizing
      return (
        <div 
          className="h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center skills-icon"
          dangerouslySetInnerHTML={{ __html: svgContents[tech.customSvg] }}
        />
      )
    }
    
    if (tech.customImage) {
      // Render custom image (PNG, JPG, etc.)
      return (
        <img 
          src={tech.customImage} 
          alt={tech.name}
          className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
        />
      )
    }
    
    // Fallback for simple-icons (if we implement them later)
    if (tech.icon) {
      return (
        <div className="h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center text-primary skills-icon">
          {tech.icon}
        </div>
      )
    }
    
    // Default fallback
    return (
      <div className="h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 sm:h-5 sm:w-5"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      </div>
    )
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center space-x-2 sm:space-x-3 rounded-lg border p-2 sm:p-3"
          >
            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-primary/10 skills-icon">
              {renderIcon(tech)}
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
