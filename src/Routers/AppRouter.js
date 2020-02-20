import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Profile from "../components/Profile";

const AppRouter = () => {
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Profile} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>;
};

export default AppRouter;
