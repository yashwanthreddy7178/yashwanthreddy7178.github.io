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
              A showcase of my projects spanning production RAG systems, LLM observability, AI applications, and data analytics.
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
                  title="Production RAG System – Ask My Docs"
                  description="Domain-specific document Q&A system for financial documents using hybrid BM25 + vector search with Cohere reranking. Pushed answer relevance from ~82% to 94%. Citation enforcement cut hallucinations by 40%. Ragas evaluation pipeline blocks deploys on quality regressions. Handles 500+ page docs in under 2s."
                  tags={["Python", "LangChain", "FAISS", "Cohere Rerank", "FastAPI", "Ragas", "GitHub Actions"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="LLM Monitoring & Observability Dashboard"
                  description="Full observability layer over a production RAG system using Langfuse for tracing. Every query broken into retrieval, reranking, and generation time. Grafana dashboards track p50/p95 latency, token costs, and quality scores. Regression gating in CI blocks deploys when latency spikes or eval scores drop."
                  tags={["Langfuse", "Prometheus", "Grafana", "Python", "FastAPI", "GitHub Actions"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Real-Time AI Interview Assistant"
                  description="Next.js-based Real-Time AI Interview Assistant using GPT-4 with speech recognition and analytics dashboard for interview performance tracking."
                  tags={["Next.js", "OpenAI GPT-4", "Speech Recognition", "Analytics"]}
                  image="/aiassistant.png?height=400&width=600"
                  demoUrl="https://realtime-aiinterview-assistant.vercel.app/"
                  category="ai"
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
              <div className="flex justify-center">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Production RAG System – Ask My Docs"
                  description="Domain-specific document Q&A system for financial documents using hybrid BM25 + vector search with Cohere reranking. Pushed answer relevance from ~82% to 94%. Citation enforcement cut hallucinations by 40%. Ragas evaluation pipeline blocks deploys on quality regressions."
                  tags={["Python", "LangChain", "FAISS", "Cohere Rerank", "FastAPI", "Ragas", "GitHub Actions"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="LLM Monitoring & Observability Dashboard"
                  description="Full observability layer over a production RAG system using Langfuse for tracing. Grafana dashboards track p50/p95 latency, token costs, and quality scores. Regression gating in CI automatically blocks deploys when latency spikes or eval scores drop."
                  tags={["Langfuse", "Prometheus", "Grafana", "Python", "FastAPI", "GitHub Actions"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="#"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Real-Time AI Interview Assistant"
                  description="Next.js-based Real-Time AI Interview Assistant using GPT-4 with speech recognition and analytics dashboard for interview performance tracking."
                  tags={["Next.js", "OpenAI GPT-4", "Speech Recognition", "Analytics"]}
                  image="/aiassistant.png?height=400&width=600"
                  demoUrl="https://realtime-aiinterview-assistant.vercel.app/"
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
                  title="LLM Monitoring & Observability Dashboard"
                  description="Grafana dashboards with Langfuse tracing, tracking p50/p95 latency, token costs, and quality scores across a production RAG system."
                  tags={["Langfuse", "Prometheus", "Grafana", "FastAPI"]}
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
