import { gql } from "@apollo/client";

const queries = {
  GET_BOOKS: gql`
    query {
      books {
        id
        name
      }
    }
  `,
  GET_AUTHORS: gql`
    query {
      authors {
        id
        name
      }
    }
  `,
  GET_BOOK: gql`
    query($id: ID) {
      book(id: $id) {
        id
        name
        genre
        author {
          id
          name
          age
          books {
            name
            id
          }
        }
      }
    }
  `,
};

export default queries;
