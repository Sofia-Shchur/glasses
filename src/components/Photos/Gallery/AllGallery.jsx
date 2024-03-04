import React from "react";
import style from "./AllGallery.module.css"
import GalleryGlasses from "./GalleryGlasses";
import GalleryJewelry from "./GalleryJewelry";

const AllGallery = (props) => {
    return (
        <div className={style.allGallery}>
            <div className={style.gGallery}>
                <GalleryGlasses img="this is image glasses"/>
            </div>
            <div className={style.jGallery}>
                <GalleryJewelry/>
            </div>
        </div>
    )
}

export default AllGallery