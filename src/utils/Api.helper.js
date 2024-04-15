export const getMainPathAPI = (key = "euro-thailand") => {
  //@DESC: This function is subject to change -Jehu
  // const toChangeKey = 'euro-thailand';
  let url = `/api/${key}`;
  return url;
};

export const accessNestedData = (data, keys) => {
  return keys.reduce((result, key) => {
    const lastItem = keys[keys.length - 1];
    const resultFinal =
      lastItem === key && keys.length
        ? result[key]
        : result[key].data.attributes;
    return result || !!resultFinal ? resultFinal : undefined;
  }, data);
};
