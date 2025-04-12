import { FC } from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <div style={{ whiteSpace: 'pre-wrap' }}>{message}</div>
  </div>
) 