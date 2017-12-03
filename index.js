'use strict'

const consolidate = require('consolidate')
const path = require('path')

const { extname, join } = path

const env = process.env.NODE_ENV || 'development'

/**
 * Pass views `dir` and `opts` to return
 * a render function.
 *
 *  - `map` an object mapping extnames to engine names [{}]
 *  - `default` default extname to use when missing [html]
 *  - `cache` cached compiled functions [NODE_ENV != 'development']
 *
 * @param {String} [dir]
 * @param {Object} [opts]
 * @return {Function}
 * @api public
 */

module.exports = function(dir, opts) {
  opts = opts || {}

  // view directory
  dir = dir || 'views'

  // default extname
  var ext = opts.ext || opts.default || 'html'

  // engine map
  var map = opts.map || {}

  // cache compiled templates
  var cache = opts.cache ? !!opts.cache : env !== 'development'

  return function(view, locals) {
    locals = locals || {}

    // default extname
    var e = extname(view)

    if (!e) {
      e = '.' + ext
      view += e
    }

    // remove leading '.'
    e = e.slice(1)

    // map engine
    locals.engine = map[e] || e

    // resolve
    view = join(dir, view)

    // cache
    locals.cache = cache

    return render(view, locals)
  }
}

/**
 * Render `view` path with optional local variables / options.
 *
 * @param {String} view path
 * @param {Object} [opts]
 * @return {Promise}
 * @api public
 */

function render(view, opts) {
  opts = opts || {}
  var ext = opts.engine || extname(view).slice(1)
  var engine = consolidate[ext]

  return new Promise(function(resolve, reject) {
    engine(view, opts, function(err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}
