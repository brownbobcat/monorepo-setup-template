const { composePlugins, withNx } = require('@nx/webpack');
const { join } = require('path');

module.exports = composePlugins(withNx(), (config) => {
  return {
    ...config,
    output: {
      ...config.output,
      path: join(__dirname, '../../dist/apps/backend'),
      filename: 'main.js'
    }
  };
});