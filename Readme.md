[![NPM version][npm-img]][npm-url]
[![Build status][travis-img]][travis-url]
[![Test coverage][coveralls-img]][coveralls-url]
[![License][license-img]][license-url]
[![Dependency status][david-img]][david-url]

Promise based template rendering using [consolidate.js](https://github.com/tj/consolidate.js).

### Options

- `map` an object mapping extension names to engine names [`{}`]
- `default` default extension name to use when missing [`html`]
- `cache` cached compiled functions [NODE_ENV !== 'development']

### Example

```js
let render = require('render-then');
let renderer = render('views', {
  map: {
    html: 'swig'
  }
});

renderer('user', {
  user: {
    name: 'haoxin'
  }
}).then(function(res) {
  console.log(res);
}).catch(function(err) {
  console.error(err);
});
```

### License
MIT

[npm-img]: https://img.shields.io/npm/v/render-then.svg?style=flat-square
[npm-url]: https://npmjs.org/package/render-then
[travis-img]: https://img.shields.io/travis/coderhaoxin/render-then.svg?style=flat-square
[travis-url]: https://travis-ci.org/coderhaoxin/render-then
[coveralls-img]: https://img.shields.io/coveralls/coderhaoxin/render-then.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/coderhaoxin/render-then?branch=master
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[david-img]: https://img.shields.io/david/coderhaoxin/render-then.svg?style=flat-square
[david-url]: https://david-dm.org/coderhaoxin/render-then
