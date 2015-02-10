'use strict';

// tests only for iojs

let assert = require('assert');
let equal = assert.strictEqual;
let render = require('..');

describe('## render', function() {
  describe('# renderer', function() {
    let renderer = render(__dirname + '/views', {
      map: {
        html: 'swig'
      }
    });

    let user = {
      name: 'haoxin',
      species: 'coder'
    };

    it('renderer(user)', function(done) {
      renderer('user', {
        user: user
      }).then(function(res) {
        equal(res, '<p>haoxin is a coder</p>\n');
        done();
      }).catch(function(err) {
        done(err);
      });
    });

    it('renderer(user.jade)', function(done) {
      renderer('user.jade', {
        user: user
      }).then(function(res) {
        equal(res, '<p>haoxin is a coder</p>');
        done();
      }).catch(function(err) {
        done(err);
      });
    });

    it('renderer(user.ejs)', function(done) {
      renderer('user.ejs', {
        user: user
      }).then(function(res) {
        equal(res, '<p>haoxin is a coder</p>');
        done();
      }).catch(function(err) {
        done(err);
      });
    });
  });
});
