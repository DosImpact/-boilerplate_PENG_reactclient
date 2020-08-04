import React, { useState } from "react";

import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "styled-components";
import useInput from "Hooks/useInput";

function Auth() {
  const actionType = { login: "login", signUp: "singUp", confirm: "confirm" };
  const [action, setAction] = useState(actionType.signUp);

  const name = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const bio = useInput("");
  const secret = useInput("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <AuthContainer>
      <div>
        {action === actionType.login && (
          <>
            <div>login</div>
            <form>
              <input {...email} placeholder="email"></input>
              <button type="submit">로그인 하기</button>
            </form>
          </>
        )}
        {action === actionType.confirm && (
          <>
            <div>confirm</div>
            <form>
              <input {...name} placeholder="name"></input>
              <button type="submit">이메일 인증</button>
            </form>
          </>
        )}
        {action === actionType.signUp && (
          <>
            <div>signUp</div>
            <form>
              <input {...name} placeholder="name"></input>
              <input {...email} placeholder="email"></input>
              <input {...firstName} placeholder="firstName"></input>
              <input {...lastName} placeholder="lastName"></input>
              <input {...bio} placeholder="bio"></input>
              <button type="submit" onClick={(e) => handleLogin(e)}>
                가입 하기
              </button>
            </form>
          </>
        )}
      </div>
    </AuthContainer>
  );
}

export default Auth;

const CREATE_ACOUNTER = gql`
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

const AuthContainer = styled.div``;
