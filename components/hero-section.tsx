"use client"
import ParticleBackground from "@/components/particle-background"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useScrollToSection } from "@/hooks/use-scroll-to-section"
import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Download, LineChart } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = useScrollToSection()

  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-16">
      <ParticleBackground intensity="high" />
      <div className="container relative z-10 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-3 sm:mb-4 border-primary/20 px-3 sm:px-4 py-1 text-sm font-medium text-primary">
              Full-Stack Data Developer
            </Badge>
          </motion.div>

          <motion.h1
            className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Yashwanth Reddy Boddireddy
          </motion.h1>

          <motion.h2
            className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Where <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">Data</span>{" "}
            Meets{" "}
            <span className="bg-gradient-to-r from-green-500 to-amber-500 bg-clip-text text-transparent">
              Development
            </span>
          </motion.h2>

          <motion.p
            className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming complex data into intuitive solutions through full-stack development and data science
          </motion.p>

          <motion.div
            className="mb-8 sm:mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="gap-2" onClick={() => scrollToSection("projects")}>
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("about")}>
              About Me
            </Button>
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <a href="/Yashwanth-Reddy-DS-Resume.pdf" download>
                Download CV <Download className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="mb-1 flex items-center justify-center">
                <Database className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">4+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="mb-1 flex items-center justify-center">
                <Code className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">15+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="mb-1 flex items-center justify-center">
                <LineChart className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">10+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Technologies Mastered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
