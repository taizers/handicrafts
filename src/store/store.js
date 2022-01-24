import { combineReducers } from "redux";
import { reducer as user } from '../reducers/users';

const reducer = combineReducers({
    user,
});

export default reducer;