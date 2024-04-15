import processAction from "@utils/processAction";

export const postVerifyNumber = (body) => {
  return async (dispatch) => {
    await processAction(dispatch, {
      action: "post",
      payload: body,
      service: "/verifications",
      request: "POST_VERIFY_NUMBER",
      success: "POST_VERIFY_NUMBER_SUCCESS",
      failed: "POST_VERIFY_NUMBER_FAILED",
    });
  };
};

// export const postLogout = () => (dispatch) => dispatch({ type: 'POST_LOGOUT' });
