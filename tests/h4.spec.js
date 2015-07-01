var test = require('tape-catch')
var mt = require('../index')

test('h4', function (suit) {
  suit.test('.h4() should prefix existing text with # and suffix with new line', function (t) {
    var text = 'text'
    var header = mt.h4(text)
    t.equal(header, '#### text\n')
    t.end()
  })

  suit.test('.h4() should not add another newline if text has one already', function (t) {
    var text = 'text\n'
    var header = mt.h4(text)
    t.equal(header, '#### text\n')
    t.end()
  })

  suit.test('.h4() should remove # prefix from header text without newline and newline should not be added', function (t) {
    var text = '#### text'
    var unheaded = mt.h4(text)
    t.equal(unheaded, 'text')
    t.end()
  })

  suit.test('h4() should remove # prefix from header text with newline but newline should be kept', function (t) {
    var text = '#### text\n'
    var unheaded = mt.h4(text)
    t.equal(unheaded, 'text\n')
    t.end()
  })
})
