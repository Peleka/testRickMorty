import React, {ChangeEvent} from "react";
import s from '../App.module.scss';
import {Card} from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../BLL/store";
import {Pagination} from "@mui/material";
import {getCardsTC, setCurrentPageAC, setFilteredStatus} from "../BLL/reducer";

export const Main = () => {

    const dispatch = useDispatch()
    const data = useSelector((state: AppStoreType) => state.cards.data)
    const currentPage = useSelector((state: AppStoreType) => state.cards.currentPage)
    const pageSize = useSelector((state: AppStoreType) => state.cards.pageSize)
    const totalCharacterCount = useSelector((state: AppStoreType) => state.cards.totalCharacterCount)
    const status = ["alive", "dead", "unknown"]

    //pagination
    let pagesCount = Math.ceil(totalCharacterCount / pageSize)

    const onChangeCurrentPage = (page: number) => {
        dispatch(setCurrentPageAC(page))
        dispatch(getCardsTC())
    }

    const filteredStatus = (status: string) => {
        dispatch(setCurrentPageAC(1))
        dispatch(setFilteredStatus(status))
        dispatch(getCardsTC())
    }

    return (
        <div className={s.container}>
            <div className={s.flex_wrapper}>
                <div>
                    {status.map(st => {
                        return (
                            <button
                                onClick={(e) => filteredStatus(st)}
                                className={s.button}
                            >{st.toUpperCase()}</button>
                        )
                    })}
                </div>
                <div>
                    <Pagination
                        count={pagesCount}     //The total number of pages.
                        variant="outlined"
                        page={currentPage}  //The current page.
                        boundaryCount={1}   //Number of always visible pages at the beginning and end.
                        defaultPage={1}
                        onChange={(e: ChangeEvent<any>, p: number) => onChangeCurrentPage(p)} //event: The event source of the callback.
                        //page: The page selected.
                    />
                </div>
            </div>
            <div className={s.blockCards}>
                <h2>В базе Вселенной удалось найти: </h2>
                {data
                    ? <div className={s.charactersCards}>
                        {
                            //@ts-ignore
                            data.map((item) => (<Card
                                card={item}
                                key={item.id}
                            />))}
                    </div>
                    : <div>
                        <p>В базе пока нет эпизода под таким номером</p>
                    </div>
                }
            </div>
        </div>
    )
}