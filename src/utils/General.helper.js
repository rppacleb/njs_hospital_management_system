//@DESC: Import starts here...
// import { useRouter } from 'next/router';

//@DESC: Functions starts here...
export const getRouteExtras = (asPath) => {
  const restURL = {};
  const asPathItems = asPath.split("?")[1]?.split("&");
  if (!!asPathItems) {
    asPathItems.forEach((i) => {
      const key = i.split("=")[0];
      const val = i.split("=")[1];
      restURL[key] = val.replace("%20", " ");
    });
  }
  return restURL;
};

export const getRouterParam = (path) => {
  return path, null, { shallow: true };
};

export const getTagsData = (data, allTagIDs) => {
  const tagsOnRoute = [];
  if (!!Object.keys(data).length) {
    Object.keys({ ...data }).forEach((id) => {
      if (allTagIDs.includes(id)) {
        tagsOnRoute.push({
          id,
          label: data[id],
        });
      }
    });
  }
  return tagsOnRoute;
};

export const sortByDate = (arr, key) => {
  return (
    [...arr].sort(
      (a, b) =>
        new Date(b[key || "publishedAt"]) - new Date(a[key || "publishedAt"])
    ) || []
  );
};

export const dateFormatter = (isoDateString) => {
  const date = new Date(isoDateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const amPM = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")} ${formattedHours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPM}`;
  return formattedDate;
};

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

export const setLocalStorageWithExpiry = (key, value, secondsUntilExpiry) => {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + secondsUntilExpiry * 1000,
  };
  setLocalStorage(key, JSON.stringify(item));
};

export const getLocalStorageWithExpiry = (key) => {
  const item = JSON.parse(getLocalStorage(key));
  if (!item) return null;
  const now = new Date();
  if (now.getTime() > item.expiry) {
    removeLocalStorage(key);
    return null;
  }
  return item.value;
};
