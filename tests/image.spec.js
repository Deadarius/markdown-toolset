var test = require('tape-catch')
var mt = require('../index')

test('.image() should return properly formatted image element', function (t) {
  var text = 'text'
  var src = 'http://www.url.com/kitty.png'

  var imaged = mt.image(src, text)
  t.equal(imaged, '![text](http://www.url.com/kitty.png)')
  t.end()
})
