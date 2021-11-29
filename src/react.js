//@ts-check
const config = require('./index')
const { rules: reactRules } = require('./myConfigs/react')

module.exports = {
    ...config,
    rules: {
        ...require('eslint-config-xo-react').rules,
        ...reactRules,
        ...config.rules,
    },
}
