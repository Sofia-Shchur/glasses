import React from "react";
import style from './Content.module.css'

const Content = () => {
    return <div className={style.content}>
        <div>
            <img src="https://koketta.ru/wp-content/uploads/f/7/5/f759fc6ebf74e681a27d91c8736bb4d6.jpeg"/>
        </div>
        <div>
            Posts
            <div>
                New post
            </div>
        </div>
    </div>
}

export default Content;