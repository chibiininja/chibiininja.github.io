import React, { useState } from "react";

import "./Slideshow.css";

export default function Slideshow ({ slides }) {
    const [slideIndex, setSlideIndex] = useState(1);

    function incrementSlides() {
        let index = slideIndex + 1;
        if (index > slides.length) {index = 1}
        setSlideIndex(index);
        console.log("increment to " + index);
    }

    function decrementSlides() {
        let index = (slideIndex - 1);
        if (index < 1) {index = slides.length}
        setSlideIndex(index);
        console.log("decrement to " + index);
    }

    return (
        <div className="SlideshowContainer">
            { slides[slideIndex - 1] }
            <a className="prev" onClick={decrementSlides}>&#10094;</a>
            <a className="next" onClick={incrementSlides}>&#10095;</a>
        </div>
    );
};