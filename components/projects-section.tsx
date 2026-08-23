"use client"

import { DashboardDemo } from "@/components/dashboard-demo"
import ParticleBackground from "@/components/particle-background"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
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
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Systems I Built</h2>
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
                  title="Nimbus Support Agent"
                  description="A LangGraph-orchestrated multi-agent support system, built phase by phase — from a no-persistence RAG bot to real Stripe refunds, real Shopify order lookups, real Zendesk ticketing, and a live ops dashboard. Guardrails like refund limits and read-only inventory access are enforced in code, not prompts, and every claimed outcome is independently verified against the real downstream API."
                  tags={["LangGraph", "FastAPI", "Chroma", "Supabase", "Next.js", "Stripe", "Shopify", "Zendesk"]}
                  image="/architecture-multi-agent.svg"
                  demoUrl="/multi-agent-conversational-system-case-study.html"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Financial RAG Engine"
                  description="A production-shaped RAG service for 10-K filings, built solo in 5 days and deployed to AWS ECS from day one. Hybrid dense (Pinecone) + sparse (BM25) retrieval fused with RRF, FlashRank reranking, and a Self-RAG grade-and-retry loop before answering with inline citations. Ragas-evaluated: 1.000 faithfulness, 1.000 context recall."
                  tags={["FastAPI", "Pinecone", "BM25", "FlashRank", "Self-RAG", "Redis", "Langfuse", "Ragas", "AWS ECS"]}
                  image="/architecture-rag.svg"
                  demoUrl="/rag-system-case-study.html"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="LLM Monitoring & Observability Dashboard"
                  description="Full observability layer over a production RAG system using Langfuse for tracing. Every query broken into retrieval, reranking, and generation time. Grafana dashboards track p50/p95 latency, token costs, and quality scores. Regression gating in CI blocks deploys when latency spikes or eval scores drop."
                  tags={["Langfuse", "Prometheus", "Grafana", "Python", "FastAPI", "GitHub Actions"]}
                  image="/architecture-observability.svg"
                  demoUrl="/llm-observability-case-study.html"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Real-Time AI Interview Assistant"
                  description="Next.js-based Real-Time AI Interview Assistant using GPT-4 with speech recognition and analytics dashboard for interview performance tracking."
                  tags={["Next.js", "OpenAI GPT-4", "Speech Recognition", "Analytics"]}
                  image="/aiassistant.png?height=400&width=600"
                  demoUrl="https://realtime-aiinterview-assistant.vercel.app/"
                  caseStudyUrl="/ai-interview-assistant-case-study.html"
                  category="ai"
                />
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Nimbus Support Agent"
                  description="A LangGraph-orchestrated multi-agent support system, built phase by phase — from a no-persistence RAG bot to real Stripe refunds, real Shopify order lookups, real Zendesk ticketing, and a live ops dashboard. Guardrails like refund limits and read-only inventory access are enforced in code, not prompts, and every claimed outcome is independently verified against the real downstream API."
                  tags={["LangGraph", "FastAPI", "Chroma", "Supabase", "Next.js", "Stripe", "Shopify", "Zendesk"]}
                  image="/architecture-multi-agent.svg"
                  demoUrl="/multi-agent-conversational-system-case-study.html"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Financial RAG Engine"
                  description="A production-shaped RAG service for 10-K filings, built solo in 5 days and deployed to AWS ECS from day one. Hybrid dense (Pinecone) + sparse (BM25) retrieval fused with RRF, FlashRank reranking, and a Self-RAG grade-and-retry loop before answering with inline citations. Ragas-evaluated: 1.000 faithfulness, 1.000 context recall."
                  tags={["FastAPI", "Pinecone", "BM25", "FlashRank", "Self-RAG", "Redis", "Langfuse", "Ragas", "AWS ECS"]}
                  image="/architecture-rag.svg"
                  demoUrl="/rag-system-case-study.html"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="LLM Monitoring & Observability Dashboard"
                  description="Full observability layer over a production RAG system using Langfuse for tracing. Grafana dashboards track p50/p95 latency, token costs, and quality scores. Regression gating in CI automatically blocks deploys when latency spikes or eval scores drop."
                  tags={["Langfuse", "Prometheus", "Grafana", "Python", "FastAPI", "GitHub Actions"]}
                  image="/architecture-observability.svg"
                  demoUrl="/llm-observability-case-study.html"
                  githubUrl="#"
                  category="ai"
                />
                <ProjectCard
                  title="Real-Time AI Interview Assistant"
                  description="Next.js-based Real-Time AI Interview Assistant using GPT-4 with speech recognition and analytics dashboard for interview performance tracking."
                  tags={["Next.js", "OpenAI GPT-4", "Speech Recognition", "Analytics"]}
                  image="/aiassistant.png?height=400&width=600"
                  demoUrl="https://realtime-aiinterview-assistant.vercel.app/"
                  caseStudyUrl="/ai-interview-assistant-case-study.html"
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
                  image="/architecture-observability.svg"
                  demoUrl="/llm-observability-case-study.html"
                  githubUrl="#"
                  category="dashboard"
                />
              </div>
            </TabsContent>

            <TabsContent value="uiux" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Zara Web Redesign"
                  description="A UX + frontend case study rebuilding Zara's storefront as a React SPA. Fixed navigation, readability, and product-discovery problems documented across published UX reviews. 7 routes, 13 components, purple accent system."
                  tags={["React", "React Router", "Tailwind CSS", "UX Research", "Case Study"]}
                  image="/zara-redesign.png"
                  demoUrl="/zara-redesign-case-study.html"
                  githubUrl="https://github.com/yashwanthreddy7178/zara_web_redesign"
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
