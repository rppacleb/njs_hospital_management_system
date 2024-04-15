import { rqx } from "@src/api";

// USE processAction() if an api request requires 3 state change (CLEAR TO INITIAL STATE, UPDATE WHEN SUCCESS, UPDATE WHEN FAILED)
const processAction = async (dispatch, opt) => {
  if (Boolean(opt.request))
    dispatch({ type: opt.request, payload: opt.initial_payload });

  const result = await rqx[opt.action](opt.service, opt.payload);

  if (result.error) {
    if (Boolean(opt.failed)) dispatch({ type: opt.failed, payload: result });
  } else {
    if (Boolean(opt.success))
      dispatch({ type: opt.success, payload: result?.data });
  }

  return result;
};

export default processAction;

// PROPERTIES
// dispatch = redux dispatch
// opt = {
//   action: 'get/post/put/patch/delete',
//   service: '/api-url',
//   payload: 'String params if action is get, Body if not',
//   initial_payload: 'Initial state value | OPTIONAL',
//   request: 'reducer for Initial Request',
//   failed:  'redcuer for failed request',
//   success: 'reducer for success request'
// }
