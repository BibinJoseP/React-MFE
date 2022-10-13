import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "home/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: app1</div>  
    <Counter/>
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
