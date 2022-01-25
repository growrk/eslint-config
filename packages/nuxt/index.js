module.exports = {
  plugins: ['prettier'],
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': ['error', { allow: ['log', 'error'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', argsIgnorePattern: 'reject|context' }
    ],
    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/named': 'off'
  }
}
