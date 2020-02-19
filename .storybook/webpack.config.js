const path = require('path');

module.exports = ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, "../src"));
  config.node = { fs: "empty" };
  return config;
};