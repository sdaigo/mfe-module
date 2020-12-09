const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");

const config = {
  output: {
    publicPath: `http://localhost:5000/`,
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};

module.exports = () => {
  return merge(common, config);
};
