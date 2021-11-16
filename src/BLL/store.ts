import {CardsActionType, cardsReducer} from "./reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
    cards: cardsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

//types
export type AppThunkType<ReturnType= void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActions>
export type AppActions = CardsActionType
export type AppStoreType = ReturnType<typeof rootReducer>

export default store