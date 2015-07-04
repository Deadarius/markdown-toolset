var test = require('tape-catch')
var mt = require('../index')

test('.header() should turn text into h1 if text is not a header already', function (t) {
  var text = 'text'
  var header = mt.header(text)
  t.equal(header, '# text')
  t.end()
})

test('.header() should turn text into h2 if text is h1', function (t) {
  var text = '# text'
  var header = mt.header(text)
  t.equal(header, '## text')
  t.end()
})

test('.header() should turn text into h3 if text is h2', function (t) {
  var text = '## text'
  var header = mt.header(text)
  t.equal(header, '### text')
  t.end()
})

test('.header() should turn text into h4 if text is h3', function (t) {
  var text = '### text'
  var header = mt.header(text)
  t.equal(header, '#### text')
  t.end()
})

test('.header() should turn text into h5 if text is h4', function (t) {
  var text = '#### text'
  var header = mt.header(text)
  t.equal(header, '##### text')
  t.end()
})

test('.header() should turn text into h6 if text is h5', function (t) {
  var text = '##### text'
  var header = mt.header(text)
  t.equal(header, '###### text')
  t.end()
})

test('.header() should remove header if text is h6', function (t) {
  var text = '###### text'
  var header = mt.header(text)
  t.equal(header, 'text')
  t.end()
})
