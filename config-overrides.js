const path = require('path');
const { override, addWebpackPlugin, fixBabelImports, addWebpackAlias } = require('customize-cra');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const eslintConfig = require('./.eslintrc.js');

const useEslintConfig = (configRules) => (config) => {
  const updatedRules = config.module.rules.map((rule) => {
    if (rule.use && rule.use.some((use) => use.options && use.options.useEslintrc !== undefined)) {
      const ruleUse = rule.use[0];
      const baseOptions = ruleUse.options;
      const baseConfig = baseOptions.baseConfig || {};
      const newOptions = {
        useEslintrc: false,
        ignore: true,
        baseConfig: { ...baseConfig, ...configRules }
      };
      ruleUse.options = newOptions;
      return rule;
    } else {
      return rule;
    }
  });
  config.module.rules = updatedRules;
  return config;
};

// Support environment -specific settings
const NODE_ENV = process.env.NODE_ENV;

module.exports = override(
  addWebpackPlugin(new ProgressBarPlugin()),
  fixBabelImports('antd', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  ...(NODE_ENV === 'development' ? [useEslintConfig(eslintConfig)] : []),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
);
