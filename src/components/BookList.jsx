import sortBooksByGender from "../services/dataService";
import If from "./If";

const BookList = ({ data, gender, isHardcoverOnly }) => {
  const books = sortBooksByGender(data, gender);
  const hasBooks = books?.length > 0;

  return (
    <div className="book-list">
      <h2 className="header">Books with {gender} Owners</h2>
      <If condition={hasBooks}>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.name}</li>
          ))}
        </ul>
      </If>

      <If condition={!hasBooks}>
        <p>There are no books</p>
      </If>
    </div>
  );
};

export default BookList;
