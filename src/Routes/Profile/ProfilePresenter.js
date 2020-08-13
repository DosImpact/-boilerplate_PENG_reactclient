import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Route, Switch, Link } from "react-router-dom";
import { FaTh, FaBookmark, FaComments } from "react-icons/fa";

import { Error as ErrorComponent } from "components";
import Loader from "../../components/Loader";
import Avatar from "../../components/Avatar";
import FatText from "../../components/FatText";
import FollowButton from "../../components/FollowButton";
import SquarePost from "../../components/SquarePost";
import Button from "../../components/Button";

export default ({ loading, data, logOut, path, error }) => {
  if (loading === true) {
    return (
      <OuterWrapper>
        <Loader />
      </OuterWrapper>
    );
  } else if (!loading && error) {
    return <ErrorComponent />;
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        name,
        email,
        fullName,
        isFollowing,
        isSelf,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts,
      },
    } = data;
    return (
      <OuterWrapper>
        <InnerWrapper>
          <Helmet>
            <title>{name} | Prismagram</title>
          </Helmet>

          <Header>
            <div className="header__column">
              <Avatar size="lg" url={avatar} />
            </div>
            <div className="header__column">
              <UsernameRow className="user__info">
                <Username className="user__infoColumn">{name}</Username>
                <div className="user__infoColumn">
                  {isSelf ? (
                    <Button color="#3C82FF" onClick={logOut} text="Log Out" />
                  ) : (
                    <FollowButton isFollowing={isFollowing} id={id} />
                  )}
                </div>
              </UsernameRow>
              <Counts className="counts__list">
                <Count className="counts__item">
                  게시물 <FatText text={String(postsCount)} />
                </Count>
                <Count className="counts__item">
                  필로워 <FatText text={String(followersCount)} />
                </Count>
                <Count className="counts__item">
                  팔로우 <FatText text={String(followingCount)} />
                </Count>
              </Counts>
              <div>{email}</div>
            </div>
          </Header>
          {/* <Posts>
          {posts &&
            posts.map((post) => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
              />
            ))}
        </Posts> */}
          <Select name={name} />
          <Router path={path} />
        </InnerWrapper>
      </OuterWrapper>
    );
  }
  return null;
};

const Router = ({ path }) => {
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <h1>hello</h1>
      </Route>
      <Route exact path={`${path}/saved`}>
        <h1>saved</h1>
      </Route>
      <Route exact path={`${path}/tagged`}>
        <h1>tagged</h1>
      </Route>
    </Switch>
  );
};

const Select = ({ name }) => {
  return (
    <Selector>
      <div className="selector__item">
        <Link to={`/user/${name}`}>
          <div className="selector__container">
            <FaTh className="icon" size={16} />
            <div className="title">게시물</div>
          </div>
        </Link>
      </div>
      <div className="selector__item">
        <Link to={`/user/${name}/saved`}>
          <div className="selector__container">
            <FaBookmark className="icon" size={16} />
            <div className="title">저장됨</div>
          </div>
        </Link>
      </div>
      <div className="selector__item">
        <Link to={`/user/${name}/tagged`}>
          <div className="selector__container">
            <FaComments className="icon" size={16} />
            <div className="title">댓글</div>
          </div>
        </Link>
      </div>
    </Selector>
  );
};
const OuterWrapper = styled.div`
  min-height: 150px;
  margin-bottom: 44px;
`;

const InnerWrapper = styled.div`
  max-width: 935px;
  margin: 0 auto 30px;
  padding: 30px 20px 0px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;

  & .header__column:nth-child(1) {
    flex-grow: 1;
  }

  & .header__column:nth-child(2) {
    flex-grow: 2;
  }

  & .user__info {
    display: flex;
    align-items: center;
    justify-content: center;
    & .user__infoColumn {
      flex-grow: 1;
    }
  }

  & .counts__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & .counts__item {
      margin-right: 40px;
    }
  }
`;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 26px;
  display: block;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Selector = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${(props) => props.theme.boxBorder};
  & .selector__item {
    & .selector__container {
      display: flex;
      justify-content: center;
      align-items: center;
      & .icon {
        margin-right: 6px;
      }
      & .title {
      }
    }
  }
  & .selector__item:not(:last-child) {
    margin-right: 60px;
  }
`;
const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;
