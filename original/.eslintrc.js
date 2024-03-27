module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  plugins: ['react', 'react-hooks', 'import'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-indent': ['error', 2],
    'react/require-default-props': 'off',
    'react/jsx-indent-props': ['warn', 'first'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': [
      'warn',
      {
        maximum: {
          single: 4,
          multi: 2,
        },
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/no-danger': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/self-closing-comp': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    quotes: [2, 'single'],
  },
  overrides: [
    {
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
      alias: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
