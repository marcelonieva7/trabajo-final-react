module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': [0, 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['warn', 'never'],
    'react/prop-types': 0,
    quotes: 'warn',
    'import/no-extraneous-dependencies': 0,
    'arrow-parens': ['warn', 'as-needed'],
  },
}
