"use client"

import ParticleBackground from "@/components/particle-background"
import { motion } from "framer-motion"
import { CheckCircle2, GraduationCap, Rocket, Shield } from "lucide-react"
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
    title: "AI Engineer @ JPMorgan Chase & Co. — New Jersey, USA",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Built scalable inference services handling ~60K requests/day on Kubernetes with GPU-backed infrastructure, serving real-time predictions across multiple financial business units.</li>
      <li>Reduced model latency from ~900ms to ~580ms (35%) through request batching strategies and TensorRT optimization on production serving infrastructure.</li>
      <li>Developed RAG pipelines combining BM25 + FAISS with Reciprocal Rank Fusion and Cohere reranking for anomaly detection and enterprise data insights, improving answer relevance from 82% to 94%.</li>
      <li>Deployed and maintained production ML services through CI/CD pipelines with automated quality evaluation using Ragas, collaborating with cross-functional teams to ensure uptime.</li>
    </ul>`,
    icon: <Rocket className="h-6 w-6" />,
    skills: ["Kubernetes", "PyTorch", "LangChain", "OpenAI API", "RAG", "TensorRT", "FastAPI", "MLflow", "Airflow", "Prometheus", "Grafana", "GPU", "FAISS", "Cohere", "CI/CD", "Ragas"],
  },
  {
    date: "July 2024 – September 2024",
    title: "Software Engineering Fellow @ Headstarter AI — Remote, USA",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Built 5+ AI apps and APIs using FastAPI, OpenAI, Pinecone and Stripe API.</li>
      <li>Successfully led 4+ engineering fellows to deliver projects from design to deployment, enhancing team productivity.</li>
    </ul>`,
    icon: <Rocket className="h-6 w-6" />,
    skills: ["FastAPI", "OpenAI", "Pinecone", "Stripe API"],
  },
  {
    date: "October 2020 – August 2023",
    title: "AI Engineer @ Accenture — Hyderabad, India",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Developed NLP classification and recommendation systems for enterprise applications, improving user engagement by 18% through personalized content ranking models.</li>
      <li>Designed end-to-end ML pipelines for model training, validation, and deployment, reducing model release cycles from weeks to days across 6+ production solutions.</li>
      <li>Built document search and Q&A systems using transformer-based architectures, enabling semantic retrieval across 500K+ enterprise documents.</li>
      <li>Mentored 4 junior engineers on ML development practices and contributed to delivery of production-grade AI solutions across client engagements.</li>
    </ul>`,
    icon: <Shield className="h-6 w-6" />,
    skills: ["NLP", "LangChain", "LlamaIndex", "Pinecone", "FAISS", "Azure OpenAI", "Hugging Face", "Databricks", "MLflow", "AWS Glue", "Kinesis", "Docker", "Transformers", "CI/CD", "Machine Learning", "Mentorship"],
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
