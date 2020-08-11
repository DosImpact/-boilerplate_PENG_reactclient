import React from "react";
import styled from "styled-components";

import { Formik } from "formik";
import * as Yup from "yup";

function NewpostPresenter() {
  return (
    <OutterContainer>
      <InnerContainer>
        <h1>TEST FORMIK</h1>
        <Formik></Formik>
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
