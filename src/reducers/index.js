import {
    combineReducers
} from 'redux';
import {
    changeNumber
} from './reducer';
const rootReducers = combineReducers({
    changeNumber
})
export {
    rootReducers
};