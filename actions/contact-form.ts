"use server"

import { EmailTemplate } from '@/components/email/ContactTemplate'
import { rateLimit } from '@/lib/rate-limit'
import { sanitizeInput } from '@/lib/sanitize'
import { headers } from 'next/headers'
import { Resend } from 'resend'
import { z } from "zod"

// Types
type FormData = {
  name: string
  email: string
  message: string
}

type FormResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

// Form validation schema with stricter rules
const formSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." })
    .regex(/^[a-zA-Z\s-']+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes." }),
  email: z.string()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." })
    .toLowerCase(),
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(5000, { message: "Message must be less than 5000 characters." })
})

// Initialize Resend with error handling
const resend = new Resend(process.env.RESEND_API_KEY)
if (!process.env.RESEND_API_KEY || !process.env.EMAIL_USER) {
  throw new Error('Missing required environment variables for email service')
}

export async function submitContactForm(formData: globalThis.FormData): Promise<FormResponse> {
  try {
    // Get IP for rate limiting
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') ?? 'unknown'
    
    // Check rate limit (5 requests per hour per IP)
    const { success: rateLimitPass, reset } = await rateLimit(ip)
    if (!rateLimitPass) {
      return {
        success: false,
        message: `Too many requests. Please try again in ${reset} minutes.`
      }
    }

    // Extract and sanitize form data
    const rawData: FormData = {
      name: sanitizeInput(formData.get("name") as string),
      email: sanitizeInput(formData.get("email") as string).toLowerCase(),
      message: sanitizeInput(formData.get("message") as string)
    }

    // Validate form data
    const result = formSchema.safeParse(rawData)

    if (!result.success) {
      console.warn("Form validation failed:", {
        ip,
        errors: result.error.flatten().fieldErrors
      })
      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
        errors: result.error.flatten().fieldErrors,
      }
    }

    const { name, email, message } = result.data

    // Send email with improved error handling
    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: process.env.EMAIL_USER as string,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        react: EmailTemplate({ name, email, message }) as any,
        text: `
Name: ${name}
Email: ${email}
Message: ${message}
        `
      })

      if (error) {
        console.error("Email sending failed:", {
          error,
          name,
          email: email.slice(0, 3) + '***', // Log partial email for debugging
          messageLength: message.length
        })
        throw error
      }

      console.info("Contact form submission successful:", {
        id: data?.id,
        ip,
        name,
        email: email.slice(0, 3) + '***'
      })

      return {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      }
    } catch (emailError) {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error("Form submission error:", {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      path: '/contact'
    })

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
