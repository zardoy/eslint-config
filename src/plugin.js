const config = require('./config')
const pluginsList = require('./pluginsList')

// console.time('parse')

const allPluginsRules = {}

for (const plugin of pluginsList) {
    const pluginModule = require(plugin.name)
    for (const [ruleName, ruleConfig] of Object.entries(pluginModule.rules)) {
        allPluginsRules[`${plugin.rulePrefix}/${ruleName}`] = ruleConfig
    }
}

// console.timeEnd('parse')

module.exports = {
    configs: {
        recommended: config,
        // react: config,
    },
    rules: allPluginsRules,
}
