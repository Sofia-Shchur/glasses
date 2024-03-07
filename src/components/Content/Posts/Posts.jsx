import React from "react";
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";

const Posts = (props) => {
    let postsElements = props.posts.map(el => <NewPost message={el.message} likes={el.likes}/>)
    return (
        <div className={style.allPosts}>
            Posts
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts