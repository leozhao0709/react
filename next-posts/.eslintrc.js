const commonConfig = require('./.eslintrc.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
  ],
  rules: {
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
