var test = require('tape-catch')
var mt = require('../index')

test('bold', function (suit) {
  suit.test('.bold() should surround clean string with **', function (t) {
    var text = 'text'
    var bolded = mt.bold(text)
    t.equal(bolded, '**text**')
    t.end()
  })

  suit.test('.bold() should unsurround bold string', function (t) {
    var text = '**text**'
    var bolded = mt.bold(text)
    t.equal(bolded, 'text')
    t.end()
  })
})
