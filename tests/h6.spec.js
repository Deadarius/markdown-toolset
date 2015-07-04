var test = require('tape-catch')
var mt = require('../index')

test('.h6() should prefix existing text with #', function (t) {
  var text = 'text'
  var header = mt.h6(text)
  t.equal(header, '###### text')
  t.end()
})

test('.h6() should remove ###### prefix from header text', function (t) {
  var text = '###### text'
  var unheaded = mt.h6(text)
  t.equal(unheaded, 'text')
  t.end()
})
