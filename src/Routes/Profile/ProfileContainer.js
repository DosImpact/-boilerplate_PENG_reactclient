import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { logOut } from "_actions/log_actions";
import { useDispatch } from "react-redux";

import ProfilePresenter from "./ProfilePresenter";
import { GET_USER } from "./ProfileGQL";

export default () => {
  const dispatch = useDispatch();
  let {
    params: { name },
    path,
  } = useRouteMatch();
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_USER, {
    variables: { name },
  });
  const logOut = () => {
    console.log("LogOut");
    dispatch(logOut());
    // history.push("/");
  };
  return (
    <ProfilePresenter
      loading={loading}
      logOut={logOut}
      data={data}
      path={path}
      error={error}
    />
  );
};
