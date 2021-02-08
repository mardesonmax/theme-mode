import { useEffect, useState } from 'react'

const usePersistedState = (key, initialState) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default usePersistedState;
