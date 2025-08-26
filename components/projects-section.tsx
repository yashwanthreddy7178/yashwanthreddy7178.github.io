"use client"

import { DashboardDemo } from "@/components/dashboard-demo"
import ParticleBackground from "@/components/particle-background"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-muted/30 py-12 sm:py-20">
      <ParticleBackground />
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 text-center"
          >
            <Badge variant="outline" className="mb-2 border-primary/20 px-3 sm:px-4 py-1 text-sm font-medium text-primary">
              Projects
            </Badge>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
              A showcase of my projects spanning AI applications, data visualization, full-stack applications, and UI/UX design.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI Projects</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboards</TabsTrigger>
              <TabsTrigger value="uiux">UI/UX Portfolio</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6 sm:space-y-8">
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Real-Time AI Interview Assistant"
                  description="Next.js-based Real-Time AI Interview Assistant using GPT-4 with speech recognition and analytics dashboard for interview performance tracking."
                  tags={["Next.js", "OpenAI GPT-4", "Speech Recognition", "Analytics"]}
                  image="/aiassistant.png?height=400&width=600"
                  demoUrl="https://realtime-aiinterview-assistant.vercel.app/"
                  category="ai"
                />
                <ProjectCard
                  title="Interactive Data Dashboard"
                  description="A real-time dashboard for monitoring key business metrics with interactive visualizations."
                  tags={["React", "D3.js", "Node.js", "Socket.io"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="dashboard"
                />
                <ProjectCard
                  title="E-commerce Analytics Platform"
                  description="Full-stack application for e-commerce businesses to track sales, customer behavior, and inventory."
                  tags={["Next.js", "MongoDB", "Express", "Chart.js"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="uiux"
                />
                <ProjectCard
                  title="Predictive Sales Analysis"
                  description="Machine learning model to predict future sales based on historical data and market trends."
                  tags={["Python", "Pandas", "Scikit-learn", "Matplotlib"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Customer Segmentation Tool"
                  description="Data analysis tool that segments customers based on purchasing behavior and demographics."
                  tags={["Python", "Clustering", "Tableau", "SQL"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Inventory Management System"
                  description="Full-stack application for tracking inventory levels, orders, and supplier information."
                  tags={["React", "Node.js", "PostgreSQL", "Express"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="uiux"
                />
                <ProjectCard
                  title="Financial Performance Dashboard"
                  description="Interactive dashboard visualizing financial KPIs and performance metrics for executive decision-making."
                  tags={["React", "D3.js", "TypeScript", "REST API"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="dashboard"
                />
                <ProjectCard
                  title="T20 World Cup Cricket Analytics"
                  description="Power BI dashboard for T20 player selection with 90% match-winning probability using data-driven analysis."
                  tags={["Power BI", "Python", "Pandas", "Data Analysis"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="dashboard"
                />
                <ProjectCard
                  title="Wine Quality Prediction"
                  description="MLOps-based wine quality prediction system with 97% accuracy, featuring MLflow integration and AWS deployment."
                  tags={["MLOps", "MLflow", "AWS", "CI/CD"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
              </div>
              <div className="flex justify-center">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Real-Time AI Interview Assistant"
                  description="Next.js-based Real-Time AI Interview Assistant using GPT-4 with speech recognition and analytics dashboard for interview performance tracking."
                  tags={["Next.js", "OpenAI GPT-4", "Speech Recognition", "Analytics"]}
                  image="/aiassistant.png?height=400&width=600"
                  demoUrl="https://realtime-aiinterview-assistant.vercel.app/"
                  category="ai"
                />
                <ProjectCard
                  title="Predictive Sales Analysis"
                  description="Machine learning model to predict future sales based on historical data and market trends."
                  tags={["Python", "Pandas", "Scikit-learn", "Matplotlib"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Customer Segmentation Tool"
                  description="Data analysis tool that segments customers based on purchasing behavior and demographics."
                  tags={["Python", "Clustering", "Tableau", "SQL"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Wine Quality Prediction"
                  description="MLOps-based wine quality prediction system with 97% accuracy, featuring MLflow integration and AWS deployment."
                  tags={["MLOps", "MLflow", "AWS", "CI/CD"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-8">
              <DashboardDemo />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Interactive Data Dashboard"
                  description="A real-time dashboard for monitoring key business metrics with interactive visualizations."
                  tags={["React", "D3.js", "Node.js", "Socket.io"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="dashboard"
                />
                <ProjectCard
                  title="Financial Performance Dashboard"
                  description="Interactive dashboard visualizing financial KPIs and performance metrics for executive decision-making."
                  tags={["React", "D3.js", "TypeScript", "REST API"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="dashboard"
                />
                <ProjectCard
                  title="T20 World Cup Cricket Analytics"
                  description="Power BI dashboard for T20 player selection with 90% match-winning probability using data-driven analysis."
                  tags={["Power BI", "Python", "Pandas", "Data Analysis"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="dashboard"
                />
              </div>
            </TabsContent>

            <TabsContent value="uiux" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Analytics Platform"
                  description="Full-stack application for e-commerce businesses to track sales, customer behavior, and inventory."
                  tags={["Next.js", "MongoDB", "Express", "Chart.js"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="uiux"
                />
                <ProjectCard
                  title="Inventory Management System"
                  description="Full-stack application for tracking inventory levels, orders, and supplier information."
                  tags={["React", "Node.js", "PostgreSQL", "Express"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="uiux"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="Modern, responsive portfolio website built with Next.js, featuring smooth animations and dark/light theme toggle."
                  tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="uiux"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
