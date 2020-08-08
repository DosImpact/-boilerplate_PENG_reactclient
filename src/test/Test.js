import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "_actions/log_actions";

function Test() {
  const dispatch = useDispatch();
  const result = dispatch(logIn("Fake Toekn"));
  console.log("result", result);
  return <div>Tets.js</div>;
}

export default Test;
