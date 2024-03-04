import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.allItem}>
                <NavLink to="/" className={style.item}>Content</NavLink>
            </div>
            <div className={style.allItem}>
                <NavLink to="/gallery" className={style.item}>Gallery</NavLink>
            </div>
            <div className={style.allItem}>
                <NavLink to="/friends" className={style.item}>Friends</NavLink>
            </div>
            <div className={style.allItem}>
                <NavLink to="/contacts" className={style.item}>Contacts</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;