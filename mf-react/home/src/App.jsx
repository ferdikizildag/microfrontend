import React from "react";
import ReactDOM from "react-dom";
import BultenContent from "bulten/Content";
import BultenData from "bulten/Data";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  console.log(BultenData);
  return (
    <div>
      <Header/>
      <BultenContent/>
      <Footer/>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
