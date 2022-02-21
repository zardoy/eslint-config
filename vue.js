//@ts-check
const config = require('./src')
const baseVueRulesConfig = require('eslint-plugin-vue/lib/configs/vue3-recommended')
const noLayoutRules = require('eslint-plugin-vue/lib/configs/no-layout-rules')

const allVueRules = {}
const loadConfig = config => {
    if (config.extends) {
        loadConfig(require(config.extends))
    }
    Object.assign(allVueRules, config.rules)
}
loadConfig(baseVueRulesConfig)

// 'vue/max-attributes-per-line' would be also awesome to enable as I don't like prettier behaviour
const keepLayoutRules = ['vue/html-self-closing']

const { jsx, ecmaFeatures, ...pickParserOptions } = config.parserOptions

module.exports = {
    ...config,
    parser: 'vue-eslint-parser',
    // extends: [...config.extends, 'plugin:vue/vue3-recommended'],
    plugins: ['vue', ...config.plugins],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ...pickParserOptions,
        extraFileExtensions: ['.vue'],
    },
    rules: {
        ...config.rules,
        ...allVueRules,
        ...Object.fromEntries(Object.entries(noLayoutRules.rules).filter(([rule]) => !keepLayoutRules.includes(rule))),
        'vue/block-lang': [
            'error',
            {
                script: {
                    lang: 'ts',
                },
            },
        ],
        // typescript better knows
        'vue/require-valid-default-prop': 'off',
        'vue/v-for-delimiter-style': 'error',
    },
    env: {
        'vue/setup-compiler-macros': true,
        ...config.env,
    },
}
