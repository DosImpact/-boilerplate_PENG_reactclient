import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logUserSave } from "_actions/log_actions";
import { logOut } from "_actions/log_actions";
import HeaderPresenter from "./HeaderPresenter";
import useInput from "Hooks/useInput";

const HeaderComponent = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.log.toJS());
  const term = useInput();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${term.value}`);
  };
  // console.log("header.js", user);
  const handleLogOut = () => {
    // console.log("LogOut");
    dispatch(logOut());
    history.push("/");
  };
  const handleLogIn = () => {
    history.push("/auth");
  };
  return (
    <HeaderPresenter
      {...props}
      handleLogOut={handleLogOut}
      handleLogIn={handleLogIn}
      handleSubmit={handleSubmit}
      user={user}
      term={term}
    />
  );
};
export default HeaderComponent;

/**
 * 개선 시나리오
 * -
 */
