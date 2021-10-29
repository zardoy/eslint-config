module.exports = {
    rules: {
        // https://github.com/prettier/prettier/issues/3806
        'operator-linebreak': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        // diabled, because too annoying. I'm using prettier for formatting
        semi: 'off',
        '@typescript-eslint/semi': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/quotes': 'off',
        quotes: 'off',

        '@typescript-eslint/object-curly-spacing': 'off',

        // TODO review
        // find it useless doesn't allow writing return next() in middlewares
        '@typescript-eslint/no-confusing-void-expression': 'off',

        'semi-style': ['error', 'first'],
        curly: ['error', 'multi', 'consistent'],
        // it's just not convenient. I got used to it
        'capitalized-comments': 'off',
        'no-unused-vars': 'warn',
        'no-empty-function': 'warn',
        'template-curly-spacing': 'error',
        'prefer-template': 'error',
        'import/no-anonymous-default-export': 'off',
        // TODO error on stable. Warn on PRs
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        // TODO enable once Error type in catch clauses
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // don't see a reason for that. Also, don't know how to re-export in that case
        '@typescript-eslint/no-var-requires': 'off',
        'no-implicit-coercion': [
            'error',
            {
                boolean: false,
                number: false,
            },
        ],
        '@typescript-eslint/no-implicit-any-catch': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/restrict-template-expressions': [
            'error',
            {
                allowBoolean: true,
                allowAny: true,
            },
        ],
        // common for libs
        '@typescript-eslint/no-unsafe-return': 'off',
        // also common for libs or for React component with empty props
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        // common to reference since it is not possible to reference to types via tsconfig
        '@typescript-eslint/triple-slash-reference': 'off',
        // TODO investigate
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        // a commong style
        // '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        // TODO disable completely. I really know where and when to use null
        'unicorn/no-null': 'warn',
        'unicorn/custom-error-definition': 'error',
        'unicorn/consistent-destructuring': 'warn',
        'unicorn/empty-brace-spaces': 'off',
        // its too early for me. TODO enable back
        'unicorn/prefer-module': 'off',
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
        'unicorn/import-style': [
            'error',
            {
                styles: {
                    fs: {
                        default: true,
                    },
                    vscode: {
                        default: true,
                    },
                },
                extendDefaultStyles: false,
            },
        ],
        'unicorn/no-array-reduce': 'warn',
        // TODO try to enable once cjs problems are solved (esbuild)
        'unicorn/prefer-node-protocol': 'off',
        // It is just would be super inconveniet for me. So far I didn't have any problems with that. I'll try to enable it once import system in VSCode is smarter.
        'node/prefer-global/process': 'off',
        '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
        'unicorn/prevent-abbreviations': 'off',
        // sometimes things must run in sequence
        'no-await-in-loop': 'warn',
        'import/no-deprecated': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'no-warning-comments': 'off',
        // dimmed color for vars from IDE is enough + reports unused in function types for args
        'no-unused-vars': 'off',
        // TODO disable import/* rules. this one is lagging
        'import/newline-after-import': 'off',
        'new-cap': [
            'error',
            {
                newIsCapExceptions: ['fdir'],
                capIsNewExceptions: ['Debug'], //@prisma/debug
            },
        ],
        // investigate why it was created
        'node/file-extension-in-import': 'off',
    },
}
