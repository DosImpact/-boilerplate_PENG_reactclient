import { gql } from "@apollo/client";
/**
 * @CREATE_POST - 글쓰기

 */

export const CREATE_POST = gql`
  mutation newPost(
    $caption: String!
    $location: String!
    $mytalent: String!
    $youtalent: String!
  ) {
    upload(
      caption: $caption
      location: $location
      mytalent: $mytalent
      youtalent: $youtalent
    ) {
      id
    }
  }
`;
