import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import useInput from "../../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import { useMutation } from "@apollo/client";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostGQL";
// import { toast } from "react-toastify";

import * as Yup from "yup";
import { useFormik } from "formik";

/*
  mutation을 wait하는게 아니라, useState로 미리 바꾸고 나서, 비동기적으로 처리하기
 */

const PostContainer = ({
  className,
  id,
  location,
  caption,
  mytalent,
  youtalent,
  content,
  user,
  likeCount,
  isLiked,
  commentCount,
  comments,
  createdAt,
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  // const [currentItem, setCurrentItem] = useState(0);
  // const [selfComments, setSelfComments] = useState([]);
  // const comment = useInput("");

  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });
  const [addCommentMutation] = useMutation(ADD_COMMENT);

  const formik = useFormik({
    initialValues: { comment: "" },
    onSubmit: (data, { setSubmitting }) => {
      setSubmitting(true);
      console.log(data);
      // addCommentMutation({
      //   variables: {
      //     postId: id,
      //     text: data.comment,
      //   },
      // });
      setSubmitting(false);
    },
    validationSchema: Yup.object().shape({
      comment: Yup.string().required("required"),
    }),
  });

  const toggleLike = () => {
    toggleLikeMutation();
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }
  };

  return (
    <PostPresenter
      className={className}
      id={id}
      location={location}
      caption={caption}
      mytalent={mytalent}
      youtalent={youtalent}
      content={content}
      user={user}
      likeCount={likeCount}
      commentCount={commentCount}
      comments={comments}
      createdAt={createdAt}
    />
  );
};

// PostContainer.propTypes = {
//   id: PropTypes.string.isRequired,
//   user: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     avatar: PropTypes.string,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   files: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   likeCount: PropTypes.number.isRequired,
//   isLiked: PropTypes.bool.isRequired,
//   comments: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       user: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//       }).isRequired,
//     })
//   ).isRequired,
//   caption: PropTypes.string.isRequired,
//   location: PropTypes.string,
//   createdAt: PropTypes.string.isRequired,
// };

export default PostContainer;
