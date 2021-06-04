export const saveTimer = (currentTimeInSeconds) => {
  localStorage.setItem("timer", currentTimeInSeconds.toString());
};

export const loadTimer = () => {
  const timer = Number.parseInt(localStorage.getItem("timer"));
  if (Number.isNaN(timer)) {
    return 1800;
  }
  return timer;
};
