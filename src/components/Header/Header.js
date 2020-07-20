import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import { Compass, HeartEmpty, User, Logo, Plus } from "components/Icons";
import { useSelector } from "react-redux";

const LoggedInWrapper = styled.div`
  & .write__box {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.whiteColor};
    background-color: ${(props) => props.theme.blueColor};

    width: 105px;
    height: 40px;
    border-radius: 5px;
    opacity: 1;
  }
`;

const LoggedIn = () => {
  return (
    <>
      <LoggedInWrapper>
        <div className="write__box">
          <Plus />
          <div>글쓰기</div>
        </div>

        <div>MY 무역</div>
      </LoggedInWrapper>
    </>
  );
};
const LoggedOut = () => {
  return <>loggedOut</>;
};

const HeaderComponent = ({ history }) => {
  const user = useSelector((state) => state.user);
  const { data, loading, error } = useQuery(ME);
  // console.log("user Data", user);
  // const search = useInput("");
  // console.log("data", data);
  // const onSearchSubmit = (e) => {
  //   e.preventDefault();
  //   history.push(`/search?term=${search.value}`);
  // };
  return (
    <Header>
      <HeaderWrapper>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          {user.isLoggedIn ? <LoggedIn /> : <LoggedOut />}
          {/*           
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          {!data ? (
            <HeaderLink to="/#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={data.me.name}>
              <User />
            </HeaderLink>
          )} */}
        </div>
      </HeaderWrapper>
    </Header>
  );
};
export default withRouter(HeaderComponent);

const ME = gql`
  query whoami {
    me {
      id
      avatar
      name
      email
    }
  }
`;

const Header = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
  z-index: 2;
`;

// const HeaderColumn = styled.div`
//   width: 33%;
//   text-align: center;
//   &:first-child {
//     margin-right: auto;
//     text-align: left;
//   }
//   &:last-child {
//     margin-left: auto;
//     text-align: right;
//   }
// `;

// const SearchInput = styled(Input)`
//   background-color: ${(props) => props.theme.bgColor};
//   padding: 5px;
//   font-size: 14px;
//   border-radius: 3px;
//   height: auto;
//   text-align: center;
//   width: 70%;
//   &::placeholder {
//     opacity: 0.8;
//     font-weight: 200;
//   }
// `;

// const HeaderLink = styled(Link)`
//   &:not(:last-child) {
//     margin-right: 30px;
//   }
// `;
