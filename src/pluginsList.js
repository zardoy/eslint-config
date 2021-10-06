const plugins = ['unicorn', 'promise', 'import', 'node', 'eslint-comments']

module.exports = [
    ...plugins.map(plugin => ({ name: `eslint-plugin-${plugin}`, rulePrefix: plugin })),
    //
    { name: '@typescript-eslint/eslint-plugin', rulePrefix: '@typescript-eslint' },
]
