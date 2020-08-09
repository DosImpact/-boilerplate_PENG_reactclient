import React from "react";
import CardPresenter from "./CardPresenter";

function CardContainer({ className, user, ...props }) {
  return <CardPresenter className={className} post={props} user={user} />;
}

export default CardContainer;
