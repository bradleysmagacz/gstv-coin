import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import coinReducer from './pages/coin/CoinReducer';
import sitesReducer from './pages/sites/SitesReducer';
import siteReducer from './pages/site/SiteReducer';

const middleware = [thunk];
const enhancers = [];
const reducers = combineReducers({
  coin: coinReducer,
  form: formReducer,
  sites: sitesReducer,
  site: siteReducer
});

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware), ...enhancers)
);

export default store;
