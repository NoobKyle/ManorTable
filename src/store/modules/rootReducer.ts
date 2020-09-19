import { combineReducers } from 'redux';

import table  from "./calendar/reducer";
import user from "./user/reducer"

export const rootReducer = combineReducers({
    table, user
})

export type RootState = ReturnType<typeof rootReducer>;