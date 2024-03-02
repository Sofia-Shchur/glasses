import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>Navigation
            <div>
                <a href="/content" className={style.nav}>Content</a>
            </div>
            <div>
                <a href="/gallery" className={style.nav}>Gallery</a>
            </div>
            <div>
                <a href="/contacts" className={style.nav}>Contacts</a>
            </div>
        </nav>
    )
}

export default Navbar;