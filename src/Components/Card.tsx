import React from 'react'
import s from './Card.module.css'

export const Card = (props: any) => {
    const {card} = props
    const {image, name, id, species, gender, origin, location, status} = card
    return (
        <div className={s.Card}>
            <img src={image} className={s.Image} alt="avatar"/>
            <div>
                <div style={{cursor: "pointer"}}>
                    <p>{name}</p>
                    <span className={s.Status}>{status}</span>
                </div>
                <div>Категория: {species}</div>
                <div>Пол: {gender}</div>
                <div>Начало: {origin.name}</div>
                <div>Местоположение: {location.name}</div>
            </div>
        </div>
    )
}