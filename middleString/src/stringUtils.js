'use strict'

/**
 * Returns the middle of a string.
 * @param {string} text The string to get the middle of.
 * @return {string} One or two characters in the middle of the specified string.
 */
function getMiddleString (text) {
  const middleIndex = Math.floor(text.length / 2)

  // ALTERNATIVE #1 - en mindre bra "lösning" som inte fungerar om parametern är en tomsträng.
  // let middle
  // if (text.length % 2 === 1) {
  //   middle = text[middleIndex]
  // } else {
  //   middle = text[middleIndex - 1] + text[middleIndex]
  // }
  // return middle

  // ALTERNATIVE #2
  // let middle = text.charAt(middleIndex)
  // if (text.length % 2 === 0) {
  //   middle = text.charAt(middleIndex - 1) + middle
  // }
  // return middle

  // ALTERNATIVE #3
  if (text.length % 2 === 1) {
    return text.charAt(middleIndex)
  } else {
    return text.substr(middleIndex - 1, 2)
  }
}

module.exports.getMiddleString = getMiddleString
