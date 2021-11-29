import React from 'react'
import s from './Card.module.scss'

export const Card = (props: any) => {
    const {card} = props
    const {image, name, id, species, gender, origin, location, status} = card
    return (
        <div className={s.card}>
            <img src={image} className={s.image} alt="avatar"/>
            <div>
                <div style={{cursor: "pointer"}}>
                    <p className={s.name}>{name}</p>
                    <span className={s.status}>{status}</span>
                </div>
                <div>Категория: {species}</div>
                <div>Пол: {gender}</div>
                <div>Начало: {origin.name}</div>
                <div>Местоположение: {location.name}</div>
            </div>
        </div>
    )
}