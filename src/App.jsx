import If from "./components/If";
import BookList from "./components/BookList";
import useOwnersBooks from "./hooks/useOwnersBooks";
import { GENDER } from "./constants";
import { useState } from "react";

export default function App() {
  const { data, loading, error } = useOwnersBooks();
  const [isHardcoverOnly, setIsHardcoverOnly] = useState(false);

  const handleOnClick = (value) => (e) => {
    e.preventDefault();
    setIsHardcoverOnly(value);
  }

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
          <BookList data={data} gender={GENDER.MALE} isHardcoverOnly={isHardcoverOnly} />
          <BookList data={data} gender={GENDER.FEMALE} isHardcoverOnly={isHardcoverOnly} />
        </div>
        <div id="filter-panel">
          <a href="#" onClick={handleOnClick(true)}>
            Hardcover only
          </a>
          <button onClick={handleOnClick(false)}>Get Books</button>
        </div>
      </If>
    </>
  );
}
