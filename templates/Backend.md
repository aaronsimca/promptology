# Backend Development Guidelines

## Technology Stack

- Supabase
- Drizzle ORM
- Server Actions

## File Structure

- `/db/schema`: Store new table schemas (e.g., `@example-schema.ts`)
- `/db/schema/index.ts`: Export all schemas
- `/db/db.ts`: Add new tables to the schema
- `/db/queries`: Store new queries (e.g., `@example-queries.ts`)
- `/actions`: Add new actions (e.g., `@example-actions.ts`)
- `/types/action-types.ts`: Define and use 'ActionState'

## Development Process

1. Create new schema files for each database table.
2. Export all schemas in the index file.
3. Update the main schema file with new tables.
4. Implement queries for data operations.
5. Create server actions for handling client requests.
6. Use 'ActionState' for managing action states.
7. Generate and migrate schema changes.

## Best Practices

- Implement proper error handling and logging.
- Use parameterized queries to prevent SQL injection.
- Optimize database queries for performance.
- Implement data validation and sanitization.
- Follow the principle of least privilege for database access.

## Testing

- Write unit tests for queries and actions.
- Perform integration testing for the entire data flow.
- Test edge cases and error scenarios.

## Deployment

- Ensure all environment variables are correctly set.
- Run database migrations in the correct order.
- Verify database connections and permissions.

Remember to adapt these guidelines based on specific project requirements and team conventions.
