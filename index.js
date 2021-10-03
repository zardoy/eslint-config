//@ts-check

const { rules: myXoRules } = require('@zardoy/xo-config')()
const xoBase = require('./xo-base-rules')

/** @type{import('eslint').Linter.Config} */
const config = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['no-use-extend-native', 'unicorn', 'promise', 'import', 'node', 'eslint-comments', 'xo-typescript'],
    extends: ['plugin:unicorn/recommended', 'prettier'],
    settings: {
        'import/core-modules': ['electron'],
    },
    // @ts-ignore
    rules: {
        ...xoBase,
        ...myXoRules,
        'import/no-deprecated': 'error',
    },
}

module.exports = config
