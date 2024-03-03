import React from "react";
import style from "./GalleryGlasses.module.css"
import PhotoGlasses from "./PhotoGlasses/PhotoGlasses";
const GalleryGlasses = () => {
    return (
        <div>
            Some photos
            <div>
                <PhotoGlasses img="glasses"/>
            </div>
        </div>
    )
}

export default GalleryGlasses