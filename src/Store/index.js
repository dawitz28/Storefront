import { createStore, combineReducers } from "redux";
import  {composeWithDevTools} from 'redux-devtools-extension';
import sportReducer from './sport-store';

// later on, in a component, sport here is: state.sport...
const reducers = combineReducers({
    sport: sportReducer
})

const store = () => createStore(reducers, composeWithDevTools());

export default store(); // <== "singleton"