import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    ...tseslint.configs.recommended,
    {
        rules: {
            'no-console': 'warn',
            'no-var': 'error',
            'prefer-const': 'error',
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        },
    },
    prettier,
];
