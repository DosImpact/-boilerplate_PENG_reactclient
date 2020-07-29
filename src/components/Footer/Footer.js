import React from "react";
import styled from "styled-components";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaAppStore,
  FaAndroid,
} from "react-icons/fa";

const iconList = [
  { href: "#", icon: FaFacebookSquare },
  { href: "#", icon: FaInstagram },
  { href: "#", icon: FaTwitch },
  { href: "#", icon: FaTwitter },
  { href: "#", icon: FaYoutube },
  { href: "#", icon: FaAppStore },
  { href: "#", icon: FaAndroid },
];

const footerList = [
  { href: "#", text: "호스트 지원" },
  { href: "#", text: "단체 신청" },
  { href: "#", text: "기업복지 신청" },
];

const termsUsages = [
  { href: "#", text: "이용약관" },
  { href: "#", text: "개인정보 처리 방침" },
  { href: "#", text: "위치기반 서비스 이용약관" },
];

function Footer() {
  return (
    <Container>
      <Wrapper className="footer">
        <div className="footer__nav">
          {footerList.map((e, idx) => (
            <div className="footer__nav__item" key={idx}>
              <a href={e.href}>
                <span>{e.text}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="footer__info">
          <div className="footer__info__column">
            <div className="title01">고객센터</div>
            <div className="title03">이메일 : ypd03008@gmail.com</div>
            <div className="title03">고객센터 : 010-4696-1624</div>
            <div className="title03">
              업무시간 : 평일 11:00 - 18:00 (점심: 13:00 - 14:00)
            </div>
          </div>

          <hr className="title05" />

          <div className="footer__info__column">
            <div className="title01">Talent Trade</div>
            <div className="title04">
              ㈜재능무역 {new Date().getFullYear()} &copy; | 사업자 등록번호 :
              261-00-00000
            </div>
            <div className="title04">
              통신판매업신고번호 : 0000-서울성동-00000
            </div>
            <div className="title04">
              대표 : 김도영 | 개인정보 관리 책임자 : 김도영
            </div>
            <div className="title04">
              서울시 성동구 왕십리로 115 헤이그라운드 서울숲점 G601
            </div>
            <div className="title04">
              ㈜재능무역은 통신판매중개자로서 거래당사자가 아니며, 호스트가
              등록한 상품정보 및 거래에 대해 ㈜재능무역은 일체의 책임을 지지
              않습니다.
            </div>
            <div className="title04"></div>
            <div className="title04">
              NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시,
              저희 사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다. 가입
              확인
            </div>
          </div>
          <div className="footer__usages">
            {termsUsages.map((e, idx) => (
              <div className="footer__usages__items title04" key={idx}>
                <a href={e.href}>
                  <span>{e.text}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__links">
          <div className="icons__list">
            {iconList.map((e, idx) => (
              <div className="icons__item " key={idx}>
                <a href={e.href}>{e.icon()}</a>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  background-color: ${(props) => props.theme.whiteColor};
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0px auto;
  padding: 40px 20px;

  & .title01 {
    padding: 15px 0px;
  }
  & .title03 {
    padding: 5px 0px;
  }
  & .title04 {
    margin: 6px 0px;
    font-size: 12px;
  }

  & .footer__nav {
    display: flex;
    font-size: 15px;
    font-weight: 700;
    & .footer__nav__item {
      margin-right: 30px;
      & :hover {
        text-decoration: underline;
        font-weight: 800;
      }
    }
  }

  & .footer__info {
    & .footer__info__column {
      padding: 30px 0px;
    }

    & .footer__usages {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      & .footer__usages__items {
        margin-right: 20px;
      }
    }
  }

  & .footer__links {
    padding: 30px 0px;
    & .icons__list {
      opacity: 0.6;
      font-size: 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      & .icons__item {
        margin-right: 20px;
      }
    }
  }
`;
