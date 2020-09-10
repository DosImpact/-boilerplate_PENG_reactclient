import React from "react";
import styled from "styled-components";
import {
  FaRegComment,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
} from "react-icons/fa";

import { useSelector } from "react-redux";

function PostProfile({
  className,
  commentCount,
  handleToggleLike,
  isLiked,
  likeCount,
  createdAt,
  handleDeletePost,
  userId,
}) {
  const user = useSelector((state) => state.log.toJS());
  const loggedUserId = user.userData.id;
  // console.log("loggedUserId", loggedUserId, "userId", userId);
  return (
    <Wrapper className={className}>
      <div className="column">
        <div
          className="item "
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
          <FaRegComment className="icon" />
          <span className="count">{commentCount}</span>
        </div>

        <div className="item">
          <FaRegBookmark className="icon" />
          <span className="count">0</span>
        </div>
      </div>
      <div className="column">
        <div className="item">{createdAt.substr(0, 10)}</div>
        {loggedUserId === userId ? (
          <div
            className="item delbutton"
            style={{ cursor: "pointer" }}
            onClick={() => handleDeletePost()}
          >
            삭제
          </div>
        ) : null}
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
    margin-right: 8px;
    & .icon {
      color: ${(props) => props.theme.blueColor};
      margin-right: 3px;
    }
    & .count {
    }
  }
  & .delbutton {
    color: ${(props) => props.theme.blueColor};
  }
`;
