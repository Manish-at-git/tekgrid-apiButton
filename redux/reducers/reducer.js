import { LOAD_DATA_SUCCESS } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: "",
};

export default function reduce(state = initialState, action) {
  console.log(action.data, "third");
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload.state, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else if (action.type === LOAD_DATA_SUCCESS)
    return {
      ...state,
      data: action.data.value,
    };
  else {
    return state;
  }
}
