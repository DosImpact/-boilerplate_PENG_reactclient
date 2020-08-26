import React from "react";
import styled from "styled-components";

import { FaEdit } from "react-icons/fa";

import Input from "components/Input";

function CommentFrom({ className, formik }) {
  return (
    <Wrapper className={className}>
      <form className="form" onSubmit={formik.handleSubmit}>
        {/*  <label htmlFor="comment">댓글</label> */}
        <Input
          className="comment"
          type="text"
          id="comment"
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="댓글을 입력하세요."
        />

        <div className="button">
          <button type="submit" disabled={formik.isSubmitting}>
            <FaEdit />
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default CommentFrom;
const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  & .form {
    width: 100%;
    height: 40px;
    display: flex;
    & .comment {
      flex: 1 1 auto;
      height: 40px;
    }
    & .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      & button {
        all: unset;
      }
    }
  }
`;
