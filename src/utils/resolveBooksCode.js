const resolveBooksCode = (data=[], bookCode, action) => {
  data = [...data]

  switch (action) {
    case 'add':
      return !data.includes(bookCode) ? data.concat(bookCode) : data
    case 'remove':
      return data.filter((bookCode_) => bookCode_ !== bookCode)
    default:
      return data
  }
}

export default resolveBooksCode