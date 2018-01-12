import { createAction, createReducer } from 'redux-act';
import coinService from '../../services/CoinService';

export const requestStart = createAction('COIN_REQUEST_START');
export const requestFail = createAction('COIN_REQUEST_FAIL');
export const requestSuccess = createAction('COIN_REQUEST_SUCCESS');

const cleanString = (str, char) => str.substring(0, str.indexOf(char));
const checkMin = (min, val) => (!min ? true : val > min);
const checkMax = (max, val) => (!max ? true : val < max);
const checkString = (str, sub) => str.indexOf(sub) >= 0;

export const load = criteria => dispatch => {
  dispatch(requestStart());
  return coinService
    .get()
    .then(coins => {
      console.log('Coins retrieved successfully', coins);
      const filtered = filterCoinsByCriteria(coins, criteria);
      dispatch(requestSuccess(coins));
      return Promise.resolve(coins);
    })
    .catch(err => {
      console.error('Error retrieving coins', err);
      dispatch(requestFail(err));
      return Promise.reject(err);
    });
};

const filterCoinsByCriteria = (coins, criteria) =>
  coins.filter(coin => {
    return Object.keys(criteria).every(
      key =>
        checkString(key, 'Min')
          ? checkMin(criteria[key], coin[cleanString(key, 'Min')])
          : checkMax(criteria[key], coin[cleanString(key, 'Max')])
    );
  });

const initialState = {
  error: null,
  loading: false,
  list: []
};

export default createReducer(
  {
    [requestFail]: (state, payload) => ({
      ...initialState,
      error: payload
    }),
    [requestStart]: () => ({
      ...initialState,
      loading: true
    }),
    [requestSuccess]: (state, payload) => ({
      ...initialState,
      list: payload
    })
  },
  initialState
);
