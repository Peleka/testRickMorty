import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import s from './Header.module.scss'
import {useDispatch} from "react-redux";
import {getCardsTC} from "../BLL/reducer";

export const Header = () => {
    const [currentInputValue, setCurrentInputValue] = useState("");

    useEffect(() => {
        dispatch(getCardsTC())
    }, [])
    const dispatch = useDispatch()

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentInputValue(event.target.value)
    }

    const onKeyPressInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            dispatch(getCardsTC(currentInputValue))
        }
    }

    const filterName = () => {
        dispatch(getCardsTC(currentInputValue))
    }


// @ts-ignore
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div>
                    <h1 className={s.title}>RICK & MORTY</h1>
                    <p>Hero database </p>
                </div>
                <div>
                    <input
                        onChange={onChangeInputHandler}
                        onBlur={filterName}
                        onKeyPress={onKeyPressInputHandler}
                        value={currentInputValue}
                        className={s.input}
                        type="text"
                        placeholder="Поиск по имени"
                        autoFocus={true}
                    />
                    {/*{/\D/.test(currentInputValue) ? <span>Введите число</span> : ""}*/}
                </div>
            </div>
        </header>
    )
}