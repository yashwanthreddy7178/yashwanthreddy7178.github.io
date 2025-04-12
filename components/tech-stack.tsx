"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Technology {
  name: string
  proficiency: number // Keep this for sorting or future use
  logo: React.ReactNode
}

interface TechStackProps {
  title: string
  description: string
  technologies: Technology[]
}

export function TechStack({ title, description, technologies }: TechStackProps) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-lg border bg-card p-3 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted/50 mb-2">{tech.logo}</div>
            <span className="text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
