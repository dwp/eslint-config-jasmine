// eslint-disable-next-line import/no-extraneous-dependencies
const config = require('@dwp/nyc-config-base');

config.exclude = config.exclude || [];

config.exclude = [
  ...(config.exclude || []),
  '*.config.js',
  '.coverage',
  '.eslintrc.js',
  '.huskyrc.js',
];


module.exports = config;
