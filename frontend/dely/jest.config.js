module.exports = {
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/app/libs/components/$1',
    '@services': '<rootDir>/src/app/libs/services/index.ts',
    '@resolvers': '<rootDir>/src/app/libs/resolvers/index.ts',
    '@store': '<rootDir>/src/app/libs/store/index.ts',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
