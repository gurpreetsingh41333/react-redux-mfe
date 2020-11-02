import React from "react";

import ChildApp from "./components/ChildApp";

const App = () => {
  return (
    <>
      <h1>Casa App as container / Stitch apps here</h1>
      <div id="counter">
        <ChildApp appName="child-app-one" />
      </div>
      {/* <hr />
      <h1>Customer story / Task App</h1>
      <div id="todo"></div> */}
    </>
  );
};

export default App;
