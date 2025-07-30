import { defineConfig } from 'eslint-define-config';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';

export default defineConfig({
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
    react: reactPlugin,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
});