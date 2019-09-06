{
  "name": "galactic-age-calculator",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "karma start karma.conf.js",
    "build": "webpack --mode development",
    "start": "npm run build; webpack-dev-server --open --mode development",
    "watch": "webpack --watch",
    "lint": "eslint src/*.js",
    "test": "./node_modules/karma/bin/karma start karma.conf.js"
  },
  "repository": {
    "type": "git"
  },
  "keywords": [],
  "author": "",
  "license": "",
  "bugs": {
    "url": ""
  },
  "homepage": "",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.3",
    "babel-preset-es2015": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "eslint": "^4.18.2",
    "eslint-loader": "^2.0.0",
    "html-webpack-plugin": "^3.0.6",
    "jasmine": "^3.1.0",
    "jasmine-core": "^2.99.1",
    "karma": "^2.0.0",
    "karma-chrome-launcher": "^2.2.0",
    "karma-cli": "^1.0.1",
    "karma-jasmine": "^1.1.1",
    "karma-jasmine-html-reporter": "^0.2.2",
    "karma-jquery": "^0.2.2",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^2.0.13",
    "style-loader": "^0.20.2",
    "uglifyjs-webpack-plugin": "^1.2.2",
    "webpack-cli": "^2.0.9",
    "webpack-dev-server": "^3.1.0"
  },
  "dependencies": {
    "webpack": "4.19.1",
    "bootstrap": "^4.0.0",
    "jquery": "^3.3.1",
    "popper.js": "^1.14.0"
  }
}
