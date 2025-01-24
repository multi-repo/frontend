module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Add custom rules if necessary
    // Example: Enforce commit message length
    'header-max-length': [2, 'always', 72],
  },
};
