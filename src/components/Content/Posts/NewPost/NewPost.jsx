import React from "react";
import style from "./NewPost.module.css";

const NewPost = (props) => {
    return (
        <div>
            <div>
                {props.message}
            </div>
            <span>Like</span>
        </div>
    )
}

export default NewPost