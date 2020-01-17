const path = require("path");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withMDX = require("@next/mdx")({
  extensions: [".md", ".mdx"]
});

module.exports = withCss(
  withSass(
    withMDX({
      cssModules: true,
      distDir: "../dist",
      exportTrailingSlash: true,
      webpack(config) {
        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = await originalEntry();

          if (
            entries["main.js"] &&
            !entries["main.js"].includes("./polyfill.js")
          ) {
            entries["main.js"].unshift("./polyfill.js");
          }

          return entries;
        };

        config.resolve.alias = {
          ...config.resolve.alias,
          "@": path.resolve(__dirname)
        };

        config.module.rules.push({
          test: /\.(jpe?g|png|gif|svg)/,
          use: [
            {
              loader: "url-loader",
              options: {
                esModule: false,
                limit: 8192,
                publicPath: "/_next/static/images",
                outputPath: "static/images",
                fallback: "file-loader",
                name: "[name]-[hash].[ext]"
              }
            }
          ]
        });

        return config;
      }
    })
  )
);
