import { INPUTS } from "@src/utils/enum";

export const toggleForm = (method, toggled, inputs, id) => {
  return async (dispatch, getState) => {
    const currentState = getState();
    let payload = {
      ...currentState.hospitals.form,
      method,
      toggled,
      inputs: INPUTS,
    };
    if (inputs !== null) {
      payload.inputs = inputs;
      payload.id = id;
    }

    dispatch({
      type: "SET_FORM_STATE",
      payload,
    });
  };
};

export const togglePreview = (payload) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SET_PREVIEW_STATE",
      payload,
    });
  };
};

export const setHospitalList = (list) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "SET_LIST_STATE",
      payload: list,
    });
  };
};
