/**
 * Lint configuration.
 *
 * @module @xcmats/eslint-config
 * @license MIT
 * @copyright Mat. 2021-present
 */




module.exports = {

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },

    extends: [
        "eslint:recommended",
    ],

    parser: "@babel/eslint-parser",

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
        requireConfigFile: false,
    },

    plugins: [
        "import",
        "react",
    ],

    root: true,

    rules: {
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline",
                "imports": "always-multiline",
                "objects": "always-multiline",
            },
        ],
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "linebreak-style": ["error", "unix"],
        "no-console": "warn",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-redeclare": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unused-vars": ["warn", {"args": "all", "argsIgnorePattern": "^_"}],
        "object-curly-newline": "off",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "strict": "off",

        "import/first": "error",
        "import/no-amd": "error",
        "import/no-webpack-loader-syntax": "error",

        "react/forbid-foreign-prop-types": "error",
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-no-duplicate-props": ["error", { "ignoreCase": false }],
        "react/jsx-no-undef": "error",
        "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-direct-mutation-state": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-render-return": "error",
        "react/sort-comp": ["error", {
            "order": [
                "static-methods",
                "lifecycle",
                "/^on.+$/",
                "/^(get|set)(?!(InitialState$|DefaultProps$)).+$/",
                "everything-else",
                "/^render.+$/",
                "render",
            ],
        }],
        "react/sort-prop-types": ["error", {
            "ignoreCase": false,
            "callbacksLast": true,
            "requiredFirst": true,
        }],
        "react/style-prop-object": "error",
    },

    overrides: [
        {
            "files": ["*.ts", "*.tsx"],
            "parser": "@typescript-eslint/parser",
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
            ],
            "plugins": [
                "@typescript-eslint",
            ],
            "rules": {
                "@typescript-eslint/comma-dangle": [
                    "error",
                    {
                        "arrays": "always-multiline",
                        "enums": "always-multiline",
                        "exports": "always-multiline",
                        "functions": "always-multiline",
                        "generics": "always-multiline",
                        "imports": "always-multiline",
                        "objects": "always-multiline",
                        "tuples": "always-multiline",
                    },
                ],
                "@typescript-eslint/indent": "off",
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/no-unused-vars": ["warn", {"args": "all", "argsIgnorePattern": "^_"}],
                "@typescript-eslint/semi": ["error", "always"],
                "comma-dangle": "off",
                "prefer-const": "off",
                "semi": "off",
            },
        },
    ],

    settings: {
        "react": {
            "pragma": "React",
            "version": "17.0.1",
        },
    },

};
