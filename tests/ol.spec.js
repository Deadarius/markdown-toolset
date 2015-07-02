var test = require('tape-catch')
var mt = require('../index')

test('.ol() should prepend each line of clean text with numbers from 1 to n', function (t) {
  var text = 'text line\ntext line 2\ntext line3'
  var olisted = mt.ol(text)
  t.equal(olisted, '\n1. text line\n2. text line 2\n3. text line3')
  t.end()
})

test('.ol() should remove numbers for each line if text is a list already', function (t) {
  var text = '1. text line\n2. text line 2\n3. text line 3'
  var olisted = mt.ol(text)
  t.equal(olisted, '\ntext line\ntext line 2\ntext line 3')
  t.end()
})
