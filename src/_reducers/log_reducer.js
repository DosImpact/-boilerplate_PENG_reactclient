import { LOG_TYPES } from "../_actions/types";
import { Map } from "immutable";

const initState = Map({
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
  userDate: Map(
    JSON.parse(localStorage.getItem("userData")) || {
      id: "",
      avatar: "",
      name: "",
      email: "",
    }
  ),
});

export default (state = initState, action) => {
  switch (action.type) {
    case LOG_TYPES.LOG_IN:
      return state
        .update("token", action.payload.token)
        .update("isLoggedIn", true);
    case LOG_TYPES.LOG_OUT:
      return state
        .update("token", null)
        .update("isLoggedIn", false)
        .update("userDate", null);
    case LOG_TYPES.LOG_USER_SAVE:
      console.log("log_reducer LOG_USER_SAVE", action.payload);
      return state.set("userDate", Map({ ...action.payload }));
    default:
      return state;
  }
};
