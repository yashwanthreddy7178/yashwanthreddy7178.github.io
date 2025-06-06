"use client"

import ParticleBackground from "@/components/particle-background"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { Calendar, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { useRef, useState } from "react"

export default function ContactSection() {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("https://formspree.io/f/mblookpq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        formRef.current?.reset()
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative w-full py-12 sm:py-20">
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
              Contact
            </Badge>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
              Have a project in mind or interested in working together? I'd love to hear from you. Let's create
              something amazing.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href="mailto:yashwanthreddy7178@gmail.com"
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        yashwanthreddy7178@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <p className="mb-2 sm:mb-3 text-sm font-medium">Ready to discuss your project?</p>
                    <Button size="lg" className="w-full" onClick={() => {
                      // @ts-ignore
                      Calendly.initPopupWidget({url: 'https://calendly.com/yashwanthreddy7178/30min'});
                    }}>
                      <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Schedule a Call
                    </Button>
                  </div>

                  <div className="pt-4">
                    <p className="mb-3 sm:mb-4 text-sm font-medium">Connect with me</p>
                    <div className="flex gap-3 sm:gap-4">
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/yashwanthreddy7178" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/yashwanth-reddy-boddireddy" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://twitter.com/yashwanth9100">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="Your email" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
