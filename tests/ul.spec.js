var test = require('tape-catch')
var mt = require('../index')

test('ul', function (suit) {
  suit.test('.ul() should prepend each line of clean text with *', function (t) {
    var text = '\ntext line \ntext line 2\ntext line3\n'
    var ulisted = mt.ul(text)
    t.equal(ulisted, '\n* text line \n* text line 2\n* text line3')
    t.end()
  })

  suit.test('.ul() should prepend a newline at the begining if there is none', function (t) {
    var text = 'text line \ntext line 2\ntext line3'
    var ulisted = mt.ul(text)
    t.equal(ulisted, '\n* text line \n* text line 2\n* text line3\n')
    t.end()
  })

  suit.test('.ul() should append a newline at the end if there is none', function (t) {
    var text = '\ntext line \ntext line 2\ntext line3'
    var ulisted = mt.ul(text)
    t.equal(ulisted, '\n* text line \n* text line 2\n* text line3\n')
    t.end()
  })

  suit.test('.ul() should remove * for each line if text is a list already', function (t) {
    var text = '\n* text line \n* text line 2\n* text line3\n'
    var ulisted = mt.ul(text)
    t.equal(ulisted, '\ntext line \ntext line 2\ntext line3\n')
    t.end()
  })
})
