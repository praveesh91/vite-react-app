import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Strict typing rules
      '@typescript-eslint/no-explicit-any': 'warn', // Disallow `any`
      '@typescript-eslint/explicit-module-boundary-types': 'warn', // Require return types on functions
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  }
);
