"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Timeline } from "@/components/timeline"
import ParticleBackground from "@/components/particle-background"

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-muted/30 py-20">
      <ParticleBackground />
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <Badge variant="outline" className="mb-2 border-primary/20 px-4 py-1 text-sm font-medium text-primary">
              About Me
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">My Journey</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From technical support to full-stack data development, my path has been driven by a passion for solving
              complex problems with data and code.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Yashwanth Reddy Boddireddy"
                      width={600}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3 className="mb-4 text-2xl font-bold">Yashwanth Reddy Boddireddy</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Starting in technical support, I discovered my passion for solving complex problems and working with
                  data. This led me to pursue development skills, focusing on the intersection of data science and
                  full-stack development.
                </p>
                <p>
                  Over the past 1.5 years, I've dedicated myself to mastering both frontend and backend technologies,
                  with a special focus on data visualization, analysis, and building interactive applications that make
                  data accessible and actionable.
                </p>
                <p>
                  My unique background gives me a holistic perspective on technical challenges, allowing me to bridge
                  the gap between user needs and technical implementation.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="mb-8 text-center text-2xl font-bold">Professional Timeline</h3>
            <Timeline />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
