module.exports = {
  root: true,
  env: { "browser": true, "es2020": true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    'plugin:prettier/recommended',
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:import/typescript"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "postcss.config.js", "tailwind.config.js"],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: [
    "react-refresh",
    "prettier"
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", {
      "varsIgnorePattern": "^_",
      "argsIgnorePattern": "^_"
    }],
    "react/react-in-jsx-scope": "off",
    "no-mixed-spaces-and-tabs": "off",
    "@typescript-eslint/dot-notation": "error",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "operator-linebreak": ["off"],
    "@typescript-eslint/indent": "off",
    'import/no-cycle': 'off',
    "function-paren-newline": "off",
    "object-curly-newline": [
      "error", 
      {
        "ObjectExpression": { "multiline": true, "consistent": true },
        "ObjectPattern": { "multiline": true, "consistent": true },
        "ImportDeclaration": { "multiline": true, "consistent": true },
        "ExportDeclaration": { "multiline": true, "consistent": true }
      }
    ]
  },
}
