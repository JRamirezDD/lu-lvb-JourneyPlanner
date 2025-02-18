## Hosting
Not currently hosted. Hosting to be delivered in Sprint 2.

## Local environment variables
The application expects environment variables. For security reasons, API keys and other secrets are stored under .env.local folder.
To set this up do the following:
Create .env.local folder under /app/src
Place the following variables
- NEXT_PUBLIC_API_KEY=""

Available endpoints:


## Getting Started

First install the dependencies
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```
### Accessing pages

Base Endpoint of the project is /lu-lvb-JourneyPlanner (ie. access through localhost:3000/lu-lvb-JourneyPlanner)
Base URL must be followed by /en or /de for the target locale (ie access through localhost:3000/lu-lvb-JourneyPlanner/en/...)

Current pages are visible at:
- [/controlPanel](http://localhost:3000/lu-lvb-JourneyPlanner/en/controlPanel)
- [/map](http://localhost:3000/lu-lvb-JourneyPlanner/en/map)
- [/examples/contexts/autocomplete](http://localhost:3000/lu-lvb-JourneyPlanner/en/examples/contexts/autocomplete)
- [/examples/contexts/multi-component](http://localhost:3000/lu-lvb-JourneyPlanner/en/examples/contexts/multi-component)
- [/examples/contexts/trigger-function](http://localhost:3000/lu-lvb-JourneyPlanner/en/examples/contexts/trigger-function)





## Running tests

### Jest Unit Tests
```bash
npx jest    # Run all tests
# or
npx jest path/to/test/file.test.tsx     # Run a specific file
# or
npx jest src/components # Run tests in a folder
# or
npx jest --testNamePattern="ComponentName" # Run tests that match a specific name or folder
# or
npx jest --coverage # To view a detailed coverage report under the /coverage folder.

```

### ESLint and Prettier
```bash
npm run lint # Runs ESLint formatting checks.
```