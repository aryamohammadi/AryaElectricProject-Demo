# Architecture Overview

This document explains the high-level architecture of the website and the technical decisions that shaped it.

## System Architecture

The website is built as a single-page application using Next.js, which provides both client-side and server-side rendering capabilities. The architecture follows a layered approach:

```
┌─────────────────────────────────────┐
│         Client Browser              │
│  (React Components, User Interface) │
└──────────────┬──────────────────────┘
               │
               │ HTTP Requests
               │
┌──────────────▼───────────────────────┐
│      Next.js Application             │
│                                      │
│  ┌─────────────┐  ┌─────────────┐    │
│  │   Pages     │  │ Components  │    │
│  │  (Routes)   │  │  (Reusable) │    │
│  └──────┬──────┘  └──────┬──────┘    │
│         │                 │          │
│  ┌──────▼─────────────────▼──────┐   │
│  │      API Routes (Server)      │   │
│  └──────┬────────────────────────┘   │
└─────────┼────────────────────────────┘
          │
          │ API Calls
          │
┌─────────▼────────────────────────────┐
│    External Services                 │
│  - Email Service (SMTP)              │
│  - SMS Service (API)                 │
│  - Analytics                         │
└──────────────────────────────────────┘
```

## Request Flow

When a user submits a form:

1. User fills out form in the browser
2. Client-side validation runs before submission
3. Form data is sent via POST request to `/api/quote`
4. API route validates the data server-side with comprehensive checks
5. API route processes the request and integrates with external services
6. Email notification sent to business using Nodemailer SMTP
7. Optional SMS confirmation sent to customer via Twilio API
8. Success response with appropriate status code sent back to client
9. User sees confirmation message

### API Route Processing

Each API route follows a consistent pattern:
- Parse and validate incoming request data
- Perform server-side validation with appropriate error responses
- Integrate with external services (email, SMS, APIs)
- Handle errors gracefully with try-catch blocks
- Return JSON responses with appropriate HTTP status codes
- Log errors for debugging and monitoring

## Component Architecture

Components are organized by responsibility:

- **Layout Components**: Handle page structure (header, footer, navigation)
- **Page Components**: Represent full pages and handle page-specific logic
- **Form Components**: Manage user input and validation
- **UI Components**: Reusable interface elements (buttons, cards, modals)
- **Utility Components**: Specialized features (image modals, carousels)

## State Management

The project uses React's built-in state management:
- `useState` for component-level state
- `useContext` for sharing state across components
- No external state management library needed for this project's scope

## Data Flow

Data flows unidirectionally:
1. User interactions trigger state changes
2. State changes update the UI
3. Form submissions send data to API routes
4. API routes process and send to external services
5. Responses flow back to update UI state

## File Organization

```
app/
  ├── layout.jsx          # Root layout
  ├── page.jsx            # Homepage
  ├── about/
  │   └── page.jsx       # About page
  ├── services/
  │   └── page.jsx       # Services page
  └── api/                # API Routes (Server-side)
      ├── quote/
      │   └── route.js    # Quote submission handler
      ├── sms-webhook/
      │   └── route.js    # SMS webhook handler
      ├── automated-followup/
      │   └── route.js    # Automated follow-up system
      ├── lead-scoring/
      │   └── route.js    # Lead scoring algorithm
      ├── google-reviews/
      │   └── route.js    # Google Places API integration
      └── og/
          └── route.jsx   # Dynamic OG image generation

components/
  ├── QuoteForm.jsx      # Form component
  ├── Navigation.jsx     # Nav component
  └── Footer.jsx         # Footer component

lib/
  ├── utils.js           # Utility functions
  ├── constants.js       # Application constants
  └── seo.js             # SEO utilities

scripts/
  ├── verify.js          # Verification scripts
  ├── test-gmail.js      # Email testing
  └── test-twilio.js     # SMS testing
```

## API Architecture

The application includes multiple API endpoints:

- **Quote Processing**: Handles form submissions with validation, email notifications, and SMS confirmations
- **SMS Webhook**: Processes incoming SMS replies from Twilio, sends email notifications, and provides automated responses
- **Automated Follow-ups**: Sends scheduled messages based on time-based triggers
- **Lead Scoring**: Analyzes leads and assigns priority scores using algorithmic analysis
- **External API Integration**: Fetches data from Google Places API with response caching

### Error Handling Strategy

All API routes implement consistent error handling:
- Try-catch blocks around async operations
- Appropriate HTTP status codes (400, 500)
- Error logging for debugging
- Graceful degradation when external services fail
- User-friendly error messages in responses

## Deployment Architecture

The site is deployed on Vercel, which provides:
- Automatic builds on git push
- Edge network for global content delivery
- Serverless function execution for API routes
- Automatic SSL certificates
- Environment variable management
- Built-in analytics and monitoring

