import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would integrate with email service, CRM, or database
    // For now, log the contact form submission
    console.log("Contact form submission:", { name, email, phone, message })

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! We'll get back to you within 24 hours."
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
