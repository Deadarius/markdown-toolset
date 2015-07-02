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
    var lines = text.split('\n')
    for (var i = 0; i < lines.length; i++) {
      lines[i] = prefixOrUnprefix(lines[i], '* ')
    }
    return lines.join('\n')
  },
  ol: function (text) {
    var lines = text.split('\n')
    for (var i = 0; i < lines.length; i++) {
      var prefix = i + 1 + '. '
      lines[i] = prefixOrUnprefix(lines[i], prefix)
    }
    return lines.join('\n')
  },
  hr: function () {
    return '***\n'
  },
  code: function (text) {
    var lines = text.split('\n')
    for (var i = 0; i < lines.length; i++) {
      lines[i] = prefixOrUnprefix(lines[i], '    ')
    }
    return lines.join('\n')
  }
}
