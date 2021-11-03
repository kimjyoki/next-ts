import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";

import issuesDisplayWrapper from "../features/issuesDisplayWrapper";

export interface State {
  tick: string;
}

const rootReducer = (state: State = { tick: "init" }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case "TICK":
      return { ...state, ...action.payload };
    default:
      return combineReducers({
        issuesDisplayWrapper,
      });
  }
};

export default rootReducer;
