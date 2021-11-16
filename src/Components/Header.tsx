import React, {useEffect, useState} from "react";
import '../App.css'
import s from './Header.module.css'
import {useDispatch} from "react-redux";
import {getCardsTC} from "../BLL/reducer";

export const Header = () => {
    const [currentInputValue, setCurrentInputValue] = useState("");

    const dispatch = useDispatch()
    //@ts-ignore
    const onChangeInputHandler = (event) => {
        setCurrentInputValue(event.target.value);
    }

    useEffect(() => {
        dispatch(getCardsTC())
    }, [])


    // @ts-ignore
    return (
        <header className={s.Header}>
            <div className={s.container}>
                <div>
                    <h1>RICK & MORTY</h1>
                    <p>Hero database </p>
                </div>
                <div>
                    <input
                        onChange={onChangeInputHandler}
                        value={currentInputValue}
                        className={s.Input}
                        type="text"
                        placeholder="Введите номер серии"
                    />
                    {/\D/.test(currentInputValue) ? <span>"Введите число"</span> : ""}
                </div>
            </div>
        </header>
    )
}