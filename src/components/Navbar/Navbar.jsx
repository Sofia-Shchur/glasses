import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to="/" className={style.item}>Content</NavLink>
            </div>
            <div>
                <NavLink to="/gallery" className={style.item}>Gallery</NavLink>
            </div>
            <div>
                <NavLink to="/friends" className={style.item}>Friends</NavLink>
            </div>
            <div>
                <NavLink to="/contacts" className={style.item}>Contacts</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;