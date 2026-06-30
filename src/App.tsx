import If from "./components/If"
import BookList from "./components/BookList"
import useOwnersBooks from "./hooks/useOwnersBooks"
import { GENDER } from "./types"
import React, { useState } from "react"

const App = () => {
  const { owners, loading, error } = useOwnersBooks()
  const [isHardcoverOnly, setIsHardcoverOnly] = useState(false)

  const handleOnClick = (value: boolean) => (e: React.MouseEvent) => {
    e.preventDefault()
    setIsHardcoverOnly(value)
  }

  return (
    <>
      <If condition={loading}>
        <p>Loading...</p>
      </If>

      <If condition={!!error}>
        <p className="error">Error fetching data. Please try again later.</p>
      </If>

      <If condition={!loading && !error}>
        <div id="book-list-panel">
          <BookList owners={owners} gender={GENDER.MALE} isHardcoverOnly={isHardcoverOnly} />
          <BookList owners={owners} gender={GENDER.FEMALE} isHardcoverOnly={isHardcoverOnly} />
        </div>
        <div id="filter-panel">
          <a href="#" onClick={handleOnClick(true)}>
            Hardcover only
          </a>
          <button onClick={handleOnClick(false)}>Get Books</button>
        </div>
      </If>
    </>
  )
}

export default App
