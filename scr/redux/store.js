import {createStore, combineReducers} from 'redux';
import reducerSell from './reducer/container';

const rootReducer = combineReducers({
  sell: reducerSell,
});

const mainStore = () => createStore(rootReducer);

export default mainStore;
