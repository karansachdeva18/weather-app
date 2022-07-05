export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  let result = localStorage.getItem(key);
  return result ? JSON.parse(result) : null;
};
