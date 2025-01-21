

lu-lvb-JourneyPlanner/
├── public/                      # Static assets (e.g., images, fonts, favicon)
├── src/
│   ├── app/                     # Application layer
│   │   ├── routes/              # Application routes/pages
│   │   ├── app.tsx              # Main application entry
│   │   ├── provider.tsx         # Global providers (context, theme, etc.)
│   │   └── router.tsx           # Application router configuration
│   ├── assets/                  # Global static assets
│   ├── components/              # Shared reusable components
│   ├── config/                  # Global configurations and environment variables
│   ├── features/                # Feature-based modules
│   │   ├── example_feature/     # Example feature
│   │   │   ├── api/             # API declarations and hooks
│   │   │   ├── assets/          # Feature-specific static assets
│   │   │   ├── components/      # Feature-specific components
│   │   │   ├── hooks/           # Feature-specific hooks
│   │   │   ├── stores/          # Feature-specific state stores
│   │   │   ├── types/           # Feature-specific TypeScript types
│   │   │   └── utils/           # Feature-specific utility functions
│   ├── hooks/                   # Shared hooks used across the app
│   ├── lib/                     # Reusable libraries preconfigured for the app
│   ├── stores/                  # Global state stores
│   ├── testing/                 # Test utilities and mocks
│   ├── types/                   # Shared TypeScript types
│   └── utils/                   # Shared utility functions
├── .env.local                   # Environment variables
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies and scripts
