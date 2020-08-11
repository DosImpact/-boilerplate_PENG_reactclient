import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { useDispatch } from "react-redux";

import ProfilePresenter from "./ProfilePresenter";
import { GET_USER } from "./ProfileGQL";

export default () => {
  let {
    params: { name },
    path,
  } = useRouteMatch();
  // console.log("useRouteMatchData", useRouteMatchData);

  // console.log(username);
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { name },
  });
  const logOut = () => {
    console.log("LogOut");
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
