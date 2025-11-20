# System Diagram

A text-based diagram showing how the different parts of the system work together.

```
┌─────────────────────────────────────────────────────────────┐
│                        USER BROWSER                         │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Homepage   │  │   Services   │  │   Contact    │       │
│  │   Component  │  │   Component  │  │   Component  │       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │
│         │                 │                  │              │
│         └─────────────────┼──────────────────┘              │
│                           │                                 │
│                    ┌──────▼──────┐                          │
│                    │  Quote Form │                          │
│                    │  Component  │                          │
│                    └──────┬──────┘                          │
└───────────────────────────┼─────────────────────────────────┘
                            │
                            │ POST /api/quote
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                    NEXT.JS SERVER                             │
│                                                               │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │              API Route Handler                           │ │
│  │  - Validates input data                                  │ │
│  │  - Processes form submission                             │ │
│  │  - Handles errors                                        │ │
│  └──────┬──────────────────────────────┬────────────────────┘ │
│         │                              │                      │
│         │                              │                      │
└─────────┼──────────────────────────────┼──────────────────────┘
          │                              │
          │                              │
    ┌─────▼─────┐                  ┌─────▼─────┐
    │  Email    │                  │    SMS    │
    │  Service  │                  │  Service  │
    │ (SMTP)    │                  │  (API)    │
    └───────────┘                  └───────────┘
          │                              │
          │                              │
          └──────────────┬───────────────┘
                         │
                         │ Notifications
                         │
          ┌──────────────▼──────────────┐
          │      Business Owner         │
          │   Receives notifications    │
          └─────────────────────────────┘
```

## Component Interaction Flow

```
User Action
    │
    ├─> Form Input
    │   │
    │   ├─> Client Validation
    │   │
    │   └─> Submit Button Click
    │       │
    │       └─> API Request
    │           │
    │           ├─> Server Validation
    │           │
    │           ├─> Email Service
    │           │
    │           ├─> SMS Service (optional)
    │           │
    │           └─> Response to Client
    │               │
    │               └─> Success/Error Message
```

## Page Rendering Flow

```
Browser Request
    │
    ├─> Next.js receives request
    │
    ├─> Route matching
    │
    ├─> Component rendering
    │   │
    │   ├─> Server-side data fetching (if needed)
    │   │
    │   └─> HTML generation
    │
    └─> Response sent to browser
        │
        └─> Client-side hydration
            │
            └─> Interactive React app
```

