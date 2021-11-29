const conifg = require('./src/index')

// For local testing. list override rules of plugin

for (const [ruleName, status] of Object.entries(conifg.rules)) {
    if (ruleName.startsWith('node/')) console.log(ruleName, status)
}
