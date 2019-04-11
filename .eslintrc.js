module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        'react'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    globals: {
        window: true,
        process: true,
        document: true,
        console: true,
    },
    rules: {
        '@typescript-eslint/prefer-interface': 'off',
        'no-console' : 'warn'
    },
    settings: {
        react: {
            version: 'detect'
        },
    }
};