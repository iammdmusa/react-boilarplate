module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json']
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off']
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '*-test.js', '*.spec.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'off',
          {
            allowTypedFunctionExpressions: true,
            allowExpressions: true
          }
        ]
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
