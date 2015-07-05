var test = require('tape-catch')
var mt = require('../index')

test('.link() should return properly formatted link', function (t) {
  var text = 'text'
  var url = 'http://www.url.com'

  var linked = mt.link(text, url)
  t.equal(linked, '[text](http://www.url.com)')
  t.end()
})
