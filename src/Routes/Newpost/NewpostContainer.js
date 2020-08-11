import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import NewpostPresenter from "./NewpostPresenter";
import { CREATE_POST } from "./NewpostGQL";
import { useMutation } from "@apollo/client";
function NewpostContainer() {
  const [createPost] = useMutation(CREATE_POST);
  const history = useHistory();

  const _gotoHome = () => {
    history.push("/");
  };

  return <NewpostPresenter createPost={createPost} _gotoHome={_gotoHome} />;
}

export default NewpostContainer;
