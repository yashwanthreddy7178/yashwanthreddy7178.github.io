"use client"

import ParticleBackground from "@/components/particle-background"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-12 sm:py-20">
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
              About Me
            </Badge>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">About</h2>
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
                  AI Engineer specializing in production GenAI and ML systems, helping organizations leverage data for competitive advantage. With experience at Endeavour Technologies, Headstarter AI, and Accenture (including a client engagement with Google), I focus on developing intelligent systems that enhance user experiences.
                </p>
                <p>
                  I combine technical expertise with business acumen, following a systematic approach: understanding requirements, designing data-driven architectures, and implementing scalable solutions with measurable results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
