import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import NewpostPresenter from "./NewpostPresenter";
import { CREATE_POST } from "./NewpostGQL";
import { useMutation } from "@apollo/client";
function NewpostContainer() {
  const [createPost] = useMutation(CREATE_POST);
  const history = useHistory();
  const handleSummit = (e) => {
    e.target.preventDefault();
    console.log("submit");
  };

  const _gotoHome = () => {
    history.push("/");
  };

  return <NewpostPresenter handleSummit={handleSummit} />;
}

export default NewpostContainer;
