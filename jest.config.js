const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './'
});

const customJestConfig = {
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    moduleDirectories: ['node_modules', '<rootDir>/', 'functions/node-modules'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['<rootDir>/cypress/'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
