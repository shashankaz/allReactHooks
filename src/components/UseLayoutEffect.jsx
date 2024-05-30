import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("Message from useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []); // useLayoutEffect is similar to useEffect
  // useLayoutEffect is used to perform side effects in functional component in React. It is similar to useEffect but it is used to perform side effects synchronously. It takes two arguments, first is callback function and second is dependency array.
  // useEffect is used to perform side effects in functional component in React. It is used to perform side effects asynchronously. It takes two arguments, first is callback function and second is dependency array. It is similar to componentDidMount, componentDidUpdate and componentWillUnmount lifecycle methods in class component.
  // We use useLayoutEffect for measuring dom elements and updating dom elements synchronously, for animations and for updating layout synchronously and for fixing the flickering issue in the application and also for api calls.

  return (
    <div>
      <h1>Test message</h1>
    </div>
  );
};

export default UseLayoutEffect;
