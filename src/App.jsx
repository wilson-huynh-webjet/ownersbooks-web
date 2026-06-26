import BookList from "./components/BookList";

export default function App() {
  return (
    <>
      <div id="book-list-panel">
        <BookList />
        <BookList />
      </div>
      <div id="filter-panel">
        <a href="#">Hardcover only</a>
        <button>Get Books</button>
      </div>
    </>
  );
}
