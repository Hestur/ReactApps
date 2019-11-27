import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { BookContext } from "../Contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext);
  return (
    <div
      className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
          {books.map(book => {
            return(
                <li key={book.id} style={{ background: theme.ui }}>{ book.title}</li>
            )
          })}
      </ul>
    </div>
  );
};

export default BookList;
