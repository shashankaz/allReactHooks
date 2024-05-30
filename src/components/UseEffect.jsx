import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      // setTimeout is a function that calls a function or evaluates an expression after a given period of time
      // setTimeout was supposed to run only one time but it is running multiple times because we have not provided dependency array because of which if any value changes useEffect will run again and again and it will keep on increasing the value of count
      setCount((count) => count + 1); // remove ReactStrictMode from index.js to see the correct output
    }, 2000); // 2000ms = 2s
  }, [count]); // empty dependency array will run the useEffect only once and if we provide count in the dependency array then it will run every time the value of count changes

  return (
    <div>
      <h1>I've rendered {count} times!</h1>
    </div>
  );
};

export default UseEffect;
