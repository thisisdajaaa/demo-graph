import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import queries from "../graphql/queries";
import BookDetail from "./BookDetail";

const BookList = () => {
  const { data, loading } = useQuery(queries.GET_BOOKS);
  const [selected, setSelected] = useState(null);

  const displayBooks = () => {
    if (loading) {
      return <div>Loading Data...</div>;
    } else {
      return data.books.map((book) => (
        <li key={book.id} onClick={(_e) => setSelected(book.id)}>
          {book.name}
        </li>
      ));
    }
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetail bookId={selected} />
    </div>
  );
};

export default BookList;
