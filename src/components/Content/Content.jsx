import React from "react";
import style from './Content.module.css'
import Posts from "./Posts/Posts";
import {store} from "../redux/state";

const Content = (props) => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://koketta.ru/wp-content/uploads/f/7/5/f759fc6ebf74e681a27d91c8736bb4d6.jpeg"/>
            </div>
            <Posts posts={props.posts} store={store} addPost={props.store.addPost} newPostText={props.store.newPostText} updateNewPostText={props.store.updateNewPostText}/>
        </div>
    )
}

export default Content;