import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import bookReducer from "./reducers/bookReducer"

const combinedReducer = combineReducers({
    books: bookReducer,
    // user: useReducer,
})

export const store = createStore(combinedReducer, composeWithDevTools())