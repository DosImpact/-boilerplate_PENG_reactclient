import React from "react";
import ReactDOM from "react-dom";

import { client } from "./Apollo/Client";
import { ApolloProvider } from "@apollo/client";
import App from "./components/App";

import Reducer from "./_reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
