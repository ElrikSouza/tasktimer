export const joinClassname = (baseName, className) => {
  if (typeof className != "string" || className.trim() === "") {
    return baseName;
  }

  return [baseName, className].join(" ");
};
