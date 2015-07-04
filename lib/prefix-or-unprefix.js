module.exports = function prefixOrUnprefix (text, prefix) {
  var len = prefix.length
  if (text.length > len && text.substring(0, len) === prefix) {
    return text.slice(len, text.length)
  }

  var res = prefix + text

  return res
}
