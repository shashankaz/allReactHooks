import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  // const [value, setValue] = useState(0);
  // const count = useRef(0);

  // useEffect(() => {
  //   // setCount((prev) => prev + 1); // this will run every time the component renders and goes into infinite loop
  //   count.current = count.current + 1;
  // });

  const inputElem = useRef(); // this will create a reference to the input field and used to access the dom element directly

  const btnClicked = () => {
    console.log(inputElem.current); // this will log the input field element
    inputElem.current.style.background = "red"; // this will change the background color of input field to red
  };

  return (
    <div>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}>Chick Here</button>

      {/* <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
      <h2>Render count : {count.current}</h2> */}
    </div>
  );
};

export default UseRef;
