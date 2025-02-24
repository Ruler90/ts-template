import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    ...tseslint.configs.recommended,
    {
        rules: {
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-console': 'warn',
            'no-var': 'error',
            'prefer-const': 'error',
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        },
    },
];
