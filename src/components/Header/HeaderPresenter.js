import React, { useRef } from "react";
import { down, up } from "styled-breakpoints";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  FaThinkPeaks,
  FaSearch,
  FaBars,
  FaHome,
  FaRegWindowRestore,
  FaRegBookmark,
  FaUserAlt,
} from "react-icons/fa";

import Avatar from "components/Avatar";

const HeaderPresneter = ({
  user,
  term,
  handleSubmit,
  handleLogOut,
  handleLogIn,
  ...props
}) => {
  const popUp = useRef();
  const popUpFull = useRef();

  const handlePopUp = () => {
    if (popUp.current.style.display === "none") {
      popUp.current.style.display = "block";
      popUpFull.current.style.display = "block";
    } else {
      popUp.current.style.display = "none";
      popUpFull.current.style.display = "none";
    }
  };

  return (
    <Header>
      <HeaderWrapper>
        <div className="header__column">
          <Link to="/">
            <div className="logo">
              <FaThinkPeaks size={42} />
              <span className="logo__title title01 blue">
                재능
                <br />
                무역
              </span>
            </div>
          </Link>
        </div>
        <div className="header__column">
          <div className="Search">
            <div className="SearchContainer">
              <FaSearch className="SearchIcon" size={18} color="gray" />
              <form onSubmit={handleSubmit}>
                <input
                  className="SearchInput"
                  type="text"
                  placeholder="재능 검색하기"
                  value={term.value}
                  onChange={term.onChange}
                ></input>
                <button style={{ display: "none" }} type="submit" />
              </form>
            </div>
          </div>
        </div>
        <div className="header__column">
          <div className="quick">
            <ul className="quick__list">
              <Link className="quick__item" to="/newpost">
                글쓰기
              </Link>
              <Link className="quick__item" to="/mypost">
                MY 무역
              </Link>
              <li className="quick__item">
                <div className="quick__itemImg" onClick={handlePopUp}>
                  <Avatar size="sm" url={user?.userData?.avatar || null} />
                </div>
                {user.isLoggedIn ? (
                  <div className="quick__itemName" onClick={handlePopUp}>
                    {user.userData.name}
                  </div>
                ) : (
                  <Link className="quick__itemName" to="/auth">
                    로그인
                  </Link>
                )}

                <div style={{ position: "relative" }}>
                  <div
                    className="header__full"
                    ref={popUpFull}
                    onClick={handlePopUp}
                  ></div>
                  <div className="header__popup" ref={popUp}>
                    <ul className="header__list">
                      <Link
                        onClick={handlePopUp}
                        className="header__item"
                        to={`/user/${user.userData.name || "dummy"}`}
                      >
                        <div className="blue">프로필 관리</div>
                      </Link>
                      <li className="header__item">
                        <div>내가 쓴 포스트</div>
                      </li>
                      <li className="header__item">
                        <div>내가 쓴 댓글</div>
                      </li>
                      <li className="header__item">
                        <div>찜한 포스트</div>
                      </li>
                      <li className="header__item">
                        {user.isLoggedIn ? (
                          <div
                            onClick={() => {
                              handlePopUp();
                              handleLogOut();
                            }}
                          >
                            로그아웃
                          </div>
                        ) : (
                          <div onClick={() => handleLogIn()}>로그인</div>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </HeaderWrapper>
      <HeaderWrapperBottom>
        <div className="header__column">
          <Link to="/">
            <div className="iconContainer">
              <FaHome size={21} />
              <div className="iconTitle title06">홈</div>
            </div>
          </Link>
        </div>
        <div className="header__column">
          <Link to="/">
            <div className="iconContainer">
              <FaBars size={21} />
              <div className="iconTitle title06">카테고리</div>
            </div>
          </Link>
        </div>
        <div className="header__column">
          <Link to="/">
            <div className="iconContainer">
              <FaRegWindowRestore size={21} />
              <div className="iconTitle title06">피드</div>
            </div>
          </Link>
        </div>
        <div className="header__column">
          <Link to="/">
            <div className="iconContainer">
              <FaRegBookmark size={21} />
              <div className="iconTitle title06">저장</div>
            </div>
          </Link>
        </div>
        <div className="header__column">
          <Link to={`/user/${user.userData.name || "dummy"}`}>
            <div className="iconContainer">
              <FaUserAlt size={21} />
              <div className="iconTitle title06">마이</div>
            </div>
          </Link>
        </div>
      </HeaderWrapperBottom>
    </Header>
  );
};
export default HeaderPresneter;

const Header = styled.header`
  width: 100%;
  height: 64px;
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  z-index: 10;
  background-color: white;
  border-bottom: ${(props) => props.theme.boxBorder};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 975px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  & .header__column {
  }
  & .header__column:first-child {
    flex-grow: 1;
    /* width: 168px; */
    /* margin-left: 10px; */
    & .logo__title {
    }
    ${down("sm")} {
      display: none;
    }
  }

  & .header__column:nth-child(2) {
    flex-grow: 3;
    /* width: 100%; */
  }

  & .header__column:last-child {
    flex-grow: 1;
    /* width: 168px; */
    /* margin-left: 10px; */
    ${down("sm")} {
      display: none;
    }
  }

  & .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;

    & .logo__title {
      margin-left: 10px;
      width: auto;
    }
  }

  & .Search {
    width: 100%;
    display: flex;
    justify-content: center;
    & .SearchContainer {
      width: 80%;
      height: 38px;
      background-color: ${(props) => props.theme.bgColor};
      border-radius: 19px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }

    & .SearchIcon {
      margin: 0px 10px;
    }

    & .SearchInput {
      all: unset;
    }
  }

  & .header__full {
    /* background-color: rgba(255, 0, 0, 0.3); */
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: none;
  }

  & .header__popup {
    display: none;
    width: 167px;
    height: 240px;
    position: absolute;
    top: 31px;
    left: -105px;
    border: ${(props) => props.theme.boxBorder};
    z-index: 100;
    background-color: ${(props) => props.theme.whiteColor};
    & .header__list {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & .header__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 48px;
        padding: 8px 16px;
      }
    }
  }
  & .quick {
    & .quick__list {
      display: flex;
      justify-content: center;
      align-items: center;
      & .quick__itemImg {
        margin-right: 5px;
      }

      & .quick__item:first-child {
      }
      & .quick__item:not(:last-child) {
        margin-right: 20px;
      }
      & .quick__item:nth-child(2) {
        /* border-right:1px solid black; */
        border-right: ${(props) => props.theme.boxBorder};
        border-left: ${(props) => props.theme.boxBorder};
        padding: 0px 10px;
      }
      & .quick__item:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;

const HeaderWrapperBottom = styled.div`
  width: 100%;
  /* max-width: 975px; */
  /* margin: 0px auto; */
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;

  position: fixed;
  bottom: 0;
  left: 0;

  border-top: ${(props) => props.theme.boxBorder};

  background-color: ${(props) => props.theme.whiteColor};
  ${up("md")} {
    display: none;
  }

  & .header__column {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .iconContainer {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  & .iconTitle {
    padding-top: 3px;
  }
`;
