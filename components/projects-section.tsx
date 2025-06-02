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
              A showcase of my projects spanning data visualization, full-stack applications, and data analysis
              solutions.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboards</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6 sm:space-y-8">
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Interactive Data Dashboard"
                  description="A real-time dashboard for monitoring key business metrics with interactive visualizations."
                  tags={["React", "D3.js", "Node.js", "Socket.io"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#dashboard-demo"
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
                  category="fullstack"
                />
                <ProjectCard
                  title="Predictive Sales Analysis"
                  description="Machine learning model to predict future sales based on historical data and market trends."
                  tags={["Python", "Pandas", "Scikit-learn", "Matplotlib"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="data"
                />
                <ProjectCard
                  title="Customer Segmentation Tool"
                  description="Data analysis tool that segments customers based on purchasing behavior and demographics."
                  tags={["Python", "Clustering", "Tableau", "SQL"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="data"
                />
                <ProjectCard
                  title="Inventory Management System"
                  description="Full-stack application for tracking inventory levels, orders, and supplier information."
                  tags={["React", "Node.js", "PostgreSQL", "Express"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="fullstack"
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
                  title="AI Mock Interviewer"
                  description="Next.js-based AI Interviewer using GPT-4 with speech recognition and analytics dashboard for interview performance tracking."
                  tags={["Next.js", "OpenAI GPT-4", "Speech Recognition", "Analytics"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="fullstack"
                />
                <ProjectCard
                  title="T20 World Cup Cricket Analytics"
                  description="Power BI dashboard for T20 player selection with 90% match-winning probability using data-driven analysis."
                  tags={["Power BI", "Python", "Pandas", "Data Analysis"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="data"
                />
                <ProjectCard
                  title="Wine Quality Prediction"
                  description="MLOps-based wine quality prediction system with 97% accuracy, featuring MLflow integration and AWS deployment."
                  tags={["MLOps", "MLflow", "AWS", "CI/CD"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="data"
                />
              </div>
              <div className="flex justify-center">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
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
              </div>
            </TabsContent>

            <TabsContent value="fullstack" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Analytics Platform"
                  description="Full-stack application for e-commerce businesses to track sales, customer behavior, and inventory."
                  tags={["Next.js", "MongoDB", "Express", "Chart.js"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="fullstack"
                />
                <ProjectCard
                  title="Inventory Management System"
                  description="Full-stack application for tracking inventory levels, orders, and supplier information."
                  tags={["React", "Node.js", "PostgreSQL", "Express"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="fullstack"
                />
                <ProjectCard
                  title="AI Mock Interviewer"
                  description="Next.js-based AI Interviewer using GPT-4 with speech recognition and analytics dashboard for interview performance tracking."
                  tags={["Next.js", "OpenAI GPT-4", "Speech Recognition", "Analytics"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="fullstack"
                />
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Predictive Sales Analysis"
                  description="Machine learning model to predict future sales based on historical data and market trends."
                  tags={["Python", "Pandas", "Scikit-learn", "Matplotlib"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="data"
                />
                <ProjectCard
                  title="Customer Segmentation Tool"
                  description="Data analysis tool that segments customers based on purchasing behavior and demographics."
                  tags={["Python", "Clustering", "Tableau", "SQL"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="data"
                />
                <ProjectCard
                  title="T20 World Cup Cricket Analytics"
                  description="Power BI dashboard for T20 player selection with 90% match-winning probability using data-driven analysis."
                  tags={["Power BI", "Python", "Pandas", "Data Analysis"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="data"
                />
                <ProjectCard
                  title="Wine Quality Prediction"
                  description="MLOps-based wine quality prediction system with 97% accuracy, featuring MLflow integration and AWS deployment."
                  tags={["MLOps", "MLflow", "AWS", "CI/CD"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="data"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
