import { gql } from "@apollo/client";

const mutations = {
  ADD_BOOK: gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
      addBook(name: $name, genre: $genre, authorId: $authorId) {
        name
        id
      }
    }
  `,
};

export default mutations;
