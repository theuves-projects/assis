/**
 * Verificar se dois valores são diferentes.
 *
 * @param {*} value Um valor qualquer.
 * @returns {Function} Uma função que recebe outro valor para verificação.
 * @example
 * isNotEqual(42)(743) // true
 * isNotEqual(42)(42) // false
 */
const isNotEqual = (value) => {
  return (otherValue) => {
    return value !== otherValue
  }
}

/**
 * Resolver uma lista com códigos de livros.
 *
 * @param {Array} data Uma lista com códigos de livros.
 * @param {number} bookCode O código de um livro.
 * @param {boolean} isAdding Se está adicionando um código ou removendo.
 * @returns {Array} Nova lista de código de livros.
 */
const resolveBooksCode = (data=[], bookCode, isAdding) => {
  data = [...data]

  return isAdding
    ? (!data.includes(bookCode) ? data.concat(bookCode) : data)
    : data.filter(isNotEqual(bookCode))
}

export default resolveBooksCode