"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  githubUrl: string
  category: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, githubUrl, category }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0">
          <Button asChild size="sm" variant="outline">
            <Link href={demoUrl}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href={githubUrl}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
