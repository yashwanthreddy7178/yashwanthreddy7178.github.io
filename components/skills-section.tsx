"use client"


import ParticleBackground from "@/components/particle-background"
import { SkillItem } from "@/components/skill-item"
import { SkillsRadarChart } from "@/components/skills-radar-chart"
import { TechStack } from "@/components/tech-stack"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion } from "framer-motion"

export default function SkillsSection() {
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <section id="skills" className="relative w-full py-20">
      <ParticleBackground />
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <Badge variant="outline" className="mb-2 border-primary/20 px-4 py-1 text-sm font-medium text-primary">
              Skills & Expertise
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Technical Proficiency</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A comprehensive overview of my technical skills in data science, engineering, MLOps, and development
              technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-4 sm:p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-6 grid w-full grid-cols-2 sm:grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="data">Data Science</TabsTrigger>
                    <TabsTrigger value="devops">DevOps</TabsTrigger>
                    <TabsTrigger value="development">Development</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="pt-2">
                    <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
                      <div className="w-full lg:w-1/2">
                        <SkillsRadarChart />
                      </div>
                      <div className="w-full lg:w-1/2">
                        <h3 className="mb-6 text-xl font-bold">Core Competencies</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <SkillItem
                            name="Data Science & Analysis"
                            logo={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                              >
                                <path d="M3 3v18h18" />
                                <path d="m19 9-5 5-4-4-3 3" />
                              </svg>
                            }
                          />
                          <SkillItem
                            name="Data Engineering"
                            logo={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                              >
                                <ellipse cx="12" cy="5" rx="9" ry="3" />
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                              </svg>
                            }
                          />
                          <SkillItem
                            name="MLOps & DevOps"
                            logo={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                              >
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M3 9h18" />
                                <path d="M9 21V9" />
                                <path d="m12 6 1-3 1 3" />
                                <path d="M14 10h.01" />
                                <path d="M14 14h.01" />
                                <path d="M14 18h.01" />
                              </svg>
                            }
                          />
                          <SkillItem
                            name="AI & Machine Learning"
                            logo={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                              >
                                <path d="M12 2v8" />
                                <path d="m4.93 10.93 1.41 1.41" />
                                <path d="M2 18h2" />
                                <path d="M20 18h2" />
                                <path d="m19.07 10.93-1.41 1.41" />
                                <path d="M22 22H2" />
                                <path d="m16 6-4 4-4-4" />
                                <path d="M16 18a4 4 0 0 0-8 0" />
                              </svg>
                            }
                          />
                          <SkillItem
                            name="Frontend Development"
                            logo={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                              >
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                              </svg>
                            }
                          />
                          <SkillItem
                            name="Backend Development"
                            logo={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-10 w-10 text-primary"
                              >
                                <path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
                              </svg>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="data" className="pt-2">
                    <TechStack
                      title="Data Science & Analytics Technologies"
                      description="Tools and technologies I use for data analysis, visualization, and machine learning."
                      technologies={[
                        {
                          name: "Python",
                          icon: "python",
                          proficiency: 90
                        },
                        {
                          name: "R",
                          icon: "r",
                          proficiency: 85
                        },
                        {
                          name: "Tableau",
                          customSvg: "/icons/tableau-icon-svgrepo-com.svg",
                          proficiency: 80
                        },
                        {
                          name: "Power BI",
                          customSvg: "/icons/powerbi-svgrepo-com.svg",
                          proficiency: 75
                        },
                        {
                          name: "Jupyter",
                          icon: "jupyter",
                          proficiency: 90
                        },
                        {
                          name: "Pandas",
                          icon: "pandas",
                          proficiency: 90
                        },
                        {
                          name: "NumPy",
                          icon: "numpy",
                          proficiency: 85
                        },
                        {
                          name: "Scikit-learn",
                          icon: "scikitlearn",
                          proficiency: 85
                        },
                        {
                          name: "TensorFlow",
                          icon: "tensorflow",
                          proficiency: 80
                        },
                        {
                          name: "PyTorch",
                          icon: "pytorch",
                          proficiency: 80
                        },
                        {
                          name: "Apache Spark",
                          customSvg: "/icons/apache-spark-svgrepo-com.svg",
                          proficiency: 85
                        },
                        {
                          name: "Hadoop",
                          customSvg: "/icons/hadoop-svgrepo-com.svg",
                          proficiency: 80
                        }
                      ]}
                    />
                  </TabsContent>
                  <TabsContent value="devops" className="pt-2">
                    <TechStack
                      title="DevOps, MLOps & AIops Technologies"
                      description="Tools and technologies I use for deployment, automation, and operations."
                      technologies={[
                        {
                          name: "Docker",
                          icon: "docker",
                          proficiency: 85
                        },
                        {
                          name: "AWS",
                          customSvg: "/icons/aws-svgrepo-com.svg",
                          proficiency: 80
                        },
                        {
                          name: "Azure",
                          customSvg: "/icons/azure-svgrepo-com.svg",
                          proficiency: 75
                        },
                        {
                          name: "Google Cloud",
                          customSvg: "/icons/gcp-svgrepo-com.svg",
                          proficiency: 75
                        },
                        {
                          name: "Kubernetes",
                          icon: "kubernetes",
                          proficiency: 80
                        },
                        {
                          name: "GitHub Actions",
                          icon: "githubactions",
                          proficiency: 80
                        },
                        {
                          name: "Git",
                          icon: "git",
                          proficiency: 90
                        },
                        {
                          name: "MLflow",
                          icon: "mlflow",
                          proficiency: 85
                        },
                        {
                          name: "Apache Airflow",
                          icon: "apacheairflow",
                          proficiency: 80
                        },
                        {
                          name: "Linux",
                          customSvg: "/icons/linux-svgrepo-com.svg",
                          proficiency: 85
                        }
                      ]}
                    />
                  </TabsContent>
                  <TabsContent value="development" className="pt-2">
                    <TechStack
                      title="Development Technologies"
                      description="Frontend and backend technologies I'm familiar with for application development."
                      technologies={[
                        {
                          name: "JavaScript",
                          icon: "javascript",
                          proficiency: 85
                        },
                        {
                          name: "TypeScript",
                          icon: "typescript",
                          proficiency: 80
                        },
                        {
                          name: "React",
                          icon: "react",
                          proficiency: 60
                        },
                        {
                          name: "MySQL",
                          icon: "mysql",
                          proficiency: 75
                        },
                        {
                          name: "MongoDB",
                          customSvg: "/icons/mongodb-svgrepo-com.svg",
                          proficiency: 80
                        },
                        {
                          name: "PostgreSQL",
                          customSvg: "/icons/postgresql-svgrepo-com.svg",
                          proficiency: 80
                        }
                      ]}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
