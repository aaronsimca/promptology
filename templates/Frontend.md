# Frontend Development Guidelines

## Technology Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Shadcn
- Framer Motion

## File Structure

- `/components`: Store reusable components (e.g., `example-component.tsx`)
- `/app`: Place new pages and routes
- `/hooks`: Custom React hooks
- `/styles`: Global styles and Tailwind configurations
- `/utils`: Utility functions and helpers

## Development Process

1. Create new components in the appropriate directories.
2. Implement new pages in the `/app` directory.
3. Use server components for data fetching and pass data as props.
4. Add 'use client' directive for components using client-side features.
5. Implement responsive designs using Tailwind CSS.
6. Use Framer Motion for animations when necessary.

## Best Practices

- Follow React and Next.js best practices for performance optimization.
- Use semantic HTML and ensure accessibility compliance.
- Implement proper error boundaries and fallback UIs.
- Optimize images and assets for web performance.
- Use CSS modules or Tailwind for styling to avoid global scope issues.

## Component Guidelines

- Create modular, reusable components.
- Use proper prop typing with TypeScript.
- Implement error and loading states for data-dependent components.
- Use React.memo() for performance optimization when appropriate.

## State Management

- Use React hooks (useState, useReducer) for local state.
- Implement context API for global state when necessary.
- Consider using SWR or React Query for remote data fetching and caching.

## Routing

- Utilize Next.js App Router for all routing needs.
- Implement dynamic routes where appropriate.
- Use Link component for client-side navigation.

## Testing

- Write unit tests for individual components and utilities.
- Implement integration tests for page layouts and user flows.
- Use React Testing Library for component testing.

## Performance Optimization

- Implement code splitting and lazy loading for large components.
- Use Next.js Image component for optimized image loading.
- Minimize use of third-party libraries and analyze bundle size regularly.

Remember to adapt these guidelines based on specific project requirements and team conventions.
