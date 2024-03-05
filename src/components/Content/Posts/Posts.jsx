import React from "react";
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";

const Posts = (props) => {
    return (
        <div className={style.allPosts}>
            Posts
            <div className={style.posts}>
                {props.posts}
            </div>
        </div>
    )
}

export default Posts