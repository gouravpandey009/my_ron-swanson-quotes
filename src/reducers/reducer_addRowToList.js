import { ADD_ROW } from "../actions/types";

export default function(state = 0, action) {
  switch (action.type) {
    case ADD_ROW:
      return action.payload;
      // no default
  }
  return state;
}
