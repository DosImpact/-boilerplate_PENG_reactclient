import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaKaggle } from "react-icons/fa";

import Button from "components/Button";
import Input from "components/Input";
import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "styled-components";
import useInput from "Hooks/useInput";

function Auth() {
  const actionType = { login: "login", signUp: "signUp", confirm: "confirm" };
  const [action, setAction] = useState(actionType.login);

  const name = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const bio = useInput("");
  const secret = useInput("");

  const handleLoginToConfirm = (e) => {
    e.preventDefault();
  };

  const handleConfirmToHome = (e) => {
    e.preventDefault();
  };

  const handleTosignUp = (e) => {
    e.preventDefault();
  };

  return (
    <AuthContainer className="outterContainer">
      <div className="innerContainer">
        <div className="innerWrapper">
          <div className="auth">
            {action === actionType.login && (
              <div className="authWrapper">
                <div className="auth__login title01">로그인</div>
                <form className="auth__loginFrom">
                  <Input
                    {...email}
                    className="auth__loginInput title01"
                    placeholder="이메일을 입력해주세요."
                  ></Input>
                  <Button className="auth__loginButton blueBG" type="submit">
                    <span className="title01">로그인</span>
                  </Button>
                </form>
                <div>
                  <Button className="auth__loginButton " type="submit">
                    <FaGoogle style={{ marginRight: 10, fontSize: 18 }} />
                    <span className="title01 black">구글로 로그인</span>
                  </Button>
                  <Button className="auth__loginButton facebookBG">
                    <FaFacebook style={{ marginRight: 10, fontSize: 18 }} />
                    <span className="title01">페이스북으로 로그인</span>
                  </Button>
                  <Button className="auth__loginButton kakaoBG" type="submit">
                    <FaKaggle style={{ marginRight: 10, fontSize: 18 }} />
                    <span className="title01">카카오 계정 로그인</span>
                  </Button>
                </div>
              </div>
            )}
            {action === actionType.confirm && (
              <div>
                <div className="auth__login title01">이메일 인증</div>
                <form className="auth__loginFrom">
                  <Input
                    {...secret}
                    className="auth__loginInput title01"
                    placeholder="이메일을 확인해 주세요."
                  ></Input>
                  <Button className="auth__loginButton " type="submit">
                    <span className="title01">인증 하기</span>
                  </Button>
                </form>
              </div>
            )}
            {action === actionType.signUp && (
              <div>
                <div className="auth__login title01">회원 가입</div>
                <form className="auth__loginFrom">
                  <Input
                    {...name}
                    className="auth__loginInput title01"
                    placeholder="이름"
                  ></Input>
                  <Input
                    {...email}
                    className="auth__loginInput title01"
                    placeholder="이메일"
                  ></Input>
                  <Input
                    {...firstName}
                    className="auth__loginInput title01"
                    placeholder="성"
                  ></Input>
                  <Input
                    {...lastName}
                    className="auth__loginInput title01"
                    placeholder="이름"
                  ></Input>
                  <Input
                    {...bio}
                    className="auth__loginInput title01"
                    placeholder="성별"
                  ></Input>
                  <Button className="auth__loginButton " type="submit">
                    <span className="title01">가입 하기</span>
                  </Button>
                </form>
              </div>
            )}
          </div>

          <div className="stateChanger">
            {action === actionType.login && (
              <>
                <div className="forget__change">
                  <div
                    className="signUp__button title04 blue"
                    onClick={() => setAction(actionType.confirm)}
                  ></div>
                </div>
                <div className="signUp__change">
                  <div className="signUp__changeContent">
                    <div className="title04">아직 회원이 아니세요?</div>
                    <div
                      className="signUp__button title01 blue"
                      onClick={() => setAction(actionType.signUp)}
                    >
                      회원가입
                    </div>
                  </div>
                </div>
              </>
            )}
            {action === actionType.confirm && (
              <>
                <div className="forget__change"></div>
                <div className="signUp__change">
                  <div className="signUp__changeContent">
                    <div className="title04">이메일 인증이 안되나요?</div>
                    <div
                      className="signUp__button title01 blue"
                      onClick={() => setAction(actionType.login)}
                    >
                      첫화면
                    </div>
                  </div>
                </div>
              </>
            )}
            {action === actionType.signUp && (
              <>
                <div className="forget__change"></div>
                <div className="signUp__change">
                  <div className="signUp__changeContent">
                    <div className="title04"> 이미 회원인가요? </div>
                    <div
                      className="signUp__button title01 blue"
                      onClick={() => setAction(actionType.login)}
                    >
                      로그인 화면
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
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

const AuthContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0px auto;

  display: flex;
  justify-content: center;

  & .innerContainer {
    width: 535px;
    background-color: ${(props) => props.theme.whiteColor};
  }

  & .innerWrapper {
    padding: 40px 40px 60px 40px;
  }

  & .auth {
    & .auth__login {
    }

    & .auth__loginFrom {
      margin-top: 20px;
      width: 100%;
    }

    & .auth__loginInput {
      background-color: ${(props) => props.theme.whiteColor};
    }

    & .auth__loginButton {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & button,
    input {
      margin-top: 20px;
      width: 100%;
      height: 50px;
    }
  }
  & .stateChanger {
    margin-top: 20px;
    & .forget__change {
      margin-top: 20px;
    }

    & .signUp__change {
      margin-top: 40px;
      height: auto;
    }

    & .signUp__button {
      padding-left: 5px;
      cursor: pointer;
    }

    & .signUp__changeContent {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
