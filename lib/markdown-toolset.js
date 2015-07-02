var surroundOrUnsurround = require('./surround-or-unsurround')
module.exports = {
  bold: function (text) {
    return surroundOrUnsurround(text, '**')
  },
  italic: function (text) {
    return surroundOrUnsurround(text, '*')
  },
  h1: function (text) {
    return text
  },
  h2: function (text) {
    return text
  },
  h3: function (text) {
    return text
  },
  h4: function (text) {
    return text
  },
  h5: function (text) {
    return text
  },
  h6: function (text) {
    return text
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
