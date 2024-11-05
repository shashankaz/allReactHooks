React hooks are special functions that let you "hook into" React features like state and lifecycle events. Here’s an overview of the commonly used React hooks:

---

### 1. **useState**

**Purpose:** Adds state to functional components.

```javascript
const [count, setCount] = useState(0);
```

- `useState` initializes state (`count`) and provides a function to update it (`setCount`).
- It’s often used for counters, form inputs, toggles, etc.

### 2. **useEffect**

**Purpose:** Manages side effects like fetching data, subscriptions, and manual DOM changes.

```javascript
useEffect(() => {
  console.log("Component mounted or updated");
  return () => console.log("Cleanup on unmount or dependency change");
}, [dependency]);
```

- Runs after the render.
- If a dependency array (like `[dependency]`) is provided, it only runs when those values change. An empty array (`[]`) means it runs only on mount and unmount.

### 3. **useContext**

**Purpose:** Accesses context values without the need to use a context consumer.

```javascript
const value = useContext(MyContext);
```

- `useContext` allows accessing the nearest context value (set by a parent component with `<MyContext.Provider>`) and is ideal for theme, language, or authentication contexts.

### 4. **useRef**

**Purpose:** Creates a persistent reference that doesn’t trigger re-renders.

```javascript
const inputRef = useRef(null);
inputRef.current.focus();
```

- `useRef` is often used to access DOM elements directly and maintain a value across renders without causing re-renders.

### 5. **useReducer**

**Purpose:** An alternative to `useState` for managing more complex state logic, commonly in cases where state depends on previous states.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- The `reducer` function specifies how state should change in response to actions.
- It’s particularly useful for managing state in forms or complex state logic.

### 6. **useCallback**

**Purpose:** Memoizes functions so they don’t get recreated on every render unless dependencies change.

```javascript
const memoizedCallback = useCallback(() => {
  handleClick(count);
}, [count]);
```

- Helps to prevent unnecessary re-renders in child components that depend on a function as a prop.

### 7. **useMemo**

**Purpose:** Memoizes expensive calculations so they only run when dependencies change.

```javascript
const expensiveCalculation = useMemo(() => calculateExpensiveValue(count), [count]);
```

- Useful for optimizing performance in components with complex calculations.

### 8. **useLayoutEffect**

**Purpose:** Similar to `useEffect`, but it runs synchronously after all DOM mutations.

```javascript
useLayoutEffect(() => {
  console.log("DOM mutations complete");
}, []);
```

- Useful when you need to make DOM measurements or alterations before the browser paints the screen.
- Runs before `useEffect` and after the DOM is updated but before it’s painted.

### 9. **useImperativeHandle**

**Purpose:** Customizes the instance value that a parent component receives when it uses `ref`.

```javascript
useImperativeHandle(ref, () => ({
  customMethod() {
    // custom functionality
  }
}));
```

- Often used with `forwardRef` to expose imperative methods on child components.

### 10. **useDebugValue**

**Purpose:** Provides a label in React DevTools for custom hooks to improve debugging.

```javascript
useDebugValue(isOnline ? "Online" : "Offline");
```

- Adds a label for the custom hook's current state in DevTools.

### 11. **useTransition (React 18)**

**Purpose:** Marks a state transition as non-urgent to prevent blocking the UI.

```javascript
const [isPending, startTransition] = useTransition();
startTransition(() => setState(newState));
```

- Helps manage UI responsiveness by deferring less urgent updates.

### 12. **useDeferredValue (React 18)**

**Purpose:** Defers an updated value until it’s less urgent, reducing jank in the UI.

```javascript
const deferredValue = useDeferredValue(value);
```

- Useful for debouncing values, such as filtering large lists in real-time.

### 13. **useId (React 18)**

**Purpose:** Generates unique IDs to use across the app for accessible, unique identifiers.

```javascript
const id = useId();
```

- Particularly useful for forms and lists where unique IDs are required.

---

### Summary Table of React Hooks

| Hook               | Purpose                                           |
|--------------------|---------------------------------------------------|
| `useState`         | Adds state to functional components               |
| `useEffect`        | Manages side effects                              |
| `useContext`       | Accesses context values                           |
| `useRef`           | Manages persistent references                     |
| `useReducer`       | Handles complex state logic                       |
| `useCallback`      | Memoizes functions to optimize re-renders         |
| `useMemo`          | Memoizes expensive computations                   |
| `useLayoutEffect`  | Runs after DOM mutations before painting          |
| `useImperativeHandle` | Exposes instance methods                       |
| `useDebugValue`    | Adds labels in React DevTools                     |
| `useTransition`    | Marks non-urgent updates                          |
| `useDeferredValue` | Defers updates to reduce jank                     |
| `useId`            | Generates unique IDs for components               |

Each hook has its specific use cases and optimizes your component’s performance or structure. Leveraging them effectively can lead to efficient and clean React applications.
