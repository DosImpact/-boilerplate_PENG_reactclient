import React from "react";
import CardPresenter from "./CardPresenter";

function CardContainer({ className, user, size = "md", ...props }) {
  return (
    <CardPresenter className={className} size={size} post={props} user={user} />
  );
}

export default CardContainer;
