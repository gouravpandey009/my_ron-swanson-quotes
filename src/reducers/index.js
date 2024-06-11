// @flow

import { combineReducers } from "redux";

import fetchQuoteReducer from "./reducer_fetchQuote";
import addRowToList from "./reducer_addRowToList";

const appReducer = combineReducers({
  quote: fetchQuoteReducer,
  row: addRowToList
});

const initialState = {
  quote: 0,
  row: 0
}

const rootReducer = (state :Object = initialState, action: Object) => {
  return appReducer(state, action);
};

export default rootReducer;
