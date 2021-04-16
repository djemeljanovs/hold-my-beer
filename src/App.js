import './App.css';
import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from "./views/Home";
import BeerProvider from "./components/providers/BeerProvider";
import Details from "./views/Details";

export default function App() {
  return (
      <BeerProvider>
          <HashRouter>
              <Switch>
                  <Route exact path={'/'}>
                      <Home />
                  </Route>
                  <Route exact path={'/:id'}>
                      <Details />
                  </Route>
              </Switch>
          </HashRouter>
      </BeerProvider>
  )
};
