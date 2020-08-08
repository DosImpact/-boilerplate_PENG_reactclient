import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import useInput from "Hooks/useInput";
import { toast } from "react-toastify";

import { CONFIRM_SECRET, CREATE_ACCOUNT, REQUEST_SECRET } from "./AuthGQL";
import { useDispatch } from "react-redux";
import { logIn as actionLogin } from "_actions/log_actions";

import AuthPresenter from "./AuthPresenter";

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
      toast.success("이메일의 인증번호를 입력해 주세요.");
      setAction(actionType.confirm);
    } catch (error) {
      console.log(error);
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
    <AuthPresenter
      actionType={actionType}
      action={action}
      setAction={setAction}
      name={name}
      email={email}
      firstName={firstName}
      lastName={lastName}
      bio={bio}
      secret={secret}
      handleLoginToConfirm={handleLoginToConfirm}
      handleConfirmToHome={handleConfirmToHome}
      handleTosignUp={handleTosignUp}
    />
  );
}

export default Auth;
