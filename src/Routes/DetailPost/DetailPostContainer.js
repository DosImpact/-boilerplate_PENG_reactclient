import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import DetailPostPresenter from "./DetailPostPresenter";
import { DETAIL_POST } from "./DetailPostGQL";
import { useMutation } from "@apollo/client";

/*
댓글 기능
Post 좋아요 기능

*/

function DetailPostContainer() {
  const [detailPost] = useMutation(DETAIL_POST);
  const history = useHistory();

  const handleSummit = (e) => {
    e.target.preventDefault();
    console.log("submit");
  };

  const handleSubmitComment = (e) => {
    e.target.preventDefault();
  };
  const handleClickLike = () => {};
  const handleReloadPage = () => {
    // history.push("")
    window.location.reload();
  };
  // const handleClickSaved = ()=>{}

  return <DetailPostPresenter handleSubmitComment={handleSubmitComment} />;
}

export default DetailPostContainer;
