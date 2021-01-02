import React from "react";
import { useQuery } from "@apollo/client";

import queries from "../graphql/queries";

const BookDetail = ({ bookId }) => {
  const { data, loading } = useQuery(queries.GET_BOOK, {
    variables: { id: bookId },
  });

  const displaybookDetails = () => {
    if (loading) return <div>Loading Data...</div>;

    if (data.book) {
      return (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All data.books by this author:</p>
          <ul className="other-books">
            {console.log(data.book.author)}
            {data.book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };

  return <div id="book-details">{displaybookDetails()}</div>;
};

export default BookDetail;
