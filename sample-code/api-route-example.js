// Sample API Route Handler
// This demonstrates the pattern used for handling form submissions
// Not the actual production code

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, project } = body;

    // Basic validation
    if (!name || !project) {
      return NextResponse.json(
        { error: 'Name and project description are required' },
        { status: 400 }
      );
    }

    // At least one contact method required
    if (!phone && !email) {
      return NextResponse.json(
        { error: 'Please provide either a phone number or email address' },
        { status: 400 }
      );
    }

    // In production, this would send an email using Nodemailer
    // For this example, we'll just simulate success
    const emailSent = await simulateEmailSend({
      to: 'business@example.com',
      subject: `New Quote Request from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}`
    });

    if (emailSent) {
      return NextResponse.json(
        { message: 'Quote request submitted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Simulated email sending function
// In production, this would use Nodemailer with real SMTP credentials
async function simulateEmailSend({ to, subject, body }) {
  // This is just a placeholder
  // Real implementation would use: await transporter.sendMail({ to, subject, text: body })
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 100);
  });
}

