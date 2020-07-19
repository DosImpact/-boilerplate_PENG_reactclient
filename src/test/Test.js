import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_USER = gql`
  query getAllUsers {
    allUsers {
      id
      name
      email
      loginSecret
    }
    cartItems @client
  }
`;

// const GET_PRODUCT_DETAILS = gql`
//   query ProductDetails {
//     product {
//       isInCart @client
//     }
//   }
// `;
const GET_PRODUCT_DETAILS = gql`
  query ProductDetails {
    cartItems @client
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function Test() {
  const { data: IS_LOGGED_IN_data } = useQuery(IS_LOGGED_IN);
  const { data: GET_ALL_USER_data } = useQuery(GET_ALL_USER);
  const { data: GET_PRODUCT_DETAILS_data } = useQuery(GET_PRODUCT_DETAILS);
  console.log("GET_ALL_USER_data", GET_ALL_USER_data);
  console.log("GET_PRODUCT_DETAILS_data", GET_PRODUCT_DETAILS_data);
  console.log("IS_LOGGED_IN_data", IS_LOGGED_IN_data);
  return <div>Tets.js</div>;
}

export default Test;
