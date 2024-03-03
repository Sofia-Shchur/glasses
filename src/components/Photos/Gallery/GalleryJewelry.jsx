import React from "react";
import style from "./GalleryJewelry.module.css"
import PhotoJewelry from "./PhotoJewelry/PhotoJewelry";
const GalleryJewelry = () => {
    return (
        <div>
            Some photos
            <div>
                <PhotoJewelry img="jewelry"/>
            </div>
        </div>
    )
}

export default GalleryJewelry