import { useState } from "react";

export const useFormField = (defaultValue = "", emptyValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => {
    setValue(emptyValue);
  };

  return { value, onChange, clear };
};
