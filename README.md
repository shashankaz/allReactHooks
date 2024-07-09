# React Hooks

This project contains all important React Hooks with explanations and examples.

## Table of Contents

- [Hooks Covered](#hooks-covered)
  - [useState Hook](#usestate-hook)
  - [useEffect Hook](#useeffect-hook)
  - [useRef Hook](#useref-hook)
  - [useMemo Hook](#usememo-hook)
  - [useCallback Hook](#usecallback-hook)
  - [useContext Hook](#usecontext-hook)
  - [useReducer Hook](#usereducer-hook)
  - [useLayoutEffect Hook](#uselayouteffect-hook)
  - [Custom React Hook](#custom-react-hook)

## Hooks Covered

### useState Hook
The `useState` hook is used to add state to functional components. It returns an array with two elements: the current state and a function to update it.

### useEffect Hook
The `useEffect` hook lets you perform side effects in function components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes.

### useRef Hook
The `useRef` hook is used to persist values between renders without causing a re-render. It is commonly used to access a DOM element directly.

### useMemo Hook
The `useMemo` hook is used to memoize expensive functions so that they are only recomputed when their dependencies change, improving performance.

### useCallback Hook
The `useCallback` hook returns a memoized callback function that only changes if one of its dependencies changes. It is useful for optimizing child components that rely on callback functions.

### useContext Hook
The `useContext` hook is used to access the context in a functional component, providing a way to pass data through the component tree without having to pass props down manually at every level.

### useReducer Hook
The `useReducer` hook is an alternative to `useState` for managing complex state logic. It accepts a reducer function and an initial state, and returns the current state and a dispatch function.

### useLayoutEffect Hook
The `useLayoutEffect` hook is similar to `useEffect`, but it fires synchronously after all DOM mutations. It can be used to read layout from the DOM and synchronously re-render.

### Custom React Hook
You can create your own custom hooks to encapsulate and reuse stateful logic. A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks.
