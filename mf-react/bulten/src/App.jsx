import React from "react";
import ReactDOM from "react-dom";
import BultenContent from "./BultenContent";

import "./index.css";

const App = () => {
  return (
    <div>
      <BultenContent/>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
