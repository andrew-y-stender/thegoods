import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import ShopCartPage from "./pages/shopcartpage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={ShopCartPage} />
  </Switch>
);

export default Router;
