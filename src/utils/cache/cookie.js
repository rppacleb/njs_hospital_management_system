import jscookie from "js-cookie";

export default class COOKIE {
  get(key) {
    return jscookie.get(key);
  }
}

export const cookie = new COOKIE();
