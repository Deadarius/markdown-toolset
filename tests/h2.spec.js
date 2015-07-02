var test = require('tape-catch')
var mt = require('../index')

test('.h2() should prefix existing text with ## and suffix with new line', function (t) {
  var text = 'text'
  var header = mt.h2(text)
  t.equal(header, '## text\n')
  t.end()
})

test('.h2() should not add another newline if text has one already', function (t) {
  var text = 'text\n'
  var header = mt.h2(text)
  t.equal(header, '## text\n')
  t.end()
})

test('.h2() should remove # prefix from header text without newline and newline should not be added', function (t) {
  var text = '## text'
  var unheaded = mt.h2(text)
  t.equal(unheaded, 'text')
  t.end()
})

test('.h2() should remove # prefix from header text with newline but newline should be kept', function (t) {
  var text = '## text\n'
  var unheaded = mt.h2(text)
  t.equal(unheaded, 'text\n')
  t.end()
})
