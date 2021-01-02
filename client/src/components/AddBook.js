import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import queries from "../graphql/queries";
import mutations from "../graphql/mutations";

const AddBook = () => {
  const { data, loading } = useQuery(queries.GET_AUTHORS);

  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const [addBook] = useMutation(mutations.ADD_BOOK, {
    variables: {
      name: formData.name,
      genre: formData.genre,
      authorId: formData.authorId,
    },
    refetchQueries: [{ query: queries.GET_BOOKS }],
  });

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Data...</option>;
    } else {
      return data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  const handleChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    addBook();
  };

  return (
    <form id="add-book" onSubmit={handleSubmmit}>
      <div className="field">
        <label>Book name: </label>
        <input type="text" onChange={(e) => handleChange(e, "name")} />
      </div>

      <div className="field">
        <label>Genre: </label>
        <input type="text" onChange={(e) => handleChange(e, "genre")} />
      </div>

      <div className="field">
        <label>Author: </label>
        <select onChange={(e) => handleChange(e, "authorId")}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
