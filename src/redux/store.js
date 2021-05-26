import { createStore, combineReducers } from "redux"
import bookReducer from "./reducers/bookReducer"

const combinedReducer = combineReducers({
    books: bookReducer,
    // user: useReducer,


})


export const store = createStore(combinedReducer)