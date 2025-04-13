"use client"

import ParticleBackground from "@/components/particle-background"
import { Timeline } from "@/components/timeline"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

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
              From Electrical Engineer to full-stack data development, my path has been driven by a passion for solving
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
                      src="/images/profile.jpg"
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
                  At the intersection of AI innovation and data science, I transform complex problems into impactful solutions that drive measurable business outcomes.
                </p>
                <p>
                  Software Engineer specializing in AI applications and machine learning, helping organizations leverage data for competitive advantage. With experience at Accenture and Headstarter AI, I focus on developing intelligent systems that enhance user experiences.
                </p>
                <p>
                  I combine technical expertise with business acumen, following a systematic approach: understanding requirements, designing data-driven architectures, and implementing scalable solutions with measurable results.
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
