import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Flags from "./Flags";

function Main() {
  return (
    <div className="root-component">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/flags" component={Flags} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default Main;
