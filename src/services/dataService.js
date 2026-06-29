import { BOOKTYPE, GENDER } from "../constants"

// function to group books by gender and sort them by name
const sortBooksByGender = (data, gender) => {
  return data
    .filter((author) => author.gender === gender)
    .reduce((books, author) => {
      if (!author.books?.length) return books
      books.push(...author.books)
      return books
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name))
}

// function to filter books by hardcover type
const filterBooksByHardcover = (books) => {
  return books.filter((book) => book.type === BOOKTYPE.HARDCOVER)
}

const sortBooksByGenderAndType = (data, gender, isHardcoverOnly) => {
  const books = sortBooksByGender(data, gender)
  return isHardcoverOnly ? filterBooksByHardcover(books) : books
}

export default sortBooksByGenderAndType
