import React from "react";
import styled from "styled-components";

function NewpostPresenter() {
  return (
    <OutterContainer>
      <InnerContainer>newpost.js</InnerContainer>
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
