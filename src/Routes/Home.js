import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

import Card from "components/Card/CardContainer";
import Loader from "components/Loader";

const getAllPost = gql`
  query getAllPost {
    allPosts {
      id
      location
      caption
      youtalent
      mytalent
      user {
        id
        avatar
        name
      }
    }
  }
`;

function Home(props) {
  const { data, loading, error } = useQuery(getAllPost, {
    // fetchPolicy: "network-only",
  });
  console.log("Home rendering", data, loading, error);
  if (error) {
    props.history.push("/");
  }

  return (
    <Container className="Home__outerContainer">
      <div className="Home__innerContainer">
        <div className="card__list">
          {loading && <Loader />}
          {!loading &&
            data &&
            data?.allPosts &&
            data.allPosts.map((e, idx) => {
              return <Card className="card__item" key={idx} {...e} />;
            })}
        </div>
      </div>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
  & .Home__innerContainer {
    width: 100%;
    max-width: 1050px;
    margin: auto;
  }

  & .card__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  & .card__item {
    margin: 10px;
  }
`;

/*
  Test Post

  avator
*/

// const allPosts = [
//   {
//     id: "ckcpz292n9ptw0999xkd2ls5k",
//     location: "DosRoom",
//     caption: "Prisma World",
//     youtalent: "포토샵 디자인",
//     mytalent: "프로그래밍",
//     user: {
//       id: "ckcpvk8ki9clw0999hvz3tdgz",
//       avatar:
//         "https://specials-images.forbesimg.com/imageserve/1207763472/960x0.jpg?fit=scale",
//       name: "doyoung",
//     },
//   },
//   {
//     id: "ckcsp8f73fn3009997p2g84ua",
//     location: "The love",
//     caption: "World",
//     youtalent: "singing",
//     mytalent: "program",
//     user: {
//       id: "ckcsp2s4afmob0999vglwz7d9",
//       avatar: "https://t1.daumcdn.net/cfile/blog/2519975054BC831933",
//       name: "dosimpact",
//     },
//   },
// ];
