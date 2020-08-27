import { gql } from "@apollo/client";

/**
 * @좋아요기능
 * @댓글기능
 * @Save기능(임시)
 */

export const TOGGLE_LIKE = gql`
  mutation toggelLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
    }
  }
`;
export const DELETE_POST = gql`
  mutation deletePost($action: ACTIONS!, $postId: String!) {
    editPost(action: $action, id: $postId) {
      id
    }
  }
`;
