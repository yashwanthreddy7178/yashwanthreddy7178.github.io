"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { DashboardDemo } from "@/components/dashboard-demo"
import ParticleBackground from "@/components/particle-background"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section id="projects" className="relative w-full bg-muted/30 py-20">
      <ParticleBackground />
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <Badge variant="outline" className="mb-2 border-primary/20 px-4 py-1 text-sm font-medium text-primary">
              Projects
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Featured Work</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A showcase of my projects spanning data visualization, full-stack applications, and data analysis
              solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="dashboard">Dashboards</TabsTrigger>
                  <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
                  <TabsTrigger value="data">Data Science</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
