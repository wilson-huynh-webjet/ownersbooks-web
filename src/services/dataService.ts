import { BOOKTYPE, type Gender } from "../types"
import type { Book, Owner } from "../types"

const sortBooksByGender = (owners: Owner[], gender: Gender): Book[] => {
  return owners
    .filter((owner) => owner.gender === gender)
    .reduce<Book[]>((books, owner) => {
      if (Array.isArray(owner.books)) {
        books.push(...owner.books)
      }

      return books
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name))
}

const filterBooksByHardcover = (books: Book[]): Book[] => {
  return books.filter((book) => book.type === BOOKTYPE.HARDCOVER)
}

const sortBooksByGenderAndType = (
  owners: Owner[],
  gender: Gender,
  isHardcoverOnly?: boolean,
): Book[] => {
  const books = sortBooksByGender(owners, gender)
  return isHardcoverOnly ? filterBooksByHardcover(books) : books
}

export default sortBooksByGenderAndType
