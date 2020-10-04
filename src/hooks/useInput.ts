import React, { useState } from 'react';

const useInput = (intialValue: string = '') => {
  const [value, setValue] = useState<string>(intialValue);
  const reset = () => {
    setValue(intialValue);
  };
  const bind = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    }
  };
  return [value, bind, reset];
};

export default useInput;
