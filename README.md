# reactjs-experiment

In order to recreate this project from scratch, create five files:
- index.html
- webpack.config.js
- src/main.js
- .babelrc 
- .gitignore

### Write index.html
```
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="example"></div>
    <script src="js/app.js"></script>
  </body>
</html>
```

### Write webpack.config.js
```
// webpack.config.js
module.exports = {
  entry: './src/main.js',
  output: {
    path: './js',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
```

### Write src/main.js
```
// main.js
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

### Write .babelrc
```
{ "presets": ["react"] }
```

### Write .gitignore
```
# .gitignore
js
node_modules
```

### CLI
Execute four commands on the command line:

```
$ npm init
```
This will ask for the following parameters:
- name:
- version:
- description:
- entry point:
- test command:
- git repository:
- keywords:
- author:
- license:
```
$ npm install --save-dev webpack
$ npm install --save react react-dom babel-preset-react babel-loader babel-core
$ webpack
```

`index.html` will now show the working ReactJS function.