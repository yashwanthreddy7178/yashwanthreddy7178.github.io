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
    description: `<ul">
    </ul>`,
    icon: <GraduationCap className="h-6 w-6" />,
    skills: ["Data Science", "Statistics", "Machine Learning", "Deep Learning", "Software Engineering"],
  },
  {
    date: "07/2024 – Present",
    title: "Web Resource Data Scientist @ VMware",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Partnered with product and engineering teams to identify and frame 10+ high-impact business problems across SaaS product telemetry and cloud infrastructure, leading to a 15% improvement in customer retention via targeted insights</li>
      <li>Designed and automated data pipelines using PySpark and SQL to ingest and process ~3 TB of telemetry and log data daily from VMware's vSphere and NSX platforms, reducing data availability latency from 12 hours to under 2 hours</li>
      <li>Built and deployed machine learning models (e.g., random forest, logistic regression, anomaly detection) to predict VM resource exhaustion and detect anomalous user behavior, increasing proactive alert accuracy by 28%</li>
      <li>Engineered 100+ features from product usage logs, cloud performance metrics, and customer support data, and conducted hyperparameter tuning using MLflow and Optuna to improve F1-score by 22% across models</li>
      <li>Delivered containerized ML inference services (Flask + Docker) deployed via Jenkins and Kubernetes, reducing model deployment cycles from 5 days to under 1 day and enabling real-time scoring for 50K+ daily API calls</li>
      <li>Monitored deployed models for concept drift and performance decay using Grafana and Prometheus dashboards; retrained models monthly using scheduled Airflow workflows, maintaining <5% prediction error across quarters</li>
      <li>Created interactive dashboards and reports in Tableau and Power BI to visualize model predictions and business KPIs, which were used weekly by senior leadership to guide roadmap and operational decisions</li>
    </ul>`,
    icon: <Rocket className="h-6 w-6" />,
    skills: ["PySpark", "SQL", "Machine Learning", "Docker", "Kubernetes", "MLflow", "Airflow", "Tableau", "Power BI"],
  },
  {
    date: "07/2024 – 09/2024",
    title: "Software Engineering Fellow @ Headstarter AI",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone and Stripe API</li>
      <li>Successfully led 4+ engineering fellows to deliver projects from design to deployment</li>
      <li>Enhanced team productivity through effective leadership and collaboration</li>
    </ul>`,
    icon: <Rocket className="h-6 w-6" />,
    skills: ["NextJS", "OpenAI", "Pinecone", "Stripe API", "Team Leadership"],
  },
  {
    date: "10/2020 – 08/2023",
    title: "Sr. Data Scientist @ Accenture",
    description: `<ul class="list-disc pl-4 space-y-1">
      <li>Led a cross-functional initiative to design and launch a recommendation engine for personalized content across HBO Max, resulting in a 19% increase in average user session duration and a 12% boost in monthly active users (MAU) within the first quarter of deployment</li>
      <li>Architected and deployed a real-time churn prediction system using ensemble models (LightGBM, XGBoost) on a Spark-based pipeline, enabling targeted retention campaigns that reduced churn by 8.5% YoY in key demographic segments</li>
      <li>Directed the end-to-end experimentation pipeline, including A/B testing frameworks and causal inference techniques (e.g., uplift modeling, propensity scoring), to evaluate content previews and marketing placements across digital platforms — increasing click-through rates by 2%</li>
      <li>Managed large-scale data acquisition and enrichment pipelines using Airflow and AWS Glue to process over 5 TB of daily user interaction logs, integrating data from third-party ad platforms, streaming analytics, and CRM tools for unified audience profiling</li>
      <li>Developed NLP-based models (topic modeling, sentiment analysis) on viewer feedback and closed-caption text to inform editorial decisions and improve trailer targeting, contributing to a 30% lift in trailer-to-watch conversion for new releases</li>
      <li>Collaborated with product, engineering, and data governance teams to define data standards and deploy modular, reusable ML components using Databricks and MLflow, cutting model delivery timelines by 30% across business units</li>
      <li>Mentored a team of 3 junior data scientists and analysts, conducting regular peer code reviews, technical deep dives, and knowledge-sharing sessions to elevate team productivity and ensure reproducibility and scalability in deployed solutions</li>
    </ul>`,
    icon: <Shield className="h-6 w-6" />,
    skills: ["Machine Learning", "Spark", "AWS", "NLP", "Databricks", "MLflow", "Team Leadership", "A/B Testing"],
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
