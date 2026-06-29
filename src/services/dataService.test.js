import sortBooksByGenderAndType from "./dataService.js"
import { GENDER } from "../constants.js"

describe("sortBooksByGenderAndType", () => {
  const inputData = [
    {
      name: "Charles",
      gender: "Male",
      age: 23,
      books: [
        { name: "Hamlet", type: "Hardcover" },
        { name: "Wuthering Heights", type: "Paperback" },
      ],
    },
    {
      name: "Emily",
      gender: "Female",
      age: 18,
      books: [{ name: "Hamlet", type: "Paperback" }],
    },
    { name: "Jonathan", gender: "Male", age: 45, books: null },
    {
      name: "William",
      gender: "Male",
      age: 40,
      books: [
        { name: "React: The Ultimate Guide", type: "Hardcover" },
        { name: "Gulliver's Travels", type: "Hardcover" },
        { name: "Jane Eyre", type: "Paperback" },
        { name: "Great Expectations", type: "Hardcover" },
      ],
    },
    {
      name: "Charlotte",
      gender: "Female",
      age: 40,
      books: [{ name: "Great Expectations", type: "Hardcover" }],
    },
    {
      name: "Jane",
      gender: "Female",
      age: 64,
      books: [
        { name: "Little Red Riding Hood", type: "Hardcover" },
        { name: "The Hobbit", type: "Ebook" },
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
