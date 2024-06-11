import { FETCH_QUOTE } from "../actions/types";

export default function(state = 0, action) {
  switch (action.type) {
    case FETCH_QUOTE:
      return action.payload;
      // no default
  }
  return state;
}
