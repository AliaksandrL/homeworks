import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
             <NavLink to='/pre-junior' activeClassName="active" className={s.link}>pre-junior</NavLink>
            <NavLink to='/junior' activeClassName="active" className={s.link}>junior</NavLink>
            <NavLink to='/junior-plus' activeClassName="active" className={s.link}>junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
