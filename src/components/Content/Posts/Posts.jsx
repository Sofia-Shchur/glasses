import React from "react";
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";
import {addPostActionCreator} from "../../redux/contentReducer";
import {updateNewTextActionCreator} from "../../redux/contentReducer";

const Posts = (props) => {
    let postsElements = props.posts.map(el => <NewPost message={el.message} likes={el.likes}/>)
    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewTextActionCreator(text));
    }

    return (
        <div className={style.allPosts}>
            Posts
            <div>
                <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}/>
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