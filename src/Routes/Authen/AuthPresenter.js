import React from "react";
import { FaFacebook, FaGoogle, FaKaggle } from "react-icons/fa";

import Button from "components/Button";
import Input from "components/Input";
import styled from "styled-components";
import { Loader } from "components";

import config from "../../config";

const SNSLogin = () => {
  return (
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
        <a href={`${config.SERVER_URI}auth/kakao`}>
          <FaKaggle style={{ marginRight: 10, fontSize: 18 }} />
          <span className="title01 black">카카오 계정 로그인</span>
        </a>
      </Button>
    </div>
  );
};

function Auth({
  actionType,
  action,
  formik,
  ActionChangeLogin,
  ActionChangeSignUp,
  ActionChangeConfirm,
  createAccountLoading,
}) {
  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    // handleReset,
    errors,
    touched,
    // dirty,
    isSubmitting,
  } = formik;
  return (
    <AuthPresenter className="outterContainer">
      <div className="innerContainer">
        <div className="innerWrapper">
          <div className="auth">
            {action === actionType.login && (
              <div className="authWrapper">
                <div className="auth__login title01">로그인</div>
                <form
                  className="auth__loginFrom"
                  onSubmit={handleSubmit}
                  // onSubmit={handleSubmit}
                >
                  <Input
                    type="text"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="auth__loginInput "
                    placeholder="이메일을 입력해주세요."
                  ></Input>
                  {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="auth__loginButton blueBG"
                  >
                    <span className="title01">로그인</span>
                  </Button>
                </form>
                <SNSLogin />
              </div>
            )}
            {action === actionType.confirm && (
              <div>
                <div className="auth__login title01">이메일 인증</div>
                <form className="auth__loginFrom" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    id="secret"
                    value={values.secret}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="auth__loginInput "
                    placeholder="이메일의 인증 문자를 입력해 주세요"
                  ></Input>
                  {errors.secret && touched.secret && (
                    <div className="error">{errors.secret}</div>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="auth__loginButton blueBG"
                  >
                    <span className="title01">인증 하기</span>
                  </Button>
                </form>
              </div>
            )}
            {action === actionType.signUp && (
              <div>
                <div className="auth__login title01">회원 가입</div>
                <form className="auth__loginFrom" onSubmit={handleSubmit}>
                  <Input
                    className="auth__loginInput "
                    type="text"
                    id="name"
                    placeholder="닉네임"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Input>
                  {errors.name && touched.name && (
                    <div className="error">{errors.name}</div>
                  )}
                  <Input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="auth__loginInput "
                    type="text"
                    id="email"
                    placeholder="이메일"
                  ></Input>
                  {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                  )}
                  <Input
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="auth__loginInput "
                    type="text"
                    id="firstName"
                    placeholder="성"
                  ></Input>
                  <Input
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="auth__loginInput "
                    type="text"
                    id="lastName"
                    placeholder="이름"
                  ></Input>
                  <Input
                    value={values.bio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="auth__loginInput "
                    type="text"
                    id="bio"
                    placeholder="성별"
                  ></Input>
                  {createAccountLoading ? <Loader /> : null}
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
                    onClick={ActionChangeSignUp}
                  ></div>
                </div>
                <div className="signUp__change">
                  <div className="signUp__changeContent">
                    <div className="title04">아직 회원이 아니세요?</div>
                    <div
                      className="signUp__button title01 blue"
                      onClick={ActionChangeSignUp}
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
                      onClick={ActionChangeLogin}
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
                      onClick={ActionChangeLogin}
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
    </AuthPresenter>
  );
}

export default Auth;

const AuthPresenter = styled.div`
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
