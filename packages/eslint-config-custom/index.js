module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "simple-import-sort"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // windows and linux line format
    "linebreak-style": ["error", "unix"],
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages.
              ["^(react|@react)"],
              // Packages `next` related packages.
              ["^(next|@next)"],
              // Packages `next` related packages.
              ["^(apollo*|@apollo*)"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Template packages.
              ["^(template|@template)(/.*|$)"],
              // Component packages.
              ["^(components|@components)(/.*|$)"],
              // Utils packages.
              ["^(utils|@utils)(/.*|$)"],
              // Style imports.
              ["^(styles|@styles)(/.*|$)"],
              // GraphQl packages.
              ["^(graphql|@graphql)(/.*|$)"],
            ],
          },
        ],
      },
    },
  ],
};
