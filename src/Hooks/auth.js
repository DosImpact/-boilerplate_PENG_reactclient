import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// options
// null : every one can go in
// false : only logged out user can go in
// true : only logged in user can go in
export default function (SpecificComponent, options, adminRoute = null) {
  function AuthCheck(props) {
    let user = useSelector((state) => state.log.toJS());
    // console.log("auth middle.js", options, user, props);
    // not loggedin state
    useEffect(() => {
      if (!user.isLoggedIn) {
        if (options) {
          props.history.push("/auth");
        }
        // loggedin state
      } else {
        if (adminRoute && !user?.isAdmin) {
          props.history.push("/");
        }
        if (options === false) {
          props.history.push("/");
        }
      }
    }, []);

    return <SpecificComponent user={user} {...props} />;
  }
  return AuthCheck;
}
