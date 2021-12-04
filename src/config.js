//@ts-check

const myRules = require('./myConfigs/index').rules
const xoBaseRules = require('./myConfigs/xo-base-rules')

const rules = {
    ...require('eslint-plugin-unicorn/configs/recommended').rules,
    ...require('eslint-config-xo').rules,
    ...require('eslint-config-xo-typescript').rules,
    ...require('eslint-config-prettier').rules,
    ...xoBaseRules,
    ...myRules,
}
// const overrides = {
//     ...require('eslint-config-xo-typescript').overrides,
// }

// TODO overrides of unicorn

// I don't neeed promise/ rules as they're not helpful and most of them are not fixable
const removeRules = ['promise/']

/** @type{import('eslint').Linter.Config} */
const config = {
    // I primarily use TypeScript (or .mjs, .cjs). For me, .js files are generated ones
    ignorePatterns: ['*.js'],
    root: true,
    plugins: ['@typescript-eslint', 'unicorn', 'eslint-comments', 'import', 'node', 'sonarjs'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    env: { es2021: true, node: true },
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
        jsx: true,
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        'import/core-modules': ['electron', 'vscode'],
    },
    // @ts-ignore
    rules: Object.fromEntries(Object.entries(rules).filter(([name]) => !removeRules.some(str => name.startsWith(str)))),
}

module.exports = config
