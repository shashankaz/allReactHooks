import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(number) {
    // This function is called every time the component re-renders when counter value changes because it is not memoized using useMemo hook
    console.log("Calculating cube...");
    return Math.pow(number, 3);
  }

  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]); // This will only re-run the cubeNum function when the number value changes

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        value={number}
      />
      <h1>Cube of the number : {result}</h1>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter++
      </button>
      <h1>Counter value : {counter}</h1>
    </div>
  );
};

export default UseMemo;
