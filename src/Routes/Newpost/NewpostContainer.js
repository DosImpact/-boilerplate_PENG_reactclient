import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import NewpostPresenter from "./NewpostPresenter";
import { CREATE_POST } from "./NewpostGQL";
import { useMutation } from "@apollo/client";

function NewpostContainer() {
  const [createPost] = useMutation(CREATE_POST);
  const history = useHistory();

  const _gotoHome = () => {
    history.push("/");
    // window.location.reload();
    // window.location = "/";
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      location: "",
      myTalent: "",
      youTalent: "",
      content: "",
    },
    onSubmit: async (data, { setSubmitting }) => {
      // async 로 데이터를 주고 받는동안에는 여러번 form제출 방치 ,async data POST
      setSubmitting(true);

      // final Data from forkmik
      console.log(data);

      try {
        const result = await createPost({
          variables: {
            caption: data.title,
            location: data.location,
            mytalent: data.myTalent,
            youtalent: data.youTalent,
            content: data.content,
          },
        });

        console.log("upload post result ", result);
        toast.success("글쓰기 성공");
      } catch (error) {
        console.error("newpost Container error");
        console.dir(error);
        toast.error("글쓰기 실패");
      }
      setSubmitting(false);
      _gotoHome();
    },
    validationSchema: Yup.object().shape({
      // email: Yup.string().email().required("이메일 입력 필수"),
      title: Yup.string().required("제목 필수"),
      location: Yup.string().required("장소 필수"),
      myTalent: Yup.string().required("나의 재능 필수"),
      youTalent: Yup.string().required("교환받을 재능 필수"),
      content: Yup.string().required("내용을 적어주세요."),
    }),
  });

  return (
    <NewpostPresenter
      formik={formik}
      createPost={createPost}
      _gotoHome={_gotoHome}
    />
  );
}

export default NewpostContainer;
