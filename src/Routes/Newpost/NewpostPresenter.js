import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { Formik } from "formik";
import * as Yup from "yup";

const DisplayState = (props) => (
  <div>
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem",
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

function NewpostPresenter({ createPost, _gotoHome }) {
  return (
    <OutterContainer>
      <InnerContainer>
        <h1>새로운 글쓰기</h1>
        <Formik
          onSubmit={async (data, { setSubmitting }) => {
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
          }}
          initialValues={{
            title: "",
            location: "",
            myTalent: "",
            youTalent: "",
          }}
          validationSchema={Yup.object().shape({
            // email: Yup.string().email().required("이메일 입력 필수"),
            title: Yup.string().required("입력 필수"),
            location: Yup.string().required("입력 필수"),
            myTalent: Yup.string().required("입력 필수"),
            youTalent: Yup.string().required("입력 필수"),
          })}
        >
          {(props) => {
            // console.log(props);
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;

            return (
              <form onSubmit={handleSubmit}>
                <label className="form__label" htmlFor="title">
                  title
                </label>
                <input
                  className="form__input"
                  type="text"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.title && touched.title && (
                  <div className="form__feedback">{errors.title}</div>
                )}

                <label className="form__label" htmlFor="location">
                  location
                </label>
                <input
                  className="form__input"
                  type="text"
                  id="location"
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.location && touched.location && (
                  <div className="form__feedback">{errors.location}</div>
                )}

                <label className="form__label" htmlFor="myTalent">
                  myTalent
                </label>
                <input
                  className="form__input"
                  type="text"
                  id="myTalent"
                  value={values.myTalent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.myTalent && touched.myTalent && (
                  <div className="form__feedback">{errors.myTalent}</div>
                )}

                <label className="form__label" htmlFor="youTalent">
                  youTalent
                </label>
                <input
                  className="form__input"
                  type="text"
                  id="youTalent"
                  value={values.youTalent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.youTalent && touched.youTalent && (
                  <div className="form__feedback">{errors.youTalent}</div>
                )}

                <button
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <DisplayState {...props} />
              </form>
            );
          }}
        </Formik>
      </InnerContainer>
    </OutterContainer>
  );
}

export default NewpostPresenter;

const OutterContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.whiteColor};
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0px auto;
  padding: 30px 20px 30px;
`;
