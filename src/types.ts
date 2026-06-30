export const GENDER = {
  MALE: "Male",
  FEMALE: "Female",
} as const

export const BOOKTYPE = {
  HARDCOVER: "Hardcover",
  PAPERBACK: "Paperback",
  EBOOK: "Ebook",
} as const


// "Male" | "Female"
export type Gender = (typeof GENDER)[keyof typeof GENDER] 

// "Hardcover" | "Paperback" | "Ebook"
export type BookType = (typeof BOOKTYPE)[keyof typeof BOOKTYPE]

export interface Book {
  name: string
  type: BookType
}

export interface Owner {
  name: string
  gender: Gender
  age: number
  books: Book[] | null
}
