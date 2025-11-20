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

When a user submits a quote form:

1. User fills out form in the browser
2. Client-side validation runs before submission
3. Form data is sent via POST request to `/api/quote`
4. API route validates the data server-side
5. API route sends email notification using Nodemailer
6. Optional SMS notification sent via Twilio API
7. Success response sent back to client
8. User sees confirmation message

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
  └── api/
      └── quote/
          └── route.js    # API endpoint

components/
  ├── QuoteForm.jsx      # Form component
  ├── Navigation.jsx     # Nav component
  └── Footer.jsx         # Footer component

lib/
  ├── utils.js           # Utility functions
  └── constants.js       # App constants
```

## Deployment Architecture

The site is deployed on Vercel, which provides:
- Automatic builds on git push
- Edge network for global content delivery
- Serverless function execution for API routes
- Automatic SSL certificates
- Environment variable management

