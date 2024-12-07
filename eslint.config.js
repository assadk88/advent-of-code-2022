import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginFunctional from 'eslint-plugin-functional';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: {
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
      functional: eslintPluginFunctional
    },
    rules: {
      'prettier/prettier': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],

      // Functional rules (removed type-dependent rules)
      'arrow-body-style': ['error', 'always'],
      'functional/no-let': 'error',
      'functional/no-loop-statements': 'warn',
      'functional/no-throw-statements': 'warn',
      'functional/no-classes': 'error',
      'no-param-reassign': 'error',
      'no-use-before-define': ['error', { functions: false }],

      // Disable rules that require type information
      'functional/immutable-data': 'off'
    },
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'build/**',
      '*.min.js'
    ]
  }
];

export default config;
