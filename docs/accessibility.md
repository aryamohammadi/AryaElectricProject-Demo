# Accessibility Decisions

This document explains the accessibility features implemented in the project and the reasoning behind them.

## Color Contrast

All text meets WCAG 2.2 AA contrast requirements:

- Normal text has at least 4.5:1 contrast ratio
- Large text has at least 3:1 contrast ratio
- Interactive elements have sufficient contrast for visibility

This ensures text is readable for users with visual impairments.

## Keyboard Navigation

The entire site can be used without a mouse:

- All interactive elements are keyboard accessible
- Tab order follows logical page flow
- Focus indicators are clearly visible
- Keyboard shortcuts work as expected

This allows users who cannot use a mouse to navigate the site effectively.

## Screen Reader Support

Screen reader users are supported through:

- Semantic HTML elements (header, nav, main, footer)
- ARIA labels where needed for clarity
- Alt text for all images
- Form labels properly associated with inputs
- Descriptive link text

This makes the site usable for people who rely on screen reading software.

## Touch Targets

All interactive elements meet the 44x44 pixel minimum size:

- Buttons are large enough for easy tapping
- Links have adequate padding
- Form inputs are properly sized
- Mobile navigation is touch-friendly

This ensures the site works well on mobile devices and for users with motor impairments.

## Focus Management

Focus is managed carefully:

- Focus indicators are visible and high contrast
- Focus order follows logical page structure
- Modal dialogs trap focus appropriately
- Focus is restored when modals close

This helps keyboard users understand where they are on the page.

## Form Accessibility

Forms are built with accessibility in mind:

- All inputs have associated labels
- Required fields are clearly marked
- Error messages are associated with inputs
- Validation feedback is immediate and clear

This makes forms usable for all users, including those using assistive technologies.

## Motion Preferences

Animations respect user preferences:

- Reduced motion preferences are honored
- Essential animations remain functional
- Decorative animations can be disabled

This prevents motion from causing discomfort for users with vestibular disorders.

## Testing Approach

Accessibility was tested using:

- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader testing
- Color contrast verification tools

Regular testing ensures accessibility is maintained as the site evolves.

