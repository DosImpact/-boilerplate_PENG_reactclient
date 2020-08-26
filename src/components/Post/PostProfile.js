import React from "react";
import {
  FaRegComment,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
} from "react-icons/fa";

function PostProfile({
  className,
  commentCount,
  handleToggleLike,
  isLiked,
  likeCount,
}) {
  return (
    <div className={className}>
      <div className="item">
        <FaRegComment className="icon" />
        <span className="count">{commentCount}</span>
      </div>

      <div
        className="item"
        onClick={() => handleToggleLike()}
        style={{ cursor: "pointer" }}
      >
        {isLiked ? (
          <FaHeart className="icon" />
        ) : (
          <FaRegHeart className="icon" />
        )}

        <span className="count">{likeCount}</span>
      </div>

      <div className="item">
        <FaRegBookmark className="icon" />
        <span className="count">0</span>
      </div>
    </div>
  );
}

export default PostProfile;
