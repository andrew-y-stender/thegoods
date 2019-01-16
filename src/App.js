import React, { Component } from "react";
import "./App.css";
import Router from "./Router";

import { NavLink } from "react-router-dom";

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shoppingcart"> Shopping Cart</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <h1>This is the future of thegoodsdotcom .... amirte v2?!</h1>
        </header>
        <Router />
      </div>
    );
  }
}

export default App;
