import React from "react";
import style from "./Photo.module.css"

const Photo = (props) => {
    return (
        <div>
            <div>{props.img}</div>
        </div>
    )
}

export default Photo