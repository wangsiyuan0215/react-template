module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true
    },
    globals: {},
    rules: {
        'react/jsx-indent': [4, 'always'],
        'react/prop-types': 0,
        'react/jsx-indent-props': [4, 'always'],
        'react/forbid-prop-types': 0,
        'react/jsx-wrap-multilines': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
        'react/jsx-one-expression-per-line': 0,

        'import/no-unresolved': [2, { ignore: ['^@/', '^umi/', '^root/'] }],
        'import/no-extraneous-dependencies': [
            2,
            {
                optionalDependencies: true,
                devDependencies: ['**/tests/**.js', '/mock/**.js', '**/**.test.js']
            }
        ],

        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,

        "complexity": ["error", 8],
        'linebreak-style': 0
    },
    settings: {
        polyfills: ['fetch', 'promises', 'url']
    }
};
