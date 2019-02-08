const createClassName = (classes) => classes
  .filter((className) => className !== null)
  .join(' ')

export default createClassName