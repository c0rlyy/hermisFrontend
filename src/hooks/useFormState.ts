import { useState } from 'react';

// custom hook for changing state in forms
// dunno about the returning of setter for form state kinda usless
function useFormState<T extends Record<string,any>>(initialState: T) {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return { formState, handleChange, setFormState };
}

export default useFormState;
