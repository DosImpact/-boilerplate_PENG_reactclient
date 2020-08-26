import React from "react";
import styled from "styled-components";
import Input from "components/Input";
function CommentFrom({ className, formik }) {
  return (
    <Wrapper className={className}>
      <form onSubmit={formik.handleSubmit}>
         <label htmlFor="comment">댓글</label>
        <Input
          type="text"
          id="comment"
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
                
        {formik.errors.comment && formik.touched.comment && (
          <div>{formik.errors.comment}</div>
        )}
        <button type="submit" disabled={formik.isSubmitting}>
          Submit         
        </button>
      </form>
    </Wrapper>
  );
}

export default CommentFrom;
const Wrapper = styled.div`
  width: 100%;
`;
