import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/movieDetail";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  );
}
