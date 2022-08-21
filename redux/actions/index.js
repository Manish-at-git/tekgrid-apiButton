import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_FAIL } from "../actionTypes";

export const getData = () => {
  console.log("first");
  return {
    type: LOAD_DATA,
  };
};

export const setData = (data) => {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
};
export const setErrorData = (error) => {
  return {
    type: LOAD_DATA_FAIL,
    error,
  };
};
