const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");

const PORT = 3001;

const config = {
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: PORT,
  },
};

module.exports = () => {
  return merge(common, config);
};
