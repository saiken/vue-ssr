/**
 * webpack.config.js で読み込むサーバ用の設定
 */
const path = require("path")

module.exports = {
  entry: "./src/create-app.js",
  output: {
    libraryTarget: "commonjs2",		// NodeはCommonJSを使うためcommonjs2を指定
  }
}
