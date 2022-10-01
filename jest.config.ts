import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.tsx'],
  collectCoverageFrom: ['src/**/*.{js,tsx,ts}'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/public'],

  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
  ],
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/__tests__/mocks', '<rootDir>/public'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/__test__/mocks/file.tsx',
    '~/(.*)': '<rootDir>/src/$1',
  },
};

export default config;