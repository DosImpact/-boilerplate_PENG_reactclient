import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "Routes/Authen/AuthContainer";

import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
import Test from "../Routes/Test";
import Home from "../Routes/Home";

import auth from "Hooks/auth";

// options
// null : every one can go in
// false : only logged out user can go in
// true : only logged in user can go in

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={auth(Home, null)}></Route>
    <Route exact path="/auth" component={auth(Auth, false)}></Route>
    <Route exact path="/feed" component={auth(Feed, true)}></Route>
    <Route exact path="/explore" component={auth(Explore, true)} />
    <Route exact path="/search" component={auth(Search, null)} />
    <Route exact path="/test" component={auth(Test, null)} />
    <Route exact path="/user/:username" component={auth(Profile, true)} />
    <Redirect from="*" to="/" />
  </Switch>
);

// const LoggedOutRoutes = () => (
//   <Switch>
//     <Route exact path="/" component={Auth}></Route>
//     <Redirect from="*" to="/" />
//   </Switch>
// );

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedInRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
