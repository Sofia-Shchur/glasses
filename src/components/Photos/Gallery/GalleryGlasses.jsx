import React from "react";
import style from "./GalleryGlasses.module.css"
import PhotoGlasses from "./PhotoGlasses/PhotoGlasses";
import {NavLink} from "react-router-dom";

const GalleryGlasses = (props) => {
    return (
        <div>
            {props.img}
            <div>
                <NavLink to="/gallery/glasses"><PhotoGlasses/>Open all</NavLink>
            </div>
        </div>
    )
}

export default GalleryGlasses