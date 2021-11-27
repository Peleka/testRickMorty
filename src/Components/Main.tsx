import React, {ChangeEvent} from "react";
import '../App.css'
import classes from './Header.module.css'
import {Card} from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../BLL/store";
import {Pagination} from "@mui/material";
import {getCardsTC, setCurrentPageAC, setFilteredStatus} from "../BLL/reducer";

export const Main = () => {

    const dispatch = useDispatch()
    //@ts-ignore
    const data = useSelector((state: AppStoreType) => state.cards.data)
    const currentPage = useSelector((state: AppStoreType) => state.cards.currentPage)
    const pageSize = useSelector((state: AppStoreType) => state.cards.pageSize)
    const totalCharacterCount = useSelector((state: AppStoreType) => state.cards.totalCharacterCount)
    const status = ["alive", "dead", "unknown"]

    // const {id} = useParams<{id: number}>()

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
        <div className={classes.container}>
            <div className={"Flex_wrapper"}>
                <div>
                    {status.map(st => {
                        return (
                            <button
                                onClick={(e) => filteredStatus(st)}
                                className={"Button"}
                            >{st.toUpperCase()}</button>
                        )
                    })}
                </div>
                <div>
                    <Pagination
                        count={pagesCount}     //The total number of pages.
                        variant="outlined"
                        color="secondary"
                        page={currentPage}  //The current page.
                        boundaryCount={1}   //Number of always visible pages at the beginning and end.
                        defaultPage={1}
                        onChange={(e: ChangeEvent<any>, p: number) => onChangeCurrentPage(p)} //event: The event source of the callback.
                                                                                              //page: The page selected.
                    />
                </div>

            </div>
            <div>
                <h1>В базе Вселенной удалось найти: </h1>
                {data
                    ? <div className={"grid_wrapper"}>
                        {
                            //@ts-ignore
                            data.map((item) => (<Card card={item} key={item.id}/>))}
                    </div>
                    : <div>
                        <p>В базе пока нет эпизода под таким номером</p>
                    </div>
                }
            </div>
        </div>
    )
}