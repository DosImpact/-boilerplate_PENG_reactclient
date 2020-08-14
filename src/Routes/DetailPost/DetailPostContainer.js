import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import DetailPostPresenter from "./DetailPostPresenter";
import { CREATE_POST } from "./DetailPostGQL";
import { useMutation } from "@apollo/client";
function DetailPostContainer() {
  const [createPost] = useMutation(CREATE_POST);
  const history = useHistory();
  const handleSummit = (e) => {
    e.target.preventDefault();
    console.log("submit");
  };

  const _gotoHome = () => {
    history.push("/");
  };

  return <DetailPostPresenter handleSummit={handleSummit} />;
}

export default DetailPostContainer;
