import React, { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [name, setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : initialValue // If the key is present in the local storage, then it will return the value of the key, otherwise it will return the initial value.
  );

  useEffect(() => {
    localStorage.setItem(key, name);
  }, [name, key]); // It will store the name in the local storage when the name is changed and the key is changed. It is similar to componentDidMount, componentDidUpdate and componentWillUnmount lifecycle methods in class component. It is used to perform side effects in functional component in React.

  return [name, setName]; // It will return the name and setName in an array. It is similar to useState hook.
};

export default useLocalStorage;
