module.exports = function surroundOrUnsurround (text, surrounder) {
  var len = surrounder.length

  var left = text.substring(0, len)
  var right = text.substring(text.length - len, text.length)

  var unsurroundLeft = left === surrounder
  var unsurroundRight = right === surrounder

  var sliceLeft = unsurroundLeft ? len : 0
  var sliceRight = text.length - (unsurroundRight ? len : 0)

  var unsurrounded = text.slice(sliceLeft, sliceRight)
  if (unsurroundLeft || unsurroundRight) {
    return unsurrounded
  }

  return surrounder + unsurrounded + surrounder
}
