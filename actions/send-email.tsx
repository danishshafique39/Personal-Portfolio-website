"use server"

import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export async function sendEmail(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Send Email.",
    }
  }

  const { email, subject, message } = validatedFields.data

  try {
    const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

    if (!resend) {
      throw new Error("RESEND_API_KEY is not set")
    }

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: subject,
      text: message,
    })

    return {
      message: "Email Sent Successfully!",
    }
  } catch (e: any) {
    return {
      message: `Failed to send email. ${e.message}`,
    }
  }
}
