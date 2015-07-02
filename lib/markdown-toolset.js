var surroundOrUnsurround = require('./surround-or-unsurround')
var prefixOrUnprefix = require('./prefix-or-unprefix')

module.exports = {
  bold: function (text) {
    return surroundOrUnsurround(text, '**')
  },
  italic: function (text) {
    return surroundOrUnsurround(text, '*')
  },
  h1: function (text) {
    return prefixOrUnprefix(text, '# ', true)
  },
  h2: function (text) {
    return prefixOrUnprefix(text, '## ', true)
  },
  h3: function (text) {
    return prefixOrUnprefix(text, '### ', true)
  },
  h4: function (text) {
    return prefixOrUnprefix(text, '#### ', true)
  },
  h5: function (text) {
    return prefixOrUnprefix(text, '##### ', true)
  },
  h6: function (text) {
    return prefixOrUnprefix(text, '###### ', true)
  },
  ul: function (text) {
    return text
  },
  ol: function (text) {
    return text
  },
  hr: function () {
    return ''
  },
  code: function (text) {
    return text
  }
}
