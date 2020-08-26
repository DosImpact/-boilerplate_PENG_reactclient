import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Avatar from "components/Avatar";

function CommentItem({ className, user, text, createdAt }) {
  return (
    <Wrapper className={className}>
      <div className="commentRow">
        <div className="commentProfile">
          <Link to={`/user/${user.name || "dummy"}`}>
            <Avatar size="20" url={user.avatar} />
          </Link>
          <span className="name">{user.name}</span>
        </div>
        <span className="time title05">{createdAt.substr(0, 10)}</span>
      </div>
      <div className="commentRow">{text}</div>
      {/* <div className="commentRow title05">{createdAt.substr(0, 10)}</div> */}
    </Wrapper>
  );
}

export default CommentItem;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 5px;
  & .commentRow {
    margin-bottom: 5px;
  }
  & .commentRow:nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    & .commentProfile {
      display: flex;
    }
    & .time {
      align-self: flex-end;
    }
  }
  & .name {
    margin-left: 10px;
  }
`;
