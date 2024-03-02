import React from "react";
import style from "./Gallery.module.css"
import Photo from "./Photo/Photo";

const Gallery = () => {
    return (
        <div>
            Some photos
            <div>
                <Photo img="glasses"/>
            </div>
        </div>
    )
}

export default Gallery