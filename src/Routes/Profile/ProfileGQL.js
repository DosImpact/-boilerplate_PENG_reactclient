import { gql } from "@apollo/client";
/**
 * @EDIT_USER
 * @GET_USER
 */

export const EDIT_USER = gql`
  mutation editUser(
    $name: String
    $email: String
    $firstName: String
    $lastName: String
    $bio: String
    $avatar: String
  ) {
    editUser(
      name: $name
      email: $email
      firstName: $firstName
      lastName: $lastName
      bio: $bio
      avatar: $avatar
    )
  }
`;
export const GET_USER = gql`
  query seeUser($name: String!) {
    seeUser(name: $name) {
      id
      avatar
      name
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      email
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;
