module.exports = function prefixOrUnprefix (text, prefix, needNewline) {
  var len = prefix.length
  if (text.length > len && text.substring(0, len) === prefix) {
    return text.slice(len, text.length)
  }

  var res = prefix + text

  if (needNewline) {
    if (res.slice(res.length - 1, res.length) !== '\n') {
      return res + '\n'
    }
  }

  return res
}
