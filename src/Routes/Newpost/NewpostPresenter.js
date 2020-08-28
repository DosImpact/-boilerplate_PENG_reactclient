import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import Input from "components/Input";

import TextareaAutosize from "react-autosize-textarea";

function NewpostPresenter({ formik, createPost, _gotoHome }) {
  const {
    values,
    touched,
    errors,
    // dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    // handleReset,
  } = formik;
  return (
    <OutterContainer>
      <InnerContainer>
        <div className="title title01">재능무역 등록</div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="title">
            제목
          </label>
          {errors.title && touched.title && (
            <div className="form__feedback error">{errors.title}</div>
          )}
          <Input
            placeholder="제목을 작성해주세요"
            className="form__input"
            type="text"
            id="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>
          <label className="form__label" htmlFor="location">
            location
          </label>
          {errors.location && touched.location && (
            <div className="form__feedback error">{errors.location}</div>
          )}
          <Input
            className="form__input"
            type="text"
            id="location"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>

          <label className="form__label" htmlFor="myTalent">
            myTalent
          </label>
          {errors.myTalent && touched.myTalent && (
            <div className="form__feedback error">{errors.myTalent}</div>
          )}
          <Input
            className="form__input"
            type="text"
            id="myTalent"
            value={values.myTalent}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>

          <label className="form__label" htmlFor="youTalent">
            youTalent
          </label>
          {errors.youTalent && touched.youTalent && (
            <div className="form__feedback error">{errors.youTalent}</div>
          )}
          <Input
            className="form__input"
            type="text"
            id="youTalent"
            value={values.youTalent}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Input>

          <label className="form__label" htmlFor="content">
            content
          </label>
          {errors.content && touched.content && (
            <div className="form__feedback error">{errors.content}</div>
          )}
          <Textarea
            className="form__input"
            type="text"
            id="content"
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Textarea>

          {/* 
          <Button
            className="blueBG "
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            초기화 하기
          </Button> */}
          <Button
            className="submitButton blueBG"
            type="submit"
            disabled={isSubmitting}
          >
            제출 하기
          </Button>
          {/* <DisplayState {...formik} /> */}
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

  & .title {
    margin-bottom: 20px;
  }

  & .form {
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-flow: column nowrap;

    & .form__label {
      margin-bottom: 10px;
    }
    & .form__input {
      margin-bottom: 30px;
    }
    & .form__feedback {
      margin-bottom: 5px;
    }

    & .submitButton {
      min-height: 50px;
    }
  }
`;
const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  border: 0;
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.bgColor};
  min-height: 70px;
  font-size: 12px;
  padding: 15px;
`;
