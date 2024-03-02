import React from "react";
import style from './Content.module.css'
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://koketta.ru/wp-content/uploads/f/7/5/f759fc6ebf74e681a27d91c8736bb4d6.jpeg"/>
            </div>
            <Posts/>
        </div>
    )
}

export default Content;