import React from "react";
import styled, { keyframes } from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;
const OuterWrapper = styled.div`
  min-height: 150px;
  margin-bottom: 44px;
`;

const InnerWrapper = styled.div`
  max-width: 935px;
  margin: 0 auto 30px;
  padding: 30px 20px 0px;

  & .message {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .message__title {
      margin: 20px;
    }
  }
`;

const Loader = styled.div`
  animation: ${Animation} 10s linear infinite;
  width: 100%;
  text-align: center;
  margin: 30px 0px 60px;
`;

export default () => (
  <OuterWrapper>
    <InnerWrapper>
      <Loader>
        <FaExclamationTriangle size={320} color={"#3C82FF"} />
      </Loader>
      <div className="message">
        <div className="message__title title01">웁스!</div>
        <div className="message__content title02">
          페이지를 찾을 수 없어요..
        </div>
      </div>
    </InnerWrapper>
  </OuterWrapper>
);
