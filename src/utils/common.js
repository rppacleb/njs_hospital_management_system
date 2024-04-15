import { rqx } from "@src/api";
import { LINK_ACTIONS } from "./enum";
import { isValidString } from "./string";

export const isNotNull = (value) => {
  return value != null;
};

export const htmlParser = (html = "", isLoggedIn = false) => {
  if (!isValidString(html)) {
    return "";
  }

  if (isLoggedIn) {
    html = html.replace(/actionGroup/g, "actionGroup hidden");
  }

  // map class btnAction with MuiButton
  html = html.replace(
    /btnAction/g,
    "btnAction MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
  );

  return html;
};

export const redirect = (action, slug) => {
  const { SAME_TAB, NEW_TAB, POPUP } = LINK_ACTIONS;

  if (action === POPUP) return window.open(slug, "", action);
  if (action === NEW_TAB) return window.open(slug, action);
  if (action === SAME_TAB) return window.open(slug, action);
  return false;
};

// Server Side Request ( API Request with try catch )
export const SSR = async (action, service, payload) => {
  try {
    const result = await rqx[action](service, payload);
    return {
      msg: "success",
      result,
    };
  } catch (err) {
    return {
      msg: "err",
      err,
    };
  }
};
