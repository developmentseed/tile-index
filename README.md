[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A skeleton JavaScript project using a common toolset

## Features

-   [eslint](http://eslint.org/) is used to keep code clean
-   [tap](https://www.npmjs.com/package/tap) is used for testing and code coverage
-   [retire](https://blog.liftsecurity.io/2014/11/19/bower-components-with-known-vulnerabilities) is used to check for vulnerable modules
-   [documentation.js](http://documentation.js.org/) is used to generate documentation

## Usage

In a new directory, optionally run `git init` and set up a remote, and then:

    curl -o- https://raw.githubusercontent.com/anandthakker/jsskel/master/bootstrap.sh | bash

The following npm scripts are provided by package.json:

-   `npm run retire`: Check for vulnerable modules (run automatically as part of `npm test`)
-   `npm run lint`: Run linting (run automatically as part of `npm test`)
-   `npm run docs`: Generate documentation from JSDoc comments, and inject them into the README (this file), replacing the `## API` section.

Feel free to adjust any of the defaults to taste after creating a new module.

## API

### square

Documentation for this function.


**Parameters**

-   `x` **number** an input



**Examples**

```javascript
var square = require('square')
square(5)
```



Returns **number** the output



