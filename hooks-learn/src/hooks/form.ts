import { useState, ChangeEvent } from 'react';

export const useFormInput = () => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.trim() === '') {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  return { value, onChange: inputChangeHandler, valid };
};
