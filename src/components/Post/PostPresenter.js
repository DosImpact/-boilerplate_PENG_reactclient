import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaRegComment, FaRegHeart, FaRegBookmark } from "react-icons/fa";

import Avatar from "components/Avatar";
import Card from "components/Card/CardContainer";

export default ({
  className,
  id,
  location,
  caption,
  mytalent,
  youtalent,
  content,
  user,
  likeCount,
  commentCount,
  comments,
  createdAt,
}) => {
  return (
    <Wrapper className={className}>
      <Card
        className="profile"
        size="sm"
        user={user}
        id={id}
        location={location}
        caption={caption}
        mytalent={mytalent}
        youtalent={youtalent}
      />
      <div className="DetailContainer">
        <div className="content">{content}</div>
        <div className="footer">
          <div className="item">
            <FaRegComment className="icon" />
            <span className="count">{likeCount}</span>
          </div>
          <div className="item">
            <FaRegHeart className="icon" />
            <span className="count">{commentCount}</span>
          </div>
          <div className="item">
            <FaRegBookmark className="icon" />
            <span className="count">{commentCount}</span>
          </div>
        </div>
      </div>
      <div className="commentContainer">
        <div className="commentList">
          {comments?.map((e, idx) => (
            <div className="commentItem" key={idx}>
              <div className="commentRow">
                <Link to={`/user/${e?.user.name || "dummy"}`}>
                  <Avatar size="sm" url={e.user.avatar} />{" "}
                </Link>
                <span>{e?.user.name}</span>
              </div>
              <div className="commentRow">{e?.text}</div>
              <div className="commentRow">{e?.createdAt.substr(0, 10)}</div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > div {
    max-width: 987px;
    width: 100%;
    margin-bottom: 20px;

    border-radius: 6px;
    padding: 30px;
    border: ${(props) => props.theme.boxBorder};
    box-shadow: ${(props) => props.theme.boxShadow};
    margin-bottom: 20px;
  }

  & .profile {
  }
  & .DetailContainer {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    & .content {
    }

    & .footer {
      min-height: 40px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      & .item {
        margin-left: 5px;
        & .icon {
          color: ${(props) => props.theme.blueColor};
          margin-right: 1px;
        }
        & .count {
        }
      }
    }
  }
  & .commentContainer {
    min-height: 10px;
    & .commentList {
    }
    & .commentItem {
      min-height: 50px;
    }
    & .commentRow {
      display: flex;
      /* justify-content: center; */
      align-items: center;
    }
  }
`;
