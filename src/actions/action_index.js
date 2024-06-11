// @flow

import { FETCH_QUOTE, ADD_ROW, ITEM_HAS_ERRORED, ITEM_IS_LOADING } from "./types";

export function itemHasErrored(bool: boolean) {
  return {
    type: ITEM_HAS_ERRORED,
    hasErrored: bool
  };
}

export function itemIsLoading(bool: boolean) {
  return {
    type: ITEM_IS_LOADING,
    isLoading: bool
  };
}

export function fetchData() {

  return (dispatch: Dispatch<*>) => {
    dispatch(itemIsLoading(true));
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(fetchQuote(items)))
      .catch(() => dispatch(itemHasErrored(true)));
  };
}

export function fetchQuote(quote: string) {
  return {
    type: FETCH_QUOTE,
    payload: quote
  };
}

export function addRowToList(data: Array<any>) {
  return {
    type: ADD_ROW,
    payload: data
  }
}

export function addRowReturnNewQuote(data: Array<any>) {
 return (dispatch: Dispatch<*>) => {
  dispatch(addRowToList(data))
  dispatch(fetchData())
 }
}
