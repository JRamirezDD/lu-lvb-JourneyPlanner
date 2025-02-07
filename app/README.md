## Hosting
Not currently hosted. Hosting to be delivered in Sprint 2.

## Getting Started

First install the dependencies
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Current pages are visible at:
[/controlPanel](http://localhost:3000/controlPanel)
[/map](http://localhost:3000/map)
[/examples/contexts/autocomplete](http://localhost:3000/examples/contexts/autocomplete)
[/examples/contexts/counter](http://localhost:3000/examples/contexts/counter)
[/examples/contexts/multi-component](http://localhost:3000/examples/contexts/multi-component)
[/examples/contexts/trigger-function](http://localhost:3000/examples/contexts/trigger-function)



You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

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