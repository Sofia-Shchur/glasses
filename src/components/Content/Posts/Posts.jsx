import React from "react";
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";

const Posts = (props) => {
    let postsElements = props.posts.map(el => <NewPost message={el.message} likes={el.likes}/>)
    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        alert(text)
    }

    return (
        <div className={style.allPosts}>
            Posts
            <div>
                <textarea ref={newPost}></textarea>
            </div>
            <div>
                <button onClick={addPost}>New post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts