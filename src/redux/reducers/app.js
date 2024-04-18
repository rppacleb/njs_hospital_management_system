const initialState = {};

const reducers = (state = initialState, action) => {
  const actionHandlers = {
    SET_STATE: () => ({
      ...state,
    }),
  };

  const actionHandler = actionHandlers[action.type];
  return Boolean(actionHandler) ? actionHandler() : state;
};

export default reducers;
