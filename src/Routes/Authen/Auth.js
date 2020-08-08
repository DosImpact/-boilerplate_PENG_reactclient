import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaKaggle } from "react-icons/fa";

import Button from "components/Button";
import Input from "components/Input";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import useInput from "Hooks/useInput";
import { toast } from "react-toastify";

import { CONFIRM_SECRET, CREATE_ACCOUNT, REQUEST_SECRET } from "./AuthGQL";
import { useDispatch } from "react-redux";
import { logIn as actionLogin } from "_actions/log_actions";

function Auth(props) {
  const dispatch = useDispatch();
  const actionType = { login: "login", signUp: "signUp", confirm: "confirm" };
  const [action, setAction] = useState(actionType.login);

  const name = useInput("");
  const email = useInput("ypd03008@gmail.com");
  const firstName = useInput("");
  const lastName = useInput("");
  const bio = useInput("");
  const secret = useInput("");

  const [requestSecret] = useMutation(REQUEST_SECRET);
  const [confirmSecret] = useMutation(CONFIRM_SECRET);
  const [createAccount] = useMutation(CREATE_ACCOUNT);

  // 로그인 - 이메일 입력 - requestsecret - confirmsercret
  const handleLoginToConfirm = async (e) => {
    e.preventDefault();
    // toast.success("handleLoginToConfirm");
    if (email.value === "") {
      toast.error("이메일을 입력해 주세요.");
      return;
    }
    try {
      await requestSecret({
        variables: {
          email: email.value.trim(),
        },
      });
      // console.log("result handleLoginToConfirm", data.requestSecret);
      toast.success("이메일의 인증번호를 입력해 주세요.");
      setAction(actionType.confirm);
    } catch (error) {
      toast.error("해당 이메일이 없습니다.");
    }
  };

  //signUP
  const handleConfirmToHome = async (e) => {
    e.preventDefault();
    // toast.success("handleConfirmToHome");
    try {
      const {
        data: { confirmSecret: confirmSecretResult },
      } = await confirmSecret({
        variables: {
          secret: secret.value.trim(),
          email: email.value.trim(),
        },
      });
      console.log("confirmSecretResult", confirmSecretResult);
      dispatch(actionLogin(confirmSecretResult));
      toast.success("로그인 성공 환영합니다!");
      props.history.push("/");
    } catch (error) {
      console.log(error);
      toast.error("로그인 비밀번호를 다시 확인해 주세요.");
    }
  };
  //confirm
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
                <form
                  className="auth__loginFrom"
                  onSubmit={handleLoginToConfirm}
                >
                  <Input
                    {...email}
                    className="auth__loginInput "
                    placeholder="이메일을 입력해주세요."
                  ></Input>
                  <Button className="auth__loginButton blueBG" type="submit">
                    <span className="title01">로그인</span>
                  </Button>
                </form>
                <div className="auth__loginSNS">
                  <Button className="auth__loginButton googleBG" type="submit">
                    <FaGoogle style={{ marginRight: 10, fontSize: 18 }} />
                    <span className="title01 ">구글로 로그인</span>
                  </Button>
                  <Button className="auth__loginButton facebookBG">
                    <FaFacebook style={{ marginRight: 10, fontSize: 18 }} />
                    <span className="title01">페이스북으로 로그인</span>
                  </Button>
                  <Button className="auth__loginButton kakaoBG" type="submit">
                    <FaKaggle style={{ marginRight: 10, fontSize: 18 }} />
                    <span className="title01 black">카카오 계정 로그인</span>
                  </Button>
                </div>
              </div>
            )}
            {action === actionType.confirm && (
              <div>
                <div className="auth__login title01">이메일 인증</div>
                <form
                  className="auth__loginFrom"
                  onSubmit={handleConfirmToHome}
                >
                  <Input
                    {...secret}
                    className="auth__loginInput "
                    placeholder="이메일을 확인해 주세요."
                  ></Input>
                  <Button className="auth__loginButton blueBG" type="submit">
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
                    className="auth__loginInput "
                    placeholder="이름"
                  ></Input>
                  <Input
                    {...email}
                    className="auth__loginInput "
                    placeholder="이메일"
                  ></Input>
                  <Input
                    {...firstName}
                    className="auth__loginInput "
                    placeholder="성"
                  ></Input>
                  <Input
                    {...lastName}
                    className="auth__loginInput "
                    placeholder="이름"
                  ></Input>
                  <Input
                    {...bio}
                    className="auth__loginInput "
                    placeholder="성별"
                  ></Input>
                  <Button className="auth__loginButton blueBG" type="submit">
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

    & .auth__loginSNS {
      margin-top: 50px;
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
