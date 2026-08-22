"use client"

import ParticleBackground from "@/components/particle-background"
import { motion } from "framer-motion"
import { Building2, CheckCircle2, GraduationCap, Rocket, Shield } from "lucide-react"
import type React from "react"

interface TimelineItem {
  date: string
  title: string
  description: string
  icon: React.ReactNode
  skills: string[]
}

const timelineData: TimelineItem[] = [
  {
    date: "May 2025",
    title: "Master of Science in Data Science, Statistics @ New Jersey Institute of Technology (NJIT), Newark, NJ",
    description: `<ul>
    </ul>`,
    icon: <GraduationCap className="h-6 w-6" />,
    skills: ["Data Science", "Statistics", "Machine Learning", "Deep Learning", "Software Engineering"],
  },
  {
    date: "July 2025 - Present",
    title: "AI Engineer @ Endeavour Technologies — Jersey City, NJ",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Created an AI-first workflow using Claude Code to build internal tools: AI writes Python and React code, engineers review on GitHub before shipping, adopted by operations teams daily.</li>
      <li>Built a financial document search system using Python, Pinecone, BM25, Cohere, LangChain, and OpenAI to retrieve and verify answers so analysts spend time on analysis instead of fact-checking.</li>
      <li>Implemented query expansion and multi-hop reasoning to improve retrieval accuracy on complex financial queries, enabling the system to understand nuanced questions across multiple documents.</li>
      <li>Implemented end-to-end LLM application tracing using Langfuse and Python to observe all application calls and identify bottlenecks, so engineers debug issues faster without guessing.</li>
      <li>Built real-time dashboards using Prometheus, Grafana, MySQL, and Elasticsearch to track infrastructure and application health, enabling the team to catch and fix problems instantly.</li>
      <li>Implemented end-to-end ML pipelines using Python and Kubernetes automating data ingestion, feature engineering, model training, packaging, and deployment with Ragas evaluation so models ship without manual bottlenecks.</li>
      <li>Built feature pipelines with validation and versioning to ensure data quality across ML models, preventing model degradation from bad data entering production.</li>
    </ul>`,
    icon: <Rocket className="h-6 w-6" />,
    skills: ["Claude Code", "Python", "React", "Pinecone", "BM25", "Cohere", "LangChain", "OpenAI", "Langfuse", "Prometheus", "Grafana", "MySQL", "Elasticsearch", "Kubernetes", "Ragas"],
  },
  {
    date: "July 2024 – September 2024",
    title: "Software Engineer Fellow @ Headstarter AI — NYC, USA",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Shipped production AI applications using Python, FastAPI, OpenAI, Pinecone, and Stripe handling real payments and customer data from design to deployment.</li>
      <li>Implemented CI/CD pipelines using Python and GitHub Actions for automated testing, versioning, and reproducible deployments across dev, staging, and production environments.</li>
      <li>Led engineers through full development cycles, reviewing architecture and code quality to ship projects on schedule without technical debt.</li>
      <li>Deployed on AWS with GitHub Actions CI/CD and automated tests to catch problems before users encounter them, ensuring system reliability as requirements changed.</li>
    </ul>`,
    icon: <Rocket className="h-6 w-6" />,
    skills: ["Python", "FastAPI", "OpenAI", "Pinecone", "Stripe", "GitHub Actions", "AWS"],
  },
  {
    date: "January 2023 – August 2023",
    title: "Software Engineer @ Google (client via Accenture) — Hyderabad, India",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Fixed Bard's (now called Gemini) harmful responses using Python regex patterns to filter political bias, sexual content, hate speech, and misinformation so users got helpful answers.</li>
      <li>Validated content filtering by regenerating responses in production before releases, confirming harmful content was blocked.</li>
    </ul>`,
    icon: <Shield className="h-6 w-6" />,
    skills: ["Python", "Content Moderation", "Responsible AI"],
  },
  {
    date: "January 2022 – September 2023",
    title: "Software Engineer @ Accenture — Hyderabad, India",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Built NLP classification and ranking models using Python and transformer-based architectures to replace generic recommendations, deployed across apps so users found relevant content.</li>
      <li>Automated ML workflows using Python automating data prep, model training, testing, packaging, and deployment to eliminate manual bottlenecks in release cycles.</li>
      <li>Shipped full-stack features across .NET, C#, React, Angular, and Node.js for enterprise clients, owning the entire path from API design to production.</li>
      <li>Optimized REST endpoints and SQL Server databases using Python and SQL, tuning queries and adding caching so users got instant responses.</li>
      <li>Mentored junior engineers on building and shipping ML systems; two led independent AI projects for clients.</li>
    </ul>`,
    icon: <Building2 className="h-6 w-6" />,
    skills: ["Python", "Transformers", "NLP", ".NET", "C#", "React", "Angular", "Node.js", "SQL Server", "Mentorship"],
  },
]

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-0 top-0 h-full w-full">
        <ParticleBackground intensity="low" />
      </div>

      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-0.5 z-10"></div>

      {/* Timeline items */}
      {timelineData.map((item, index) => (
        <div key={index} className="mb-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col items-start md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
              {item.icon}
            </div>

            {/* Content */}
            <div
              className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              }`}
            >
              <div className="rounded-lg border bg-card/90 backdrop-blur-sm p-4 shadow-sm">
                <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                  {item.date}
                </span>
                <h4 className="mt-2 text-lg font-bold">{item.title}</h4>
                <div className="mt-2 text-sm text-muted-foreground prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle2 className="mr-1 h-3 w-3 text-green-500" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
