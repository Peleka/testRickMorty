import React from "react";
import '../App.css'
import classes from './Header.module.css'
import {Card} from "./Card";
import {useSelector} from "react-redux";
import {AppStoreType} from "../BLL/store";

export const Main = () => {
    //@ts-ignore
    const data = useSelector((state: AppStoreType) => state.cards.data)
    const styleStatus = {
        Alive: "Alive",
        Dead: "Dead",
        unknown: "Unknown",
    };
    return (
        <>
            <div className={classes.container}>
                <h1>В базе Вселенной удалось найти: </h1>
                {data
                    ? <div className={"Flex_wrapper"}>
                        {
                            //@ts-ignore
                            data.map((item) => (<Card card={item} key={item.id} styleStatus={styleStatus} />))}
                    </div>
                    : <div>
                        <p>В базе пока нет эпизода под таким номером</p>
                    </div>
                }
            </div>
        </>
    )
}