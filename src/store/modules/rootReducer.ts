import { combineReducers } from 'redux';

import calendar  from "./calendar/reducer";
import user from "./user/reducer"

export const rootReducer = combineReducers({
    calendar, user
})

export type RootState = ReturnType<typeof rootReducer>;