import { applyMiddleware, combineReducers, createStore } from "redux";
import bookReducer from "./reducers/bookReducer";
import { userReducer } from "./reducers/userReducer";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({ book: bookReducer, user: userReducer })
const store = createStore(rootReducer,applyMiddleware(thunk))
export default store