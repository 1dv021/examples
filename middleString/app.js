'use strict'

const stringUtils = require('./src/stringUtils')

console.log('\'\' -> \'' + stringUtils.getMiddleString('') + '\'')
console.log('\'a\' -> \'' + stringUtils.getMiddleString('a') + '\'')
console.log('\'ab\' -> \'' + stringUtils.getMiddleString('ab') + '\'')
console.log('\'abc\' -> \'' + stringUtils.getMiddleString('abc') + '\'')
console.log('\'abcd\' -> \'' + stringUtils.getMiddleString('abcd') + '\'')
console.log('\'abcde\' -> \'' + stringUtils.getMiddleString('abcde') + '\'')
console.log('\'abcdef\' -> \'' + stringUtils.getMiddleString('abcdef') + '\'')
