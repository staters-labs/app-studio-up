module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/__tests__/**/*.{ts,tsx,js,jsx}'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
