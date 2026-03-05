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
    date: "January 2025 – Present",
    title: "AI Engineer @ JPMorgan Chase & Co. — Remote, USA",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Own the inference platform that serves 60K+ predictions daily across enterprise analytics workloads. Set it up on Kubernetes with EC2 GPU instances, currently sitting at 99.8% uptime.</li>
      <li>Built out the RAG and anomaly detection pipelines using LangChain, OpenAI API, and PyTorch. The anomaly detection piece alone improved accuracy by about 31% over what was there before.</li>
      <li>Worked closely with DevOps to get our FastAPI microservices into a proper CI/CD flow with MLflow and Airflow. Cut deployment time roughly in half.</li>
      <li>Spent a good amount of time on GPU optimization with TensorRT, got utilization up 28%. Also set up the Prometheus/Grafana dashboards the team now uses daily.</li>
      <li>Helped compress our prototype-to-production timeline from ~2 weeks down to 5 days by working directly with the data science team and mentoring a few junior engineers through the process.</li>
    </ul>`,
    icon: <Rocket className="h-6 w-6" />,
    skills: ["Kubernetes", "PyTorch", "LangChain", "OpenAI API", "RAG", "TensorRT", "FastAPI", "MLflow", "Airflow", "Prometheus", "Grafana"],
  },
  {
    date: "July 2024 – December 2024",
    title: "AI Engineer @ VMware (Broadcom) — Remote, USA",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Owned the predictive analytics pipeline end-to-end — training, validation, deployment. PyTorch models with MLflow tracking and Airflow orchestration. Helped cut incident response time by around 40%.</li>
      <li>Put together NLP services for semantic search across internal knowledge bases using Hugging Face Transformers and LangChain, wrapped in FastAPI.</li>
      <li>Brought inference latency down 27% by moving to TensorRT and Ray Serve. Most of this was profiling work to find where the bottlenecks actually were.</li>
      <li>Partnered with the cloud team on AWS infrastructure (S3, EC2, Lambda) and Kubernetes deployments. A lot of this was making sure our data pipelines were reproducible and properly versioned.</li>
    </ul>`,
    icon: <Rocket className="h-6 w-6" />,
    skills: ["PyTorch", "MLflow", "Airflow", "Hugging Face", "LangChain", "FastAPI", "TensorRT", "Ray Serve", "AWS", "Kubernetes"],
  },
  {
    date: "October 2020 – August 2023",
    title: "Data Scientist @ Accenture — Hyderabad, India",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Built NLP chatbots and recommendation engines on Azure OpenAI and Hugging Face that increased user engagement by 22% for clients.</li>
      <li>Set up the team's MLOps platform from scratch — Databricks, Airflow, MLflow, Docker. Before this, model handoffs were mostly manual. Took about 45% off delivery timelines.</li>
      <li>Built multi-agent systems with LangChain, LlamaIndex, and Pinecone/FAISS for document Q&amp;A. One Fortune 100 client reported it cut analyst research time by 60%.</li>
      <li>Helped modernize a 5 TB/day streaming pipeline on AWS Glue and Kinesis — integrated with legacy systems without downtime and got throughput up about 30%.</li>
      <li>Managed a team of 5 (mix of engineers and data scientists). Introduced code review standards and AI governance processes. Shipped 7 models to production that year.</li>
    </ul>`,
    icon: <Shield className="h-6 w-6" />,
    skills: ["NLP", "LangChain", "LlamaIndex", "Pinecone", "FAISS", "Azure OpenAI", "Hugging Face", "Databricks", "MLflow", "AWS Glue", "Kinesis", "Docker"],
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
