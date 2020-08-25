import { gql } from "@apollo/client";
/**
 * @CREATE_POST - 글쓰기

 */

export const DETAIL_POST = gql`
  query DetailPost($id: String!) {
    seeFullPost(id: $id) {
      id
      location
      caption
      mytalent
      youtalent
      content
      user {
        id
        avatar
        name
        email
      }
      likeCount
      isLiked
      commentCount
      comments {
        id
        text
        user {
          name
        }
        createdAt
      }
      createdAt
    }
  }
`;
