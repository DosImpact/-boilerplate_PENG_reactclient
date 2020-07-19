import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Footer from "./Footer";
import Header from "./Header";

import { useSelector } from "react-redux";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <HashRouter>
          <Wrapper>
            <>
              <Header />
              <Routes isLoggedIn={isLoggedIn} />
              <Footer />
            </>
          </Wrapper>
        </HashRouter>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>
    </ThemeProvider>
  );
};
