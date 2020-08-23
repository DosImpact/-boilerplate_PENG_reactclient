import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import Button from "components/Button";
import Avatar from "components/Avatar";

function Card({ className, post, size, user }) {
  const { id, location, caption, mytalent, youtalent } = post;
  const { id: user_id, avatar: user_avatar, name: user_name } = user;

  return (
    <Container className={className} key={id} size={size}>
      {/* <div className="card__image">
        <img src="https://res.cloudinary.com/frientrip/image/upload/ar_75:56,c_fill,dpr_2,f_auto,w_310/product_banner_1589952171045_706993"></img>
        <div className="card__cover"></div>
      </div> */}
      <div className="card__wrapper">
        <div className="card__header">
          <div className="header__column">
            <Link to={`/user/${user_name || "dummy"}`}>
              <div className="header__profile" key={user_id}>
                <Avatar className="header__image" url={user_avatar} />
              </div>
            </Link>
          </div>

          <div className="header__column">
            <div className="header__title title02">{caption}</div>
            <div className="header__title title04">{location}</div>
          </div>
        </div>

        <div className="card__content">
          <div className="content__">
            <div className="content__01 title01">{mytalent}</div>
            <div className="content__02 title01">{youtalent}</div>
          </div>
          {/* <Button
            // onClick={handleSubmit}
            className="apply__Button blueBG"
          >
            <span className="title01">신청하기</span>
          </Button> */}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 300px;
  ${(props) => (props.size === "sm" ? `height:200px;` : ``)};
  border-radius: 6px;
  padding: 30px;
  border:${(props) => props.theme.boxBorder};
  position:relative;
  box-shadow:${(props) => props.theme.boxShadow};
  transition: all 0.2s ease-in-out;
  :hover {
  /* background-color: ${(props) => props.theme.lightGreyColor}; */
    /* box-shadow:${(props) => props.theme.boxShadow}; */
  }

  & .card__image{
     position:absolute;
     width: 500px;
     height: 300px;
     top:0px;
     left:0px;
     
      & img {
        height:100%;
        width: 100%;
        opacity:0.5;
        border-radius: 6px;
      }
    
    }
  & .card__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    position:relative;


  }
  & .card__header {
    display: flex;
    align-items: center;
    height: 40px;
 
    & .card__column {
    }

    & .header__image {
      margin-right: 16px;
    }
    & .header__title:nth-child(1) {
      margin-bottom: 2px;
    }
  }

  & .card__content {
    height:calc(100% - 40px);
    & .content__ {
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* height:calc(100% - 60px); */
        height:100%;
    }

    & .content__01 {
    }

    & .content__02 {
      color: ${(props) => props.theme.blueColor};
    }

    & .apply__Button{
     flex-grow:1;
     height:60px; 
    }
  }
`;

export default Card;
