import { combineReducers } from "redux";
import { reducer as auth } from '../reducers/auth';
import { reducer as handicrafts } from '../reducers/handicrafts';
import { reducer as main } from '../reducers/main';
import { reducer as comments } from '../reducers/comments';
import { reducer as posts } from '../reducers/posts';
import { reducer as weather } from '../reducers/weather';

const reducer = combineReducers({
    auth,
    handicrafts,
    main,
    comments,
    posts,
    weather,
});

export default reducer;
