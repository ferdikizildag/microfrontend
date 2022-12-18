import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import counterWrapper from "remote/counterWrapper";
import vueApp from 'remote_vue/bootloaderWrapper';

import "./index.css";

const App = () => {
  const solidjsApp = useRef(null);
  const vuejsApp = useRef(null);

  useEffect(() => {
    counterWrapper(solidjsApp.current);
    vueApp(vuejsApp.current)
  }, []);

  return (
    <div className="container">
      <div>Name: react-host</div>
      <div ref={solidjsApp}></div>
      <div ref={vuejsApp}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
