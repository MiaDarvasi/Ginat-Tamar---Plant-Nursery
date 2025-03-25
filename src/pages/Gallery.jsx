import React, { useState } from "react";

import { galleryTitles } from "../data/app.titles.js";
import { galleryImages } from "../data/ctg.lists.js";

import closeBtn from "../assets/imgs/icons/close.svg"


export function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <section className="gallery">
            <h1 dir="rtl">{galleryTitles.title}</h1>
            <p dir="rtl">{galleryTitles.subTitle}</p>
            <section className="gallery-imgs">
                {galleryImages.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`Gallery Image ${index + 1}`}
                        onClick={() => openModal(imgSrc)}
                    />
                ))}
            </section>

            {isModalOpen && (
                <div className="gallery-modal" onClick={handleModalClick}>
                    <div className="gallery-modal-content">
                        <button onClick={closeModal}>
                            <img src={closeBtn} />
                        </button>
                        <img src={selectedImage} alt="Selected" className="selected-img"/>
                    </div>
                </div>
            )}
        </section>
    );
}
