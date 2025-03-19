/** @type {import('jest').Config} */
require('dotenv').config({ path: '.env.test' });

const config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/testing/jest/jest.setup.js'],
  setupFiles: ["jest-canvas-mock"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': ['babel-jest', {
      presets: ['next/babel']
    }]
  },
  transformIgnorePatterns: [
    'src/node_modules/(?!(lucide-react|@lucide)/)'
  ],
  testMatch: ['<rootDir>/testing/jest/**/*.test.(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/src/.next/', '<rootDir>/src/node_modules/'],
  compilerOptions: {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
  }
}

module.exports = config 