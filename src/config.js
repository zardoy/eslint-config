//@ts-check

const myRules = require('./myConfigs/index').rules
const xoBaseRules = require('./xo-base-rules')
const reactRules = require('./myConfigs/react').rules

// const tsParser = require('@typescript-eslint/parser')

const plugins = require('./pluginsList')

// const normalizeRules = obj => {
//     return Object.fromEntries(
//         Object.entries(
//             obj.map(([ruleName, value]) => {
//                 for (const { rulePrefix } of plugins) {
//                     if (ruleName.startsWith(rulePrefix)) return [`zardoy-config/${ruleName}`, value]
//                 }
//                 return [ruleName, value]
//             }),
//         ),
//     )
// }

// const overrides = {
//     ...require('eslint-config-xo-typescript').overrides,
// }

// TODO! enable back import/ rules

// TODO overrides of unicorn
const rules = Object.fromEntries(
    Object.entries({
        ...require('eslint-plugin-unicorn/configs/recommended').rules, //
        ...require('eslint-config-xo').rules,
        ...require('eslint-config-xo-typescript').rules,
        ...require('eslint-config-prettier').rules,
        ...xoBaseRules,
        ...myRules,
    }).map(([ruleName, value]) => {
        for (const { rulePrefix } of plugins) {
            if (ruleName.startsWith(rulePrefix)) return [`zardoy-config/${ruleName}`, value]
        }
        return [ruleName, value]
    }),
)

/** @type{import('eslint').Linter.Config} */
const config = {
    root: true,
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
    plugins: ['zardoy-config'],
    settings: {
        'zardoy-config/import/core-modules': ['electron'],
    },
    // @ts-ignore
    rules,
}

const reactConfig = {
    ...config,
    rules: {
        ...require('eslint-config-xo-react').rules,
        ...config.rules,
        ...reactRules,
    },
}

module.exports = { config, reactConfig }
