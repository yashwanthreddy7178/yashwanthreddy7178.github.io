import { EmailTemplate } from '@/components/email/ContactTemplate'
import { rateLimit } from '@/lib/rate-limit'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from "zod"

// Form validation schema
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

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
    
    // Check rate limit
    const { success: rateLimitPass, reset } = await rateLimit(ip)
    if (!rateLimitPass) {
      return NextResponse.json({
        success: false,
        message: `Too many requests. Please try again in ${reset} minutes.`
      }, { status: 429 })
    }

    // Validate form data
    const result = formSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({
        success: false,
        message: "Validation failed. Please check your inputs.",
        errors: result.error.flatten().fieldErrors,
      }, { status: 400 })
    }

    const { name, email, message } = result.data

    // Send email
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
      throw error
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again later.",
    }, { status: 500 })
  }
} 