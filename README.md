[Website Link](https://super-pudding-ee5610.netlify.app/)

### Documentation

## Design Choices

The design follows a minimalist approach with a clean, professional color scheme using indigo-blue accents (#646cff and #535bf2) against a white background. This creates high contrast and ensures excellent readability. The layout uses a card-based design system with subtle shadows and hover effects to create depth and interactivity without overwhelming the user.

## Key Features

Responsive Navigation: Implemented a hamburger menu for mobile devices that smoothly transitions between states
Form Validation: Client-side validation for the contact form includes:
Name validation (minimum 2 characters)
Email format verification using regex
Message length check (minimum 10 characters)
Temporary error messages that auto-dismiss after 3 seconds
Interactive Elements: Added hover animations on cards and buttons using CSS transitions for subtle but engaging user feedback
Accessibility: Semantic HTML structure and ARIA labels ensure the site is accessible to screen readers

## Development Challenges

The main challenge was creating a truly responsive layout that works seamlessly across all devices. This was solved by implementing a mobile-first approach using CSS Grid and Flexbox, with strategic breakpoints at 768px and 480px to handle different screen sizes effectively.
