# jest-enzyme-example
An Example React project with Jest and Enzyme testing

## Setups to setup in your own project

### Setup NPM

```
npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer enzyme enzyme-to-json identity-obj-proxy react-addons-test-utils
``` 

### Create a `jest.json` file

```json
{
  "snapshotSerializers": [
    "<rootDir>\/node_modules\/enzyme-to-json\/serializer"
  ],
  "coveragePathIgnorePatterns": [
    "<rootDir>\/jspm_packages\/",
    "<rootDir>\/node_modules"
  ],
  "collectCoverageFrom": [
    "src\/**\/*.js"
  ],
  "transform": {
    ".*": ".\/node_modules\/babel-jest"
  },
  "testRegex": "src\/.*\\.test\\.js$",
  "rootDir": ".\/",
  "modulePaths": [
    ".\/"
  ],
  "moduleNameMapper": {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
    "fetcher!sofe": "<rootDir>\/__mocks__\/fetcher.mock.js"
  }
}
```

### Create a `.babelrc` file

```json
{
	"presets": ["es2015", "react", "stage-0"]
}
```

### Update package json with a test script

```js
{
  //...
  "scripts": {
    "test": "jest --coverage --config ./jest.json"
  }
  //...
}
```
