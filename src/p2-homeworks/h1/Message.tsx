import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={s.fon}>
            <img className={s.avatar} src={props.avatar} alt="avater"/>
            <div className={s.message}>
                <div className={s.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>

    )
}
