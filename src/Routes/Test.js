import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { logUserSave } from "_actions/log_actions";
function Test() {
  const log = useSelector((store) => store.log.toJS());
  console.log("log", log);
  const dispatch = useDispatch();
  //   let me = null;
  const [me, setMe] = useState(null);
  useEffect(async () => {
    const data = await dispatch(logUserSave(log.token));
    setMe(data);
  }, []);
  return (
    <>
      <h1>TEST</h1>
      <div>{JSON.stringify(me)}</div>
    </>
  );
}

export default Test;
