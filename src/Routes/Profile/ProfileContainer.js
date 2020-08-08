import React from "react";
import { Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import ProfilePresenter from "./ProfilePresenter";

import { GET_USER, EDIT_USER } from "./ProfileGQL";

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export default () => {
  let {
    params: { name },
    path,
  } = useRouteMatch();
  // console.log("useRouteMatchData", useRouteMatchData);

  // console.log(username);
  const { data, loading } = useQuery(GET_USER, {
    variables: { name },
  });
  const logOut = useMutation(LOG_OUT);
  return (
    <ProfilePresenter
      loading={loading}
      logOut={logOut}
      data={data}
      path={path}
    />
  );
};
