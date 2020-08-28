import React from "react";
import styled from "styled-components";

import Post from "components/Post";
import Loader from "components/Loader";
import Error from "components/Error";

function DetailPostPresenter({ data, loading, error }) {
  console.log("DetailPostPresenter", data);
  return (
    <OutterContainer>
      <InnerContainer>
        {loading && !error && <Loader />}
        {!loading && error && <Error />}
        {!loading && !error && <Post {...data?.seeFullPost} />}
      </InnerContainer>
    </OutterContainer>
  );
}

export default DetailPostPresenter;

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
