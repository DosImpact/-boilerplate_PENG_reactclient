import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import DetailPostPresenter from "./DetailPostPresenter";
import { DETAIL_POST } from "./DetailPostGQL";
import { useQuery } from "@apollo/client";

/*
댓글 기능
Post 좋아요 기능

*/

function DetailPostContainer() {
  const history = useHistory();
  const {
    params: { id },
  } = useRouteMatch();
  const { data, loading, error } = useQuery(DETAIL_POST, {
    variables: {
      id,
    },
  });
  // console.log(data);
  // const handleSummit = (e) => {
  //   e.target.preventDefault();
  //   console.log("submit");
  // };

  // const handleSubmitComment = (e) => {
  //   e.target.preventDefault();
  // };
  const handleClickLike = () => {};
  const _handleReloadPage = () => {
    history.push(`post/${id}`);
    // window.location.reload();
  };
  const _handle
  // const handleClickSaved = ()=>{}

  const formik = useFormik({
    initialValues: { comment: "" },
    onSubmit: async (data, { setSubmitting }) => {
      setSubmitting(true);
      console.log(data);
      // _handleReloadPage()
      setSubmitting(false);
    },
    validationSchema: Yup.object().shape({
      comment: Yup.string().required("댓글을 달아주세요"),
    }),
  });

  return (
    <DetailPostPresenter
      handleClickLike={handleClickLike}
      formik={formik}
      data={data}
      loading={loading}
      error={error}
    />
  );
}

export default DetailPostContainer;
