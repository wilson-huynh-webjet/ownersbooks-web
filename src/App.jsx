import If from "./components/If";
import BookList from "./components/BookList";
import useOwnersBooks from "./hooks/useOwnersBooks";
import { GENDER } from "./constants";

export default function App() {
  const { data, loading, error } = useOwnersBooks();

  return (
    <>
      <If condition={loading}>
        <p>Loading...</p>
      </If>

      <If condition={error}>
        <p className="error">
          Error fetching data. Please try again later.
        </p>
      </If>

      <If condition={!loading && !error}>
        <div id="book-list-panel">
          <BookList data={data} gender={GENDER.MALE} />
          <BookList data={data} gender={GENDER.FEMALE} />
        </div>
        <div id="filter-panel">
          <a href="#">Hardcover only</a>
          <button>Get Books</button>
        </div>
      </If>
    </>
  );
}
