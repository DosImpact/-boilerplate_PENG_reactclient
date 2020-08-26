import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { Formik } from "formik";
import * as Yup from "yup";

import TextareaAutosize from "react-autosize-textarea";

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

function NewpostPresenter({ formik, createPost, _gotoHome }) {
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
  } = formik;
  return (
    <OutterContainer>
      <InnerContainer>
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

          <label className="form__label" htmlFor="content">
            content
          </label>
          <TextareaAutosize
            className="form__input"
            type="text"
            id="content"
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
          ></TextareaAutosize>
          {errors.content && touched.content && (
            <div className="form__feedback">{errors.content}</div>
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
          <DisplayState {...formik} />
        </form>
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
