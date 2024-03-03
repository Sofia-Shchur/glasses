import React from "react";
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";

const Posts = () => {
    return (
        <div className={style.allPosts}>
            Posts
            <div className={style.posts}>
                <NewPost message="New gallery" likes="30"/>
                <NewPost message="It is my new post" likes="10"/>
            </div>
        </div>
    )
}

export default Posts