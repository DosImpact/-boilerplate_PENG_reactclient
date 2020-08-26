import React from "react";
import styled from "styled-components";

import Input from "components/Input";
import Card from "components/Card/CardContainer";

import CommentItem from "./CommentItem";
import PostProfile from "./PostProfile";
import CommentFrom from "./CommentFrom";

export default ({
  className,
  id,
  location,
  caption,
  mytalent,
  youtalent,
  content,
  user,
  commentCount,
  comments,
  createdAt,
  isLiked,
  likeCount,
  handleToggleLike,
  formik,
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
        <PostProfile
          className="footer"
          commentCount={commentCount}
          handleToggleLike={handleToggleLike}
          isLiked={isLiked}
          likeCount={likeCount}
          createdAt={createdAt}
        />
      </div>
      <div className="commentContainer">
        <div className="commentList">
          {comments?.map((e, idx) => (
            <CommentItem
              className="commentItem"
              user={e.user}
              text={e.text}
              createdAt={e.createdAt}
            />
          ))}
        </div>
        <CommentFrom className="commentForm" formik={formik} />
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
    padding-bottom: 15px;
    & .content {
      min-height: 50px;
    }

    & .footer {
    }
  }
  & .commentContainer {
    min-height: 10px;
    padding: 0px;
    & .commentList {
      padding: 30px;
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
