import React from "react";
import Button from "../Button";

export default ({ isFollowing, onClick }) => (
  <Button
    color="#3C82FF"
    text={isFollowing ? "Unfollow" : "Follow"}
    onClick={onClick}
  />
);
