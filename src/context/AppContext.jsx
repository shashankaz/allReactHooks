import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "123-456-7890";
  const name = "John Doe";

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

// This component is a context provider that will provide the phone number to all of its children components. The phone number is stored in the AppContext, which is created using the createContext function from React. The phone number is passed as the value prop to the AppContext.Provider component, which will make the phone number available to all of its children components. The phone number is hard-coded in this example, but it could be fetched from an API or stored in a state variable.
// The AppContext is exported so that it can be used in other components. The ContextProvider component is also exported as the default export, which will be used to wrap the root component of the application in the index.js file.
// The children of the ContextProvider component are passed as props and rendered inside the AppContext.Provider component. This allows all of the children components to access the phone number provided by the context provider.
