import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

import Input from "components/Input";
import {
  FaThinkPeaks,
  FaSearch,
  FaRegCommentAlt,
  FaRegSave,
  FaRegUser,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logUserSave } from "_actions/log_actions";

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
        <div>MY 무역</div>
      </LoggedInWrapper>
    </>
  );
};
const LoggedOut = () => {
  return <>loggedOut</>;
};

const HeaderComponent = ({ history }) => {
  const dispatch = useDispatch();
  const log = useSelector((state) => state.log.toJS());
  const [userData, SetUserData] = useState("");

  useEffect(async () => {
    const { payload } = await dispatch(logUserSave(log?.token || ""));
    SetUserData(payload);
    console.log(payload);
    return () => {};
  }, []);

  return (
    <Header>
      <HeaderWrapper>
        <div className="header__column">
          <Link to="/">
            <div className="logo">
              <FaThinkPeaks />
              <span className="logo__title">재능무역</span>
            </div>
          </Link>
        </div>
        <div className="header__column">
          <div className="Search">
            <div className="SearchContainer">
              <div>
                <FaSearch />
              </div>
              <form>
                <input type="text"></input>
              </form>
            </div>
          </div>
        </div>
        <div className="header__column">
          <div className="Nav">
            <div className="NavContainer">
              <ul className="icon__list">
                <Link to="/">
                  <li className="icon__item">
                    <FaRegCommentAlt />
                    <div className="icon__title title04">피드</div>
                  </li>
                </Link>
                <Link to="/">
                  <li className="icon__item">
                    <FaRegSave />
                    <div className="icon__title title04">저장</div>
                  </li>
                </Link>
                <Link to="/">
                  <li className="icon__item">
                    <FaRegUser />
                    <div className="icon__title title04">마이</div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </Header>
  );
};
export default withRouter(HeaderComponent);

const Header = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: white;
  border-bottom: ${(props) => props.theme.boxBorder};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  & .header__column {
  }
  & .header__column:first-child {
    width: 168px;
    margin-left: 10px;
  }

  & .header__column:nth-child(2) {
    width: 100%;
  }

  & .header__column:last-child {
    width: 168px;
    margin-left: 10px;
  }

  & .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;

    & .logo__title {
      font-size: 16px;
      font-weight: 400;
    }
  }

  & .Search {
    & .SearchContainer {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & .Nav {
    & .NavContainer {
      & .icon__list {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & .icon__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      & .icon__title {
      }
    }
  }
`;
