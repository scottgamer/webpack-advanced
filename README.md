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

