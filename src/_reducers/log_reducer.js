import { LOG_TYPES } from "../_actions/types";
import { Map } from "immutable";

const initState = Map({
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
});

export default (state = initState, action) => {
  switch (action.type) {
    case LOG_TYPES.LOG_IN:
      return state
        .update("token", action.payload.token)
        .update("isLoggedIn", true);
    case LOG_TYPES.LOG_OUT:
      return state.update("token", null).update("isLoggedIn", false);
    default:
      return state;
  }
};
