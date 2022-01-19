import { combineReducers } from "redux";
import { reducer as users } from '../reducers/users';

const reducer = combineReducers({
    users,
});

export default reducer;