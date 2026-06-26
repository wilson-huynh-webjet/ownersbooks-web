const BookList = ({ data, gender, isHardcoverOnly }) => {
  return (
    <div className="book-list">
      <h2 className="header">Books with {gender} Owners</h2>
      <div>
        {/* { JSON.stringify(data) } */}
      </div>
    </div>
  );
};

export default BookList;
