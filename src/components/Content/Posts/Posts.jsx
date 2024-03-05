import React from "react";
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";

const Posts = () => {

    let postsArray = [
        {id: 1, message: "New gallery", likes: "30"},
        {id: 2, message: "It is my new post", likes: "12"}
    ];

    let postsElements = postsArray.map(el => <NewPost message={el.message} likes={el.likes}/>)

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