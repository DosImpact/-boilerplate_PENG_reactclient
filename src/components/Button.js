import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${(props) => props.color};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
`;

const Button = ({ className, text, onClick, children, color = "#3C82FF" }) => (
  <Container className={className} onClick={onClick} color={color}>
    {text ? text : children}
  </Container>
);

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
