import { LOG_TYPES } from "./types";

export const logIn = (token) => {
  return {
    type: LOG_TYPES.LOG_IN,
    payload: { token },
  };
};

export const logOut = () => {
  return {
    type: LOG_TYPES.LOG_OUT,
  };
};
