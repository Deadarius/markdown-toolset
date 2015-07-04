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
    return prefixOrUnprefix(text, '# ')
  },
  h2: function (text) {
    return prefixOrUnprefix(text, '## ')
  },
  h3: function (text) {
    return prefixOrUnprefix(text, '### ')
  },
  h4: function (text) {
    return prefixOrUnprefix(text, '#### ')
  },
  h5: function (text) {
    return prefixOrUnprefix(text, '##### ')
  },
  h6: function (text) {
    return prefixOrUnprefix(text, '###### ')
  },
  header: function (text) {
    var len = text.length
    if (len > 1 && text[0] === '#') {
      var hashes = 1
      var textUnheaded
      for (var i = 1; i < len && i < 7; i++) {
        if (text[i] === '#') {
          hashes++
        } else {
          textUnheaded = text.slice(hashes + 1, len)
          break
        }
      }
      hashes++
      if (hashes === 7) {
        return textUnheaded
      }
      var fnName = 'h' + hashes
      var fn = this[fnName]
      return fn(textUnheaded)
    } else {
      return this.h1(text)
    }
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
