import {characterAPI} from "../DAL/api";
import {AppThunkType} from "./store";

const SET_CARDS = "CARDS/SET_CARDS"
const SET_CURRENT_PAGE = "CARDS/SET_CURRENT_PAGE"
const SET_TOTAL_CHARACTER_PAGE = "CARDS/SET_TOTAL_CHARACTER_PAGE"
const SET_STATUS_FILTER = "CARDS/SET_STATUS_FILTER"

const initialState = {
    data: [] as Array<CardDataType>,
    pageSize: 20,
    currentPage: 1,
    totalCharacterCount: 0,
    status: ""
}
type InitialStateType = typeof initialState

export const cardsReducer = (state: InitialStateType = initialState, action: CardsActionType) => {
    switch (action.type) {
        case SET_CARDS:
            return {...state, data: action.cards}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_CHARACTER_PAGE:
            return {...state, totalCharacterCount: action.totalCharacterCount}
        case SET_STATUS_FILTER:
            return {...state, status: action.status}
        default:
            return state
    }
}

//actionCreators
export const setCardsAC = (cards: any) => ({type: SET_CARDS, cards} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalCharacterCountAC = (totalCharacterCount: number) => ({
    type: SET_TOTAL_CHARACTER_PAGE,
    totalCharacterCount
} as const)
export const setFilteredStatus = (status: string) => ({
    type: SET_STATUS_FILTER,
    status
} as const)

//type
export type CardsActionType =
    ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCharacterCountAC>
    | ReturnType<typeof setFilteredStatus>

//thunk
export const getCardsTC = (name: string = ""): AppThunkType => (dispatch, getState) => {
    const state = getState()
    const page = state.cards.currentPage
    const status = state.cards.status

    characterAPI.getCharacters(page, status, name)
        .then(res => {
            dispatch(setTotalCharacterCountAC(res.data.info.count))
            dispatch(setCardsAC(res.data.results))
        })
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
type Info = {
    count: number
    pages: number
    next: string | null
    prev: string | null
}
export type CharactersType = {
    info: Info
    results: Array<CardDataType>
}

