# Promptology –Cursor AI Composer

This package is designed for use with the Cursor IDE, enhancing your AI-assisted coding experience.

## Installation

```bash
npm install promptology
```

## Usage

After installation, you need to run a setup command to create the necessary files:

```bash
npx promptology-setup
```

This will create the following structure in your project:

```
your-project/
└── prompt/
    ├── Frontend.md
    ├── Backend.md
    └── Main.md
```

You can then use the following commands in your Cursor IDE:

- `@Codebase`: Points to the entire codebase
- `@Main.md`: References the main documentation file
- `@Frontend.md`: Directs to frontend-specific documentation
- `@Backend.md`: Indicates backend-related documentation

Modify the .md files in the prompt folder to fit your project.
