var test = require('tape-catch')
var mt = require('../index')

test('.h1() should prefix existing text with #', function (t) {
  var text = 'text'
  var header = mt.h1(text)
  t.equal(header, '# text')
  t.end()
})

test('.h1() should remove # prefix from header text', function (t) {
  var text = '# text'
  var unheaded = mt.h1(text)
  t.equal(unheaded, 'text')
  t.end()
})
