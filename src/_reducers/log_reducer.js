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
      localStorage.setItem("token", action.payload.token);
      return state.set("token", action.payload.token).set("isLoggedIn", true);
    case LOG_TYPES.LOG_OUT:
      localStorage.removeItem("token");
      return state
        .set("token", null)
        .set("isLoggedIn", false)
        .set("userDate", null);
    case LOG_TYPES.LOG_USER_SAVE:
      console.log("log_reducer LOG_USER_SAVE", action.payload);
      return state.set("userDate", Map({ ...action.payload }));
    default:
      return state;
  }
};
