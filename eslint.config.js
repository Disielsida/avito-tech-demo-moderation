import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      (await import('eslint-config-prettier')).default,
    ],

    rules: {
      'prettier/prettier': [
        'warn',
        {
          usePrettierrc: true,
        },
      ],

      'react/react-in-jsx-scope': 'off',
      'comma-dangle': 'off',
      'use-isnan': ['error', { enforceForSwitchCase: true }],
      'react/void-dom-elements-no-children': 'warn',
      'react/no-unsafe': 'warn',
      'react/no-unused-state': 'warn',
      'react/prefer-stateless-function': 'warn',
      'react/self-closing-comp': 'warn',
      'react/no-will-update-set-state': 'warn',
      'react/no-this-in-sfc': 'warn',
      'react/no-string-refs': 'warn',
      'react/no-redundant-should-component-update': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-key': 'warn',
      'react/jsx-max-props-per-line': ['warn', { maximum: 7 }],
      'react/jsx-max-depth': ['warn', { max: 8 }],
      'arrow-body-style': ['warn', 'as-needed'],
      'dot-notation': 'warn',
      'jsx-quotes': ['warn', 'prefer-single'],
      'valid-typeof': 'warn',

      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: [
            'private-static-field',
            'protected-static-field',
            'public-static-field',
            'private-static-method',
            'protected-static-method',
            'public-static-method',
            'private-constructor',
            'protected-constructor',
            'public-constructor',
            'private-instance-field',
            'protected-instance-field',
            'public-instance-field',
            'private-instance-method',
            'protected-instance-method',
            'public-instance-method',
          ],
        },
      ],
    },
  },
]);
