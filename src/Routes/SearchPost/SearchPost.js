import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { SEARCH_POST } from "./SearchPostGQL";

import { useSelector } from "react-redux";

import NoResult from "components/NoResult";
import Card from "components/Card/CardContainer";
import Loader from "components/Loader";

function SearchPost(props) {
  const params = useParams();
  // console.log(params);
  // const term = "강남";
  const log = useSelector((state) => state.log.toJS());
  const { data, loading, error } = useQuery(SEARCH_POST, {
    variables: {
      term: params.term,
    },
  });
  console.log("SearchPost rendering", data, loading, error);
  if (error) {
    props.history.push("/");
  }

  return (
    <Container className="SearchPost__outerContainer">
      <div className="SearchPost__innerContainer">
        <div className="card__list">
          {loading && <Loader />}
          {!loading && data?.searchPost && data?.searchPost.length === 0 && (
            <NoResult text="결과가 없습니다 :(" />
          )}
          {!loading &&
            data &&
            data?.searchPost &&
            data.searchPost.map((e, idx) => {
              return (
                <Card
                  className="card__item"
                  key={idx}
                  user={log.userData}
                  {...e}
                />
              );
            })}
        </div>
      </div>
    </Container>
  );
}

export default SearchPost;

const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
  & .SearchPost__innerContainer {
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
