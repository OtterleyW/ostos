import { createStore } from "redux";

function mooReducer(state = { moos: 0 }, action) {
  if (action.type === "MOO") {
    return {
      ...state,
      moos: state.moos + 1
    };
  }
  return state;
}

export default function configureStore() {
  return createStore(mooReducer);
}
