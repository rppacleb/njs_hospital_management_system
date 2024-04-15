const defaultState = {
  data: [],
  errors: null,
  success: null,
  isLoading: false,
  status: null,
};

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  accessKey: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "POST_VERIFY_NUMBER":
      return Object.assign({}, state, {
        verification: {
          isLoading: true,
        },
      });

    case "POST_VERIFY_NUMBER_SUCCESS":
      return Object.assign({}, state, {
        verification: {
          isLoading: false,
          error: false,
          success: true,
          data: action.payload,
          status: action.payload.status,
        },
      });

    case "POST_VERIFY_NUMBER_FAILED":
      return Object.assign({}, state, {
        verification: {
          isLoading: false,
          error: true,
          success: false,
          data: action.payload.data,
          status: action.payload.status,
        },
      });

    default:
      return state;
  }
};

export default reducers;
