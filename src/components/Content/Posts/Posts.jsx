import React from "react";
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";

const Posts = () => {
    return (
        <div>
            Posts
            <div className={style.posts}>
                <NewPost message="New gallery"/>
                <NewPost message="It is my new post"/>
            </div>
        </div>
    )
}

export default Posts