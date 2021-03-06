'use strict'

const assert = require('assert')
const { join } = require('path')

const render = require('..')

const equal = assert.strictEqual

describe('## render', function() {
  describe('# renderer', function() {
    let renderer = render(join(__dirname, '/views'), {
      map: {
        html: 'swig'
      }
    })

    let user = {
      name: 'haoxin',
      species: 'coder'
    }

    it('renderer(user)', function(done) {
      renderer('user', {
        user: user
      }).then(function(res) {
        equal(res, '<p>haoxin is a coder</p>\n')
        done()
      }).catch(function(err) {
        done(err)
      })
    })

    it('renderer(user.jade)', function(done) {
      renderer('user.jade', {
        user: user
      }).then(function(res) {
        equal(res, '<p>haoxin is a coder</p>')
        done()
      }).catch(function(err) {
        done(err)
      })
    })

    it('renderer(user.ejs)', function(done) {
      renderer('user.ejs', {
        user: user
      }).then(function(res) {
        equal(res, '<p>haoxin is a coder</p>\n')
        done()
      }).catch(function(err) {
        done(err)
      })
    })
  })
})
