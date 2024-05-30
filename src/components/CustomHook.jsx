import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CustomHook = () => {
  const [name, setName] = useLocalStorage("username", "");
  // useLocalStorage is a custom hook which is used to store the name in local storage and to get the name from local storage when the component is rendered. It takes two arguments, first is key and second is initial value. It returns an array with two elements, first is name and second is setName.

  const [id, setId] = useLocalStorage("userId", "");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h2>Hello, {name}!</h2>
      <input
        type="text"
        placeholder="Enter your id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <h2>Your Id : {id}</h2>
    </div>
  );
};

export default CustomHook;
