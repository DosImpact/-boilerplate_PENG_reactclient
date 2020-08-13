import { gql } from "@apollo/client";
/**
 * @CREATE_POST - 글쓰기

 */

export const SEARCH_POST = gql`
  query searchPost($term: String!) {
    searchPost(term: $term) {
      id
      location
      caption
      mytalent
      youtalent
      user {
        id
        avatar
        name
      }
    }
  }
`;
