# Cursor IDE Structured Prompt

## Project Overview

[Project Name]: [Brief description of the project]
[Key Features]: [List of main features]

## Technology Stack

- Frontend: Next.js, React, Tailwind CSS, Shadcn, Framer Motion
- Backend: Supabase, Drizzle ORM, Server Actions
- Additional Tools: [List any additional tools or APIs]

## Development Guidelines

### General

1. Follow best practices for clean, maintainable code.
2. Implement error handling and logging where appropriate.
3. Ensure responsive design for all screen sizes.
4. Optimize for performance and SEO.

### Frontend (Next.js App Router)

1. Create new components in `/components` named like `example-component.tsx`.
2. Place new pages in `/app`.
3. Group related components into folders.
4. Use server components for data fetching and pass data down as props.
5. Add 'use client' directive at the top of files using client-side features (useState, hooks, etc.).
6. Import useRouter from next/navigation.

### Backend

1. Create new schema files in `/db/schema` (e.g., `@example-schema.ts`).
2. Export new schemas in `/db/schema/index.ts`.
3. Add new tables to the schema in `/db/db.ts`.
4. Place new queries in `/db/queries` (e.g., `@example-queries.ts`).
5. Add new actions in `/actions` (e.g., `@example-actions.ts`).
6. Use 'ActionState' from `/types/action-types.ts`.
7. Generate new schema with `db:generate` and migrate with `db:migrate`.

## Feature Implementation

[Feature Name]:

- Description: [Brief description of the feature]
- Frontend Tasks:
  1. [Task 1]
  2. [Task 2]
     ...
- Backend Tasks:
  1. [Task 1]
  2. [Task 2]
     ...

## Testing

- Implement unit tests for critical functions and components.
- Perform integration testing for API endpoints and data flow.
- Conduct user acceptance testing for key features.

## Deployment

1. Ensure all environment variables are properly set.
2. Run build process and verify successful compilation.
3. Deploy to staging environment for final testing.
4. Deploy to production environment.

## Additional Instructions

- [Any project-specific instructions or guidelines]
- [Notes on performance optimization, security considerations, etc.]

Remember to adapt and expand this prompt based on the specific requirements of each project.
