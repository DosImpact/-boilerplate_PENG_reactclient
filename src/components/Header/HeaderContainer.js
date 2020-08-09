import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logUserSave } from "_actions/log_actions";
import HeaderPresenter from "./HeaderPresenter";

const HeaderComponent = (props) => {
  const user = useSelector((state) => state.log.toJS());
  console.log("header.js", user);

  return <HeaderPresenter {...props} user={user} />;
};
export default withRouter(HeaderComponent);

/**
 * 개선 시나리오
 * -
 */
