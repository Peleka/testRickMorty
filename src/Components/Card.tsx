import React from 'react'
import s from './Card.module.scss'

export const Card = (props: any) => {
    const {card} = props
    const {image, name, species, gender, location, status} = card

    const setStyleStatus = (status: string) => {
        switch (status) {
            case 'Alive' : {
                return s.alive
            }
            case 'Dead': {
                return s.dead
            }
            default:
                return s.unknown
        }
    }
    return (
        <div className={s.card}>
            <img src={image} className={s.image} alt="avatar"/>
            <div>
                <div style={{cursor: "pointer"}}>
                    <p className={s.name}>{name}</p>
                    <span className={setStyleStatus(status)}>{status}</span>
                </div>
                <div>
                    <h3>Категория: {species}</h3>
                    <h3>Пол: {gender}</h3>
                    <h3>Местоположение: {location.name}</h3>
                </div>
            </div>
        </div>
    )
}