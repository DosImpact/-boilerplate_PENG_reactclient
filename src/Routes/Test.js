import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "_actions/log_actions";

function Test() {
  const { text, setText } = React.useState("TEST.js");
  const dispatch = useDispatch();

  const dispatchChild = React.useMemo(() => {
    // const result = dispatch(logIn("Fake Token"));
    // console.log("result", result);
    return <div>{text}</div>;
  }, [text]);

  return <>{dispatchChild}</>;
}

export default Test;
