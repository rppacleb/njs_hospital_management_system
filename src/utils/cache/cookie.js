import jscookie from "js-cookie";

export default class COOKIE {
  constructor() {
    this.name = "hms_app_session";
    this.attributes = {
      expires: 7,
      path: "/",
      sameSite: "strict",
    };
  }

  set(name = this.name, value, customAttr) {
    jscookie.set(name, value, { ...this.attributes, ...customAttr });

    return {
      msg: "success",
    };
  }

  get(name = this.name) {
    return jscookie.get(name);
  }

  remove(name = this.name) {
    jscookie.set(name, { ...this.attributes });

    return {
      msg: "success",
    };
  }
}

export const cookie = new COOKIE();
