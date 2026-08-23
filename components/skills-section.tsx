"use client"

import ParticleBackground from "@/components/particle-background"
import { TechStack } from "@/components/tech-stack"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full bg-muted/30 py-12 sm:py-20">
      <ParticleBackground />
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 text-center"
          >
            <Badge variant="outline" className="mb-2 border-primary/20 px-3 sm:px-4 py-1 text-sm font-medium text-primary">
              Skills
            </Badge>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Stack</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
              The tools I build production AI systems with, ordered by where my depth actually sits.
            </p>
          </motion.div>

          <div className="space-y-10 sm:space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <TechStack
                title="AI & LLM Systems"
                description="Model frameworks, retrieval, and LLM tooling."
                technologies={[
                  { name: "PyTorch", customSvg: "/icons/pytorch-svgrepo-com.svg", proficiency: 0 },
                  { name: "LangChain", customSvg: "/icons/langchain.svg", proficiency: 0 },
                  { name: "OpenAI", customSvg: "/icons/openai-svgrepo-com.svg", proficiency: 0 },
                  { name: "Hugging Face", customSvg: "/icons/huggingface.svg", proficiency: 0 },
                  { name: "TensorFlow", customSvg: "/icons/tensorflow-svgrepo-com.svg", proficiency: 0 },
                  { name: "Scikit-learn", customSvg: "/icons/scikitlearn-svgrepo-com.svg", proficiency: 0 },
                  { name: "MLflow", customImage: "/icons/mlflow.png", proficiency: 0 },
                  { name: "Databricks", customSvg: "/icons/databricks-svgrepo-com.svg", proficiency: 0 },
                ]}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <TechStack
                title="ML Infrastructure & DevOps"
                description="Deployment, orchestration, and cloud infrastructure."
                technologies={[
                  { name: "Kubernetes", customSvg: "/icons/kubernetes-svgrepo-com.svg", proficiency: 0 },
                  { name: "Docker", customSvg: "/icons/docker-svgrepo-com.svg", proficiency: 0 },
                  { name: "AWS", customSvg: "/icons/aws-svgrepo-com.svg", proficiency: 0 },
                  { name: "Azure", customSvg: "/icons/azure-svgrepo-com.svg", proficiency: 0 },
                  { name: "Google Cloud", customSvg: "/icons/gcp-svgrepo-com.svg", proficiency: 0 },
                  { name: "Apache Airflow", customSvg: "/icons/apacheairflow-svgrepo-com.svg", proficiency: 0 },
                  { name: "Jenkins", customSvg: "/icons/jenkins-svgrepo-com.svg", proficiency: 0 },
                  { name: "Kafka", customSvg: "/icons/kafka-icon-svgrepo-com.svg", proficiency: 0 },
                  { name: "GitHub Actions", customSvg: "/icons/github-142-svgrepo-com.svg", proficiency: 0 },
                  { name: "Linux", customSvg: "/icons/linux-svgrepo-com.svg", proficiency: 0 },
                ]}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <TechStack
                title="Backend & APIs"
                description="Services and datastores behind the AI systems."
                technologies={[
                  { name: "FastAPI", customSvg: "/icons/fastapi.svg", proficiency: 0 },
                  { name: "Flask", customSvg: "/icons/flask-svgrepo-com.svg", proficiency: 0 },
                  { name: "PostgreSQL", customSvg: "/icons/postgresql-svgrepo-com.svg", proficiency: 0 },
                  { name: "MySQL", customSvg: "/icons/mysql-logo-svgrepo-com.svg", proficiency: 0 },
                  { name: "MongoDB", customSvg: "/icons/mongodb-svgrepo-com.svg", proficiency: 0 },
                ]}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <TechStack
                title="Data & Analytics"
                description="Processing, analysis, and reporting."
                technologies={[
                  { name: "Python", customSvg: "/icons/python-svgrepo-com.svg", proficiency: 0 },
                  { name: "Pandas", customSvg: "/icons/pandas-svgrepo-com.svg", proficiency: 0 },
                  { name: "NumPy", customSvg: "/icons/numpy-svgrepo-com.svg", proficiency: 0 },
                  { name: "Apache Spark", customSvg: "/icons/apache-spark-svgrepo-com.svg", proficiency: 0 },
                  { name: "Hadoop", customSvg: "/icons/hadoop-svgrepo-com.svg", proficiency: 0 },
                  { name: "Snowflake", customSvg: "/icons/snowflake-svgrepo-com.svg", proficiency: 0 },
                  { name: "dbt", customSvg: "/icons/dbt-svgrepo-com.svg", proficiency: 0 },
                  { name: "R", customSvg: "/icons/r-programming-language-icon.svg", proficiency: 0 },
                  { name: "Tableau", customSvg: "/icons/tableau-icon-svgrepo-com.svg", proficiency: 0 },
                  { name: "Power BI", customSvg: "/icons/powerbi-svgrepo-com.svg", proficiency: 0 },
                  { name: "Jupyter", customSvg: "/icons/jupyter-svgrepo-com.svg", proficiency: 0 },
                  { name: "Matplotlib", customImage: "/icons/matplotlib.png", proficiency: 0 },
                ]}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="opacity-80">
              <TechStack
                title="Frontend"
                description="Used for internal tools and project frontends."
                technologies={[
                  { name: "JavaScript", customSvg: "/icons/javascript-svgrepo-com.svg", proficiency: 0 },
                  { name: "TypeScript", customSvg: "/icons/typescript-svgrepo-com.svg", proficiency: 0 },
                  { name: "React", customSvg: "/icons/react-svgrepo-com.svg", proficiency: 0 },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
