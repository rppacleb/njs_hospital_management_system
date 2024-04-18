export function isValidString(param) {
  return typeof param === "string" && param !== "";
}

export const isNull = (value) => {
  return value === null;
};

export const isUndefined = (value) => {
  return value === undefined;
};
