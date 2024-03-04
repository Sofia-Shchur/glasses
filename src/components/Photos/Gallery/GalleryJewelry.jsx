import React from "react";
import style from "./GalleryJewelry.module.css"
import PhotoJewelry from "./PhotoJewelry/PhotoJewelry";
import PhotoGlasses from "./PhotoGlasses/PhotoGlasses";
import {NavLink} from "react-router-dom";

const GalleryJewelry = () => {
    return (
        <div>
            Some photos
            <div>
                <NavLink to="/gallery/jewelry"><PhotoJewelry img="jewelry"/></NavLink>
            </div>
        </div>
    )
}

export default GalleryJewelry