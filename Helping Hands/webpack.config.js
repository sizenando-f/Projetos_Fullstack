const path = require("path");

module.exports = {
  entry: {
    main: "./src/scripts/index.js",
    companyjs: "./src/scripts/modules/company-register.js",
    volunteerjs: "./src/scripts/modules/volunteer-register.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
