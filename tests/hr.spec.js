var test = require('tape-catch')
var mt = require('../index')

test('.hr() should generate horizontal ruler', function (t) {
  var ruler = mt.hr()
  t.equal(ruler, '***\n')
  t.end()
})
