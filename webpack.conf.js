module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
          options: {
            // Disables attributes processing
            sources: false,
            esModule: false,
          },          
        },
      ],
    },
  };
  