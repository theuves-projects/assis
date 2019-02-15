function cml(text, options) {
  if (typeof text !== 'string') {
    throw new TypeError('\'text\' must be a string')
  }
  if (!Array.isArray(options)) {
    throw new TypeError('\'options\' must be an array')
  }

  for (let index in options) {
    const option = options[index]

    if (typeof option !== 'object') {
      throw new TypeError('\'options\' must be an array of object')
    }

    const { tokenStart, replacerStart, tokenEnd, replacerEnd } = option

    if (!tokenStart) throw new Error('\'tokenStart\' was not defined')
    if (!replacerStart) throw new Error('\'replacerStart\' was not defined')
    if (!tokenEnd) throw new Error('\'tokenEnd\' was not defined')
    if (!replacerEnd) throw new Error('\'replacerEnd\' was not defined')

    if (typeof tokenStart !== 'string') {
      throw new Error('\'tokenStart\' must be a string')
    }
    if (typeof replacerStart !== 'string') {
      throw new Error('\'replacerStart\' must be a string')
    }
    if (typeof tokenEnd !== 'string') {
      throw new Error('\'tokenEnd\' must be a string')
    }
    if (typeof replacerEnd !== 'string') {
      throw new Error('\'replacerEnd\' must be a string')
    }

    while (RegExp(tokenStart).test(text) || RegExp(tokenEnd).test(text)) {
      text = text
        .replace(tokenStart, replacerStart)
        .replace(tokenEnd, replacerEnd)
    }
  }

  return text
}

export default cml