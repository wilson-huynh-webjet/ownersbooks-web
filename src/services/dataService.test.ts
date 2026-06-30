import sortBooksByGenderAndType from "./dataService"
import { GENDER } from "../types"

describe("sortBooksByGenderAndType", () => {
  const inputData = [
    {
      name: "Charles",
      gender: "Male" as const,
      age: 23,
      books: [
        { name: "Hamlet", type: "Hardcover" as const },
        { name: "Wuthering Heights", type: "Paperback" as const },
      ],
    },
    {
      name: "Emily",
      gender: "Female" as const,
      age: 18,
      books: [{ name: "Hamlet", type: "Paperback" as const }],
    },
    { name: "Jonathan", gender: "Male" as const, age: 45, books: null },
    {
      name: "William",
      gender: "Male" as const,
      age: 40,
      books: [
        { name: "React: The Ultimate Guide", type: "Hardcover" as const },
        { name: "Gulliver's Travels", type: "Hardcover" as const },
        { name: "Jane Eyre", type: "Paperback" as const },
        { name: "Great Expectations", type: "Hardcover" as const },
      ],
    },
    {
      name: "Charlotte",
      gender: "Female" as const,
      age: 40,
      books: [{ name: "Great Expectations", type: "Hardcover" as const }],
    },
    {
      name: "Jane",
      gender: "Female" as const,
      age: 64,
      books: [
        { name: "Little Red Riding Hood", type: "Hardcover" as const },
        { name: "The Hobbit", type: "Ebook" as const },
      ],
    },
  ]

  it("converts inputData to expected output book list sorted by name", () => {
    expect(sortBooksByGenderAndType(inputData, GENDER.MALE)).toEqual([
      { name: "Great Expectations", type: "Hardcover" },
      { name: "Gulliver's Travels", type: "Hardcover" },
      { name: "Hamlet", type: "Hardcover" },
      { name: "Jane Eyre", type: "Paperback" },
      { name: "React: The Ultimate Guide", type: "Hardcover" },
      { name: "Wuthering Heights", type: "Paperback" },
    ])

    expect(sortBooksByGenderAndType(inputData, GENDER.FEMALE)).toEqual([
      { name: "Great Expectations", type: "Hardcover" },
      { name: "Hamlet", type: "Paperback" },
      { name: "Little Red Riding Hood", type: "Hardcover" },
      { name: "The Hobbit", type: "Ebook" },
    ])
  })

  it("converts inputData to expected output book list with Hardcover type only", () => {
    expect(sortBooksByGenderAndType(inputData, GENDER.MALE, true)).toEqual([
      { name: "Great Expectations", type: "Hardcover" },
      { name: "Gulliver's Travels", type: "Hardcover" },
      { name: "Hamlet", type: "Hardcover" },
      { name: "React: The Ultimate Guide", type: "Hardcover" },
    ])

    expect(sortBooksByGenderAndType(inputData, GENDER.FEMALE, true)).toEqual([
      { name: "Great Expectations", type: "Hardcover" },
      { name: "Little Red Riding Hood", type: "Hardcover" },
    ])
  })
})
