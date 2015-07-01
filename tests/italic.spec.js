var test = require('tape-catch')
var mt = require('../index')

test('italic', function (suit) {
  suit.test('.italic() should surround clean string with *', function (t) {
    var text = 'text'
    var bolded = mt.italic(text)
    t.equal(bolded, '*text*')
    t.end()
  })

  suit.test('.italic() should unsurround italic string', function (t) {
    var text = '*text*'
    var bolded = mt.italic(text)
    t.equal(bolded, 'text')
    t.end()
  })
})
