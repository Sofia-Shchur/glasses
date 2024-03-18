import React from "react";
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";

const Posts = (props) => {
    let postsElements = props.posts.map(el => <NewPost message={el.message} likes={el.likes}/>)
    let newPost = React.createRef();

    let addPost = () => {
        props.store.addPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.store.updateNewPostText(text);
    }

    return (
        <div className={style.allPosts}>
            Posts
            <div>
                <textarea onChange={onPostChange} ref={newPost} value={props.store.newPostText}/>
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