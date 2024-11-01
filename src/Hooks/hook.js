import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  // array return
  // return [value, handleChange];
  return {
    value,
    onChange,
  };
};

export default useInputState;
