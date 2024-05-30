import React, { useReducer, useState } from "react";

const UseReducer = () => {
  //   const [count, setCount] = useState(0);

  const initialState = { count: 0 }; // initial state value

  const reducer = (state, action) => {
    // reducer function to update state value
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "INPUT":
        return { count: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState); // state = initialState, dispatch = reducer function to update state value

  // useReducer is used to manage state value in functional component in React. It is similar to useState but it is used for complex state management. It takes two arguments, first is reducer function and second is initial state value. It returns two values, first is state value and second is dispatch function to update state value. In the above example, we have created a simple counter application using useReducer. We have created a reducer function which takes two arguments, first is state value and second is action object. We have defined three actions, INCREMENT, DECREMENT and INPUT. Based on action type, we are updating state value. We have used dispatch function to update state value based on action type. We have created a input field to update state value. Whenever we change input value, it will update state value based on action type INPUT.
  
  // useState vs useReducer in React Hooks - useState is used to manage state value in functional component in React. It is used for simple state management. useReducer is used to manage state value in functional component in React. It is used for complex state management. useState is used when we have single state value. useReducer is used when we have multiple state values. useState is used when we have simple state value. useReducer is used when we have complex state value. useState is used when we have simple state update logic. useReducer is used when we have complex state update logic. useState is used when we have single action. useReducer is used when we have multiple actions. useState is used when we have single state value. useReducer is used when we have multiple state values. useState is used when we have single action. useReducer is used when we have multiple actions. useState is used when we have simple state update logic. useReducer is used when we have complex state update logic.

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrease
      </button>
      <input
        value={state.count}
        onChange={(e) => {
          dispatch({ type: "INPUT", payload: Number(e.target.value) });
        }}
        type="number"
      />
    </div>
  );
};

export default UseReducer;
