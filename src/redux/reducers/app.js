const initialState = {
  navMenus: [],
  navButtons: [],
  isLoading: false,
  settings: {},
};

const reducers = (state = initialState, action) => {
  const actionHandlers = {
    GET_LAYOUT: () =>
      Object.assign({}, state, {
        isLoading: true,
      }),
    GET_LAYOUT_SUCCESS: () =>
      Object.assign({}, state, {
        ...action.payload,
      }),
    GET_LAYOUT_FAILED: () =>
      Object.assign({}, state, {
        errors: true,
        isLoading: false,
      }),
  };

  const actionHandler = actionHandlers[action.type];
  return Boolean(actionHandler) ? actionHandler() : state;
};

export default reducers;
