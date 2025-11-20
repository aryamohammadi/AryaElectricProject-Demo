# Arya Electric Website - Case Study

A case study documenting the development of a professional electrical contractor website built with Next.js and React. This project demonstrates modern web development practices including performance optimization, accessibility compliance, and mobile-first design.

## Project Overview

This website was built for a licensed electrical contractor serving Orange County, California. The site provides an online presence for the business, allowing customers to view services, browse completed projects, and request free estimates through an integrated contact form.

The website handles quote submissions through email and SMS notifications, displays customer reviews, and includes comprehensive SEO optimization for local search visibility. All functionality is built with a focus on mobile users, as they represent the majority of site traffic.

## Key Features

### Quote Request System

The site includes a streamlined quote request form that collects customer information and project details. Submissions are processed through Next.js API routes and sent to the business via email. The form includes client-side validation and provides clear feedback to users.

### Mobile-First Design

Every page and component was designed with mobile devices as the primary consideration. The layout adapts smoothly across screen sizes, with touch-friendly interactive elements and a sticky call-to-action bar on mobile devices.

### Image Gallery

A portfolio section showcases completed electrical projects with before and after images. Images are optimized for performance and displayed in a modal system that works well on both desktop and mobile devices.

### Service Pages

The site organizes services into residential and commercial categories, making it easy for customers to find relevant information. Each service category includes detailed descriptions and related project examples.

### Contact Integration

Multiple contact methods are available including phone links, email forms, and direct messaging. The site maintains consistent contact information across all pages for local SEO purposes.

## My Contributions

I was responsible for the full-stack development of this project, including:

- Frontend architecture and component structure using React and Next.js
- API route development for handling form submissions and external service integrations
- Mobile-responsive design implementation with Tailwind CSS
- Performance optimization including image optimization and code splitting
- Accessibility implementation following WCAG 2.2 AA standards
- SEO setup including structured data, meta tags, and local business optimization
- Integration with third-party services for email and SMS notifications

## Architecture Overview

The project uses Next.js 15 with the App Router pattern. The architecture separates concerns into clear layers:

```
Client Layer (Browser)
    |
    v
Next.js App Router
    |
    +-- Pages (React Components)
    |   +-- Homepage
    |   +-- Services
    |   +-- Portfolio
    |   +-- Contact
    |
    +-- API Routes (Server)
    |   +-- Quote Submission Handler
    |   +-- External Service Integrations
    |
    +-- Components (Reusable UI)
    |   +-- Forms
    |   +-- Navigation
    |   +-- Image Modals
    |
    v
External Services
    +-- Email Service (SMTP)
    +-- SMS Service (API)
    +-- Analytics
```

### Data Flow

1. User interacts with forms or navigation on the client side
2. Client-side validation occurs before submission
3. Form data is sent to Next.js API routes
4. API routes process data and integrate with external services
5. Confirmation messages are sent back to the user
6. Business receives notifications via email or SMS

### Component Structure

Components are organized by functionality:
- Layout components handle page structure
- Form components manage user input
- UI components provide reusable interface elements
- Utility components handle specific features like image modals

## Tech Stack

### Frontend

**Next.js 15.3.4** - Chose Next.js for its built-in routing, server-side rendering capabilities, and excellent performance optimizations. The App Router provides a clean way to organize pages and API routes.

**React 19** - Used React for component-based development. The latest version includes performance improvements that help with rendering efficiency.

**Tailwind CSS** - Selected Tailwind for rapid styling and consistent design. The utility-first approach makes it easy to maintain responsive layouts and ensures consistent spacing and colors.

### Backend

**Next.js API Routes** - All server-side logic runs through Next.js API routes. This keeps everything in one codebase and simplifies deployment.

**Nodemailer** - Handles email delivery for quote form submissions. Configured to work with standard SMTP services.

**Twilio** - Integrated for SMS notifications. Provides a reliable way to send text messages when new quotes are submitted.

### Development Tools

**ESLint** - Code quality and consistency checking
**Playwright** - End-to-end testing for critical user flows
**axe-core** - Automated accessibility testing

## Performance

The site is optimized for fast loading and smooth interactions. Key performance decisions include:

- Image optimization through Next.js automatic WebP conversion and responsive sizing
- Code splitting at the route level to reduce initial bundle size
- Lazy loading for images and non-critical components
- Critical CSS inlining for above-the-fold content
- Font optimization using Next.js font loading

Performance targets were set based on Core Web Vitals:
- Largest Contentful Paint under 2.5 seconds
- Cumulative Layout Shift under 0.1
- First Input Delay under 200 milliseconds

## Accessibility

Accessibility was a priority throughout development. The site meets WCAG 2.2 AA standards through:

- Color contrast ratios that exceed minimum requirements
- Full keyboard navigation support
- Proper ARIA labels and semantic HTML
- Focus indicators that are clearly visible
- Alt text for all images
- Form labels that are properly associated with inputs

All interactive elements meet the 44x44 pixel minimum touch target size for mobile devices.

## SEO

The site includes comprehensive SEO optimization for local search:

- Structured data using JSON-LD for LocalBusiness and Service schemas
- Optimized meta tags for titles and descriptions
- Open Graph tags for social media sharing
- Consistent business information across all pages
- Service area targeting for local search results

## Documentation

Additional documentation is available in the `docs/` directory:

- [Architecture Overview](docs/architecture.md) - Detailed system architecture and component structure
- [Performance Optimization](docs/performance.md) - Performance strategies and Core Web Vitals targets
- [Accessibility Implementation](docs/accessibility.md) - WCAG compliance and accessibility features
- [System Diagram](docs/system-diagram.md) - Visual representation of data flow and system interactions
- [Development Workflow](docs/workflow.md) - Development process and best practices
- [Technical Decisions](docs/tech-decisions.md) - Rationale behind key technology choices

## User Experience

The user experience focuses on simplicity and clarity:

- Single primary call-to-action used consistently throughout the site
- Clear navigation that works on all device sizes
- Fast page transitions and smooth scrolling
- Immediate feedback for form submissions
- Mobile-optimized layouts that prioritize key actions

## Sample Code

This repository includes sample code in the `sample-code/` directory that demonstrates coding patterns and architectural decisions used in the project. These examples are generic and do not contain any real business logic or sensitive information.

The sample code includes:
- React component examples showing form handling and state management
- Next.js API route patterns for server-side processing
- Utility functions demonstrating common helper patterns
- UI component structure examples

These files are provided to illustrate development approaches and should not be considered production-ready code.

## Screenshots

Screenshots will be added here showing:

- Homepage layout and hero section
- Mobile responsive design examples
- Quote form interface
- Portfolio gallery with modal viewing
- Service pages with category toggles
- Navigation and footer components

## Important Note

The actual production codebase for this website is private and proprietary. It contains business-specific logic, real API integrations, and confidential information. This repository serves as a case study and demonstration of the development approach and techniques used.

The sample code included in this repository is generic and does not represent the actual implementation. It is provided solely to illustrate coding patterns and architectural decisions.

## Project Status

This website is live in production and actively serving customers. The codebase continues to be maintained and updated as needed.

