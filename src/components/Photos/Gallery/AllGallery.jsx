import React from "react";
import style from "./AllGallery.module.css"
import GalleryGlasses from "./GalleryGlasses";
import GalleryJewelry from "./GalleryJewelry";

const AllGallery = () => {
    return (
        <div className={style.allGallery}>
            <div className={style.gGallery}>
                <GalleryGlasses/>
            </div>
            <div className={style.jGallery}>
                <GalleryJewelry/>
            </div>
        </div>
    )
}

export default AllGallery