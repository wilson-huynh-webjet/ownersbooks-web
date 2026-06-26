import { GENDER } from "../constants";

// function to group books by gender and sort them by name
const sortBooksByGender = (data, gender) => {
  return data
    .filter((author) => author.gender === gender)
    .reduce((books, author) => {
      if (!author.books?.length) return books;
      books.push(...author.books);
      return books;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));
};

export default sortBooksByGender;
