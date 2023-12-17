module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        "plugin:i18next/recommended"
    ],
    parser: '@typescript-eslint/parser',
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest', 
        sourceType: 'module',
    },
    plugins: [
        "react",
        "i18next",
        "@typescript-eslint",
        "react-hooks",
    ],
    rules: {
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'indent': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "i18next/no-literal-string": ['error', {markupOnly: true}],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
    },
    root: true,
    settings: {
        react: {
          version: "detect"
        }
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts, tsx}'],
            rules: {
                "i18next/no-literal-string": "off",
            }
        }
    ]
}