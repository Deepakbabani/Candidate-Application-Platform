export const showTitleCase = (str) => {
  return str ? str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase()) : "";
};

export const getErrorMessage = (error) => {
  const message =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();
  return message;
};
