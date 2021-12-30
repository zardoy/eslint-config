module.exports = {
    rules: {
        'react/jsx-indent': 'off',
        // 'react/jsx-child-element-spacing': 'off',
        // 'react/no-unknown-property': 'off',
        // 'react/jsx-uses-vars': 'error',
        'react/no-array-index-key': 'warn',
        'react/prop-types': 'off',
        // 'react/jsx-indent': [
        //     'error',
        //     4,
        //     {
        //         checkAttributes: true,
        //         indentLogicalExpressions: true,
        //     },
        // ],
        'react/jsx-indent-props': ['error', 4],
        // jsx-max-props-per-line
        'react/jsx-pascal-case': [
            'error',
            {
                // framer-motion (motion.div)
                allowNamespace: true,
            },
        ],
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],
        // TODO block jsx-no-bind arrow functions
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-wrap-multilines': [
            'error',
            // I just find them redundant in most cases
            {
                declaration: 'ignore',
                assignment: 'ignore',
                return: 'ignore',
                arrow: 'parens-new-line',
                condition: 'ignore',
                logical: 'ignore',
                prop: 'ignore',
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
    },
}
