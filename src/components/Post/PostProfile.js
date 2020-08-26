import React from "react";
import styled from "styled-components";
import {
  FaRegComment,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
} from "react-icons/fa";

function PostProfile({
  className,
  commentCount,
  handleToggleLike,
  isLiked,
  likeCount,
  createdAt,
}) {
  return (
    <Wrapper className={className}>
      <div className="column">
        <div className="item">
          <FaRegComment className="icon" />
          <span className="count">{commentCount}</span>
        </div>
        <div
          className="item"
          onClick={() => handleToggleLike()}
          style={{ cursor: "pointer" }}
        >
          {isLiked ? (
            <FaHeart className="icon" />
          ) : (
            <FaRegHeart className="icon" />
          )}

          <span className="count">{likeCount}</span>
        </div>
        <div className="item">
          <FaRegBookmark className="icon" />
          <span className="count">0</span>
        </div>
      </div>
      <div className="column">
        <div className="item">{createdAt.substr(0, 10)}</div>
      </div>
    </Wrapper>
  );
}

export default PostProfile;

const Wrapper = styled.div`
  min-height: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  & .column {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
  }
  & .item {
    margin-left: 5px;
    & .icon {
      color: ${(props) => props.theme.blueColor};
      margin-right: 1px;
    }
    & .count {
    }
  }
`;
