var test = require('tape-catch')
var mt = require('../index')

test('.ul() should prepend each line of clean text with *', function (t) {
  var text = 'text line\ntext line 2\ntext line3'
  var ulisted = mt.ul(text)
  t.equal(ulisted, '* text line\n* text line 2\n* text line3')
  t.end()
})

test('.ul() should remove * for each line if text is a list already', function (t) {
  var text = '* text line\n* text line 2\n* text line3'
  var ulisted = mt.ul(text)
  t.equal(ulisted, 'text line\ntext line 2\ntext line3')
  t.end()
})
