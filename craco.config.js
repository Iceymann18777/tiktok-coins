const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

module.exports = {
  plugins: [
    {plugin: CracoAntDesignPlugin, options: {
        customizeThemeLessPath: path.join(__dirname, 'src/styles/_override_variables.less'),
      },},
  ],
};
