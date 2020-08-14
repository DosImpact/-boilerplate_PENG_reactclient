import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "Routes/Authen/AuthContainer";

import DetailPost from "Routes/DetailPost/DetailPostContainer";
import Newpost from "Routes/Newpost/index";
import Explore from "../Routes/Explore";
// import Search from "../Routes/Search";
import SearchPost from "Routes/SearchPost/SearchPost";
import Profile from "../Routes/Profile";
import Test from "../Routes/Test";
import Home from "../Routes/Home";
import MyPost from "../Routes/MyPost/MyPost";

import auth from "Hooks/auth";

// options
// null : every one can go in
// false : only logged out user can go in
// true : only logged in user can go in

const LoggedInRoutes = () => (
  <Switch>
    {/* public Section */}
    <Route exact path="/" component={auth(Home, null)}></Route>
    <Route exact path="/search/:term" component={auth(SearchPost, null)} />
    <Route exact path="/test" component={auth(Test, null)} />

    {/* 비회원 Section */}
    <Route exact path="/auth" component={auth(Auth, false)}></Route>

    {/* post Section */}
    <Route exact path="/mypost" component={auth(MyPost, true)}></Route>
    <Route exact path="/newpost" component={auth(Newpost, true)}></Route>
    <Route path="/post/:id" component={auth(DetailPost, true)}></Route>
    {/* User Section */}
    <Route path="/user/:name" component={auth(Profile, true)} />

    {/* temp Section */}
    <Route exact path="/feed" component={auth(Feed, true)}></Route>
    <Route exact path="/explore" component={auth(Explore, true)} />
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
