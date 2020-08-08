import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Route, Switch, Link } from "react-router-dom";

import Loader from "../../components/Loader";
import Avatar from "../../components/Avatar";
import FatText from "../../components/FatText";
import FollowButton from "../../components/FollowButton";
import SquarePost from "../../components/SquarePost";
import Button from "../../components/Button";

export default ({ loading, data, logOut, path }) => {
  if (loading === true) {
    return (
      <OuterWrapper>
        <Loader />
      </OuterWrapper>
    );
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        name,
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
              <UsernameRow>
                <Username>{name}</Username>{" "}
                {isSelf ? (
                  <Button onClick={(e) => logOut} text="Log Out" />
                ) : (
                  <FollowButton isFollowing={isFollowing} id={id} />
                )}
              </UsernameRow>
              <Counts>
                <Count>
                  <FatText text={String(postsCount)} /> posts
                </Count>
                <Count>
                  <FatText text={String(followersCount)} /> followers
                </Count>
                <Count>
                  <FatText text={String(followingCount)} /> following
                </Count>
              </Counts>
              <FullName text={fullName} />
              <Bio>{bio}</Bio>
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

          <Selector>
            <div className="selector__item">
              <Link to={`/user/${name}`}>
                <div className="selector__container">
                  <div className="icon">🎆</div>
                  <div className="title">게시물</div>
                </div>
              </Link>
            </div>
            <div className="selector__item">
              <Link to={`/user/${name}/saved`}>
                <div className="selector__container">
                  <div className="icon">🎆</div>
                  <div className="title">게시물</div>
                </div>
              </Link>
            </div>
            <div className="selector__item">
              <Link to={`/user/${name}/tagged`}>
                <div className="selector__container">
                  <div className="icon">🎆</div>
                  <div className="title">게시물</div>
                </div>
              </Link>
            </div>
          </Selector>

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
        </InnerWrapper>
      </OuterWrapper>
    );
  }
  return null;
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

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const Selector = styled.div``;
