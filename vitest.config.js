import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [
      '**/*.{test,spec}.{js,mjs,ts}',
      '**/*.test.{js,mjs,ts}',
      '**/*.spec.{js,mjs,ts}'
    ],
    exclude: ['node_modules/**', 'dist/**', '.git/**', '.cache/**']
  }
});
