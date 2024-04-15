import { useMemo } from "react";
import thunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

let store;

function makeStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
}
