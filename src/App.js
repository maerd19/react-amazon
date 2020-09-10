import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
