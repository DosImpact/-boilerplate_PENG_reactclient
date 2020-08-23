import React from "react";
import styled from "styled-components";

import Loader from "components/Loader";
import Error from "components/Error";

function DetailPostPresenter({
  handleClickLike,
  formik,
  data,
  loading,
  error,
}) {
  return (
    <OutterContainer>
      <InnerContainer>
        {loading && !error && <Loader />}
        {!loading && error && <Error />}
        <pre>
          {JSON.stringify(data, null, 2)}
          {JSON.stringify(formik, null, 2)}
        </pre>
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
