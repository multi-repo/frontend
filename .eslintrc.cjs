module.exports = {
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react',
    'react-hooks',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/prop-types': 'off',  // Disable prop-types as we use TypeScript for type checking
    'react/react-in-jsx-scope': 'off',  // Next.js doesn't require React in scope
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],  // Enforce .tsx for JSX
    'react-hooks/rules-of-hooks': 'error',  // Enforce React hooks rules
    'react-hooks/exhaustive-deps': 'warn',  // Enforce exhaustive dependencies in hooks
  },
};
