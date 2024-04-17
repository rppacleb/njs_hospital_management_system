const initialState = {};

const reducers = (state = initialState, action) => {
  const actionHandlers = {
    SET_FORM_SUBMITTED: () => ({
      ...state,
      form: {
        ...state.form,
        submitted: action.payload,
      },
    }),
  };

  const actionHandler = actionHandlers[action.type];
  return Boolean(actionHandler) ? actionHandler() : state;
};

export default reducers;
