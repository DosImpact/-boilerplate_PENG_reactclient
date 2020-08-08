import { gql } from "@apollo/client";
/**
 * @CREATE_ACCOUNT - 회원 가입 화면 > 로그인 화면
 * @REQUEST_SECRET - 로그인 화면
 * @CONFIRM_SECRET - 인증 화면 -> push("/")
 */

export const CREATE_ACCOUNT = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $firstName: String
    $lastName: String
    $bio: String
  ) {
    createAccount(
      name: $name
      email: $email
      firstName: $firstName
      lastName: $lastName
      bio: $bio
    )
  }
`;

export const REQUEST_SECRET = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($secret: String!, $email: String!) {
    confirmSecret(secret: $secret, email: $email)
  }
`;
