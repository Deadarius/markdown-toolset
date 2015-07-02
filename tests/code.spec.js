var test = require('tape-catch')
var mt = require('../index')

test('.code() should indent text with 4 spaces', function (t) {
  var text = 'text line\ntext line 2\ntext line3'
  var coded = mt.code(text)
  t.equal(coded, '    text line\n    text line 2\n    text line3')
  t.end()
})

test('.code() should unindent 4 spaces', function (t) {
  var text = '    text line\n    text line 2\n    text line3'
  var coded = mt.code(text)
  t.equal(coded, 'text line\ntext line 2\ntext line3')
  t.end()
})
