import {Dispatch} from "redux";
import {cardsAPI} from "../DAL/api";

const initialState = {
    data: [] as Array<CardDataType>
}
type InitialStateType = typeof initialState

export const cardsReducer = (state: InitialStateType = initialState, action: CardsActionType) => {
    switch (action.type) {
        case "CARDS/SET_CARDS":
            return {...state, data: action.cards}
        default:
            return state
    }
}

//actionCreators
export const setCardsAC = (cards: any) => ({type: "CARDS/SET_CARDS", cards})
export type CardsActionType = ReturnType<typeof setCardsAC>

//thunk

export const getCardsTC = () => (dispatch: Dispatch) => {
    cardsAPI.getCards()
        .then(res => dispatch(setCardsAC(res.data.results)))
        .catch(() => alert("Error console"))
}

//types
export type CardDataType = {
    id: number
    name: string
    status: string
    species?: string
    type?: string
    gender?: string
    origin?: {
        name?: string
        url?: string
    }
    image?: string
    episode?: []
    url?: string
    created?: string


}

