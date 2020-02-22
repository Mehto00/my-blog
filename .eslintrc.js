module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.jsx']}],
    'react/jsx-one-expression-per-line': [2, {allow: 'none'}],
    "react/jsx-first-prop-new-line": "multiline",
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
    'import/extensions': ['error', 'ignorePackages', {js: 'never', jsx: 'never', ts: 'never', tsx: 'never'}],
    'import/prefer-default-export': 'off',
    'object-curly-spacing': ['error', 'never'],
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    camelcase: 'off',
    'no-extra-semi': 'off',
  },
}
