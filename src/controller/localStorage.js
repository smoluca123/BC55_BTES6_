const setLocalStorage = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || null;
};

export { setLocalStorage, getLocalStorage };
