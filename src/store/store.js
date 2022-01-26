import { combineReducers } from "redux";
import { reducer as user } from '../reducers/users';
import { reducer as handicrafts } from '../reducers/handicrafts';
import { reducer as main } from '../reducers/main';

const reducer = combineReducers({
    user,
    handicrafts,
    main,
});

export default reducer;