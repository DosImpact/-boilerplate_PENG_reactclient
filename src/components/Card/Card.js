import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Avatar from "components/Avatar";
import Button from "components/Button";

function Card({ className, ...props }) {
  const { id, location, caption, mytalent, youtalent, user } = props;
  const { id: user_id, avatar: user_avatar, name: user_name } = user;

  return (
    <Container className={className}>
      <div className="card__wrapper">
        <div className="card__header">
          <div className="header__column">
            <div className="header__profile">
              <Avatar className="header__image" url={user_avatar} />
            </div>
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
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 400px;
  /* background-color: ${(props) => props.theme.lightGreyColor}; */
  border-radius: 6px;
  padding: 30px;
  border:${(props) => props.theme.boxBorder}
  
  & .card__wrapper {
    width: 100%;
    height: 100%;
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
    height: 100%;
    & .content__ {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    & .content__01 {
    }

    & .content__02 {
      color: ${(props) => props.theme.blueColor};
    }
  }
`;

export default Card;
