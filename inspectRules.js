const conifg = require('./src/config')

// TODO turn into notebook

// For local testing. list override rules of plugin

for (const [ruleName, status] of Object.entries(conifg.rules)) {
    if (ruleName.startsWith('node/')) console.log(ruleName, status)
}
