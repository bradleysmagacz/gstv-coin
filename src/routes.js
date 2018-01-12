// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Coin from './pages/coin/CoinContainer';
import Sites from './pages/sites/SitesContainer';
import Site from './pages/site/SiteContainer';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/coin" component={Coin} />
    <Route path="/sites" component={Sites} />
    <Route path="/site/:id" component={Site} />
  </Router>
);

export default Routes;
