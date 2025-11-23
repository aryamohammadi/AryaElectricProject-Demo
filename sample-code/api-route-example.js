// Sample API Route Handler
// This demonstrates backend patterns for handling form submissions
// Shows server-side validation, error handling, and external service integration
// Not the actual production code

import { NextResponse } from 'next/server';
// In production: import nodemailer from 'nodemailer';
// In production: import twilio from 'twilio';

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, project } = body;

    // Server-side validation - required fields
    if (!name || !project) {
      return NextResponse.json(
        { error: 'Name and project description are required' },
        { status: 400 }
      );
    }

    // Server-side validation - at least one contact method required
    if (!phone && !email) {
      return NextResponse.json(
        { error: 'Please provide either a phone number or email address' },
        { status: 400 }
      );
    }

    // In production, this would use Nodemailer to send email
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.GMAIL_USER,
    //     pass: process.env.GMAIL_APP_PASSWORD,
    //   },
    // });
    
    // await transporter.sendMail({
    //   from: process.env.GMAIL_USER,
    //   to: 'business@example.com',
    //   subject: `New Request from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Project: ${project}</p>`
    // });

    // Simulate email sending for example
    const emailSent = await simulateEmailSend({
      to: 'business@example.com',
      subject: `New Request from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}`
    });

    // Optional: Send SMS confirmation if phone provided
    // In production, this would use Twilio:
    // if (phone) {
    //   const client = twilio(
    //     process.env.TWILIO_ACCOUNT_SID,
    //     process.env.TWILIO_AUTH_TOKEN
    //   );
    //   await client.messages.create({
    //     body: `Your request has been received. We'll contact you soon!`,
    //     from: process.env.TWILIO_PHONE_NUMBER,
    //     to: phone
    //   });
    // }

    if (emailSent) {
      return NextResponse.json(
        { 
          success: true,
          message: 'Request submitted successfully' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    // Error handling with logging
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Simulated email sending function
// In production, this would use Nodemailer with real SMTP credentials
async function simulateEmailSend({ to, subject, body }) {
  // This is just a placeholder for demonstration
  // Real implementation would use: await transporter.sendMail({ to, subject, text: body })
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 100);
  });
}

