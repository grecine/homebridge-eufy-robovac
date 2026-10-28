import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['test/**/*.test.ts'],
    passWithNoTests: true,
    setupFiles: ['test/setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      all: true,
      thresholds: {
        branches: 35,
        functions: 40,
        lines: 45,
        statements: 45,
      },
    },
  },
});
