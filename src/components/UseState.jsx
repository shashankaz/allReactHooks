import React, { useState } from "react";

const UseState = () => {
  // const [color, setColor] = useState("Red");
  // useState is a hook that allows you to have state variables in functional components (instead of just in class components)

  //   const [car, setCar] = useState({
  //     brand: "Ford",
  //     model: "Mustang",
  //     year: 1964,
  //     color: "red",
  //   });

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment by 1</button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increment by 4
      </button>

      {/* <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} form {car.year}
      </p>
      <button
        onClick={() => {
          setCar((prev) => {
            return { ...prev, color: "blue" };
          });
        }}
      >
        Blue
      </button> */}

      {/* <h1>My favorite color is {color}!!</h1>
      <button
        onClick={() => {
          setColor("Blue");
        }}
      >
        Blue
      </button> */}
    </div>
  );
};

export default UseState;
