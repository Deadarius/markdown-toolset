var surroundOrUnsurround = require('./surround-or-unsurround')
module.exports = {
  bold: function (text) {
    return surroundOrUnsurround(text, '**')
  },
  italic: function (text) {
    return surroundOrUnsurround(text, '*')
  }
}
