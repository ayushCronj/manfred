import {createStore, combineReducers} from 'redux';
import reducer from '../reducers/reducer';

export const ConfigureStore = () => {
  const store = createStore (
        combineReducers({
            stateData : reducer
        })
    );
    return store;
}
