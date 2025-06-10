module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
    postcss: {
      loaderOptions: (postcssLoaderOptions) => {
        return postcssLoaderOptions;
      },
    },
  },
};