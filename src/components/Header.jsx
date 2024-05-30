import React from "react";

const Header = () => {
  console.log("Header Rendered!!");

  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default React.memo(Header); // React.memo is a higher order component that will prevent the component from re-rendering if the props have not changed. In this case, the Header component does not have any props, so it will not re-render.
