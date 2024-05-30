import React, { useCallback, useState } from "react";
import Header from "./Header";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // const newFn = () => {}; // This function will re-render the Header component every time the button is clicked because the Header component is not cached and will re-render every time the parent component re-renders.

  const newFn = useCallback(() => {}, []); // This function will not re-render the Header component every time the button is clicked because the Header component is cached and will not re-render if the props have not changed.
  // The second argument of useCallback is an array of dependencies. If any of the dependencies change, the function will be re-created. If the dependencies do not change, the function will not be re-created.

  return (
    <div>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default UseCallback;
