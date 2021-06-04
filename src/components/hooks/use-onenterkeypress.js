export const useOnEnterKeyPress = (callback) => (event) => {
  if (event.code === "Enter") {
    event.preventDefault();
    callback();
  }
};
