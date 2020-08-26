import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Avatar from "components/Avatar";

function CommentItem({ className, user, text, createdAt }) {
  return (
    <Wrapper className={className}>
      <div className="commentRow">
        <Link to={`/user/${user.name || "dummy"}`}>
          <Avatar size="sm" url={user.avatar} />{" "}
        </Link>
        <span>{user.name}</span>
      </div>
      <div className="commentRow">{text}</div>
      <div className="commentRow">{createdAt.substr(0, 10)}</div>
    </Wrapper>
  );
}

export default CommentItem;

const Wrapper = styled.div`
  width: 100%;
`;
