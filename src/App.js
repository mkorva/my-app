import React, { Fragment } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Login1 } from "./Login1";
import { Layout } from "./components/Layout";
import { Navbar } from "react-bootstrap";
import Auth from "./Auth";

function App() {
  return (
    <Fragment>
      <NavigationBar />;
      <Login1 />;
    </Fragment>
  );
}

export default App;
