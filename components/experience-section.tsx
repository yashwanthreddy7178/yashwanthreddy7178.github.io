"use client"

import ParticleBackground from "@/components/particle-background"
import { Timeline } from "@/components/timeline"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-12 sm:py-20">
      <ParticleBackground />
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 text-center"
          >
            <Badge variant="outline" className="mb-2 border-primary/20 px-3 sm:px-4 py-1 text-sm font-medium text-primary">
              Career
            </Badge>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
              From Electrical Engineer to full-stack data development, my path has been driven by a passion for solving
              complex problems with data and code.
            </p>
          </motion.div>

          <Timeline />
        </div>
      </div>
    </section>
  )
}
