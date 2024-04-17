import { useState } from "react";

export const AuthStates = () => {
  const [form, setForm] = useState({
    type: null,
    submitted: false,
    err_msg: "",
    inputs: {
      email: { value: "", stat: false, msg: "", disabled: false },
      password: {
        value: "",
        stat: false,
        msg: "",
        show: false,
        disabled: false,
      },
    },
  });

  return {
    form: { data: form, set: setForm },
  };
};
