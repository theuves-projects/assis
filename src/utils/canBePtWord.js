const canBePtWord = (str) => {
  if (typeof str !== 'string') return
  return /^[\wáéíóúâêôãõàüç-]+$/.test(str.toLowerCase().trim())
}

export default canBePtWord