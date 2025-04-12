"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Code, Database, Headphones, LineChart, Rocket } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

interface TimelineItem {
  date: string
  title: string
  description: string
  icon: React.ReactNode
  skills: string[]
}

const timelineData: TimelineItem[] = [
  {
    date: "2021",
    title: "Technical Support Specialist",
    description:
      "Started my career providing technical support, troubleshooting complex issues and developing a deep understanding of user needs.",
    icon: <Headphones className="h-6 w-6" />,
    skills: ["Problem Solving", "Customer Support", "Technical Documentation"],
  },
  {
    date: "2022",
    title: "Data Analysis Journey",
    description:
      "Began learning data analysis tools and techniques, applying them to support tickets to identify patterns and improve service.",
    icon: <LineChart className="h-6 w-6" />,
    skills: ["SQL", "Excel", "Data Visualization", "Python Basics"],
  },
  {
    date: "2022-2023",
    title: "Frontend Development",
    description:
      "Expanded my skills to include frontend development, focusing on creating intuitive interfaces for data presentation.",
    icon: <Code className="h-6 w-6" />,
    skills: ["HTML/CSS", "JavaScript", "React", "Data Visualization Libraries"],
  },
  {
    date: "2023",
    title: "Backend & Database Skills",
    description:
      "Developed backend skills to create complete applications, with a focus on efficient data processing and storage.",
    icon: <Database className="h-6 w-6" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "API Development"],
  },
  {
    date: "Present",
    title: "Full-Stack Data Developer",
    description:
      "Currently working as a full-stack developer with a specialization in data-driven applications and visualizations.",
    icon: <Rocket className="h-6 w-6" />,
    skills: ["Full-Stack Development", "Data Science", "Cloud Services", "CI/CD"],
  },
]

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-0 top-0 h-full w-full">
        <ParticleBackground intensity="low" />
      </div>

      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-0.5 z-10"></div>

      {/* Timeline items */}
      {timelineData.map((item, index) => (
        <div key={index} className="mb-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col items-start md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
              {item.icon}
            </div>

            {/* Content */}
            <div
              className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8"
              }`}
            >
              <div className="rounded-lg border bg-card/90 backdrop-blur-sm p-4 shadow-sm">
                <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                  {item.date}
                </span>
                <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle2 className="mr-1 h-3 w-3 text-green-500" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
