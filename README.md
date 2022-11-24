# Webpack

- Take a big collection of tiny `.js` modules
- Merge them into a one big js file
- Keep execution order

## Webpack Config

- Webpack has a `webpack.config.js` file to have custom build settings

### Entry Point Property

- uses the `config.entry` property
- specifies the name of the file that serves as the entry point of the project

```js
const config = {
  entry: "./src/index.js",
};

module.exports = config;
```

### Output Property

- tells webpack where to take the build and save the file
- it has 2 main properties:
  - `path`, the fully qualified path were to put the build
  - `filename`, the name of the build
- **Note:** webpack runs on a `node.js` environment, so all `node.js` api's are available

```js
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
};

module.exports = config;
```

### Module Loaders

- add pre-processing to files before added to the bundle
- transpiling js, css, images, ...

- **babel-loader**

  - parses al `.js` files
  - needs the following packages to run: `npm i -D babel-loader @babel/core @babel/preset-env`

  ```json
  // .babelrc
  {
    "presets": ["@babel/preset-env"]
  }
  ```

  ```js
  // webpack.config.js
  {
    ...
    module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  }
  ```

- **css-loader**
  - knows how to deal with CSS imports
- **style-loader**
  - takes the CSS imports and adds the to the HTML document
- install them with: `npm i -D style-loader css-loader`

**Important:** loaders are applied from **right** to **left**!!

- **mini-css-extract-plugin**

  - allows to extract the `css` styles into a separate file
  - works along with `css-loader`
  - install with: `npm i -D mini-css-extract-plugin`

  ```js
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  const config = {
    ...
    module: {
     rules: [
       {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
     ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],
  }
  ```

  - needs to import the generated `style.css` file into the `index.html` file

- **image-webpack-loader**
  - resizes an image
  - install with: `npm i -D image-webpack-loader`
- **url-loader**

  - checks the size of the generated image
  - if the image is small: includes the image in the `bundle.js` as raw data (base64)
  - if the image is big: includes the raw image in the output directory
  - install with: `npm i -D url-loader`
    **Note:** to successfully append the generated files to the `build` it's necessary to install the `file-loader`: `npm i -D file-loader`, and set the `output.publicPath` to `"build/"`

  ```js
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 },
          },
          `image-webpack-loader`,
        ],
      },
    ]
  },
  ```
