import { INPUTS } from "@src/utils/enum";

const initialState = {
  list: [],
  preview: null,
  form: {
    method: null,
    toggled: false,
    inputs: INPUTS,
    confirmation: { toggled: false, type: "" },
    submitted: false,
    id: null,
  },
};

const reducers = (state = initialState, action) => {
  const actionHandlers = {
    SET_FORM_STATE: () => ({
      ...state,
      form: {
        ...action.payload,
      },
    }),
    SET_LIST_STATE: () => ({
      ...state,
      list: [...action.payload],
    }),
    SET_PREVIEW_STATE: () => ({
      ...state,
      preview: action.payload,
    }),
  };

  const actionHandler = actionHandlers[action.type];
  return Boolean(actionHandler) ? actionHandler() : state;
};

export default reducers;
