import React, { useEffect, useRef, useState, useId } from "react";

import "./Slideshow.css";

export default function Slideshow ({ slides, manual, seconds = 2 }) {
    const [slideIndex, setSlideIndex] = useState(1);
    const timerId = useRef(null);
    const dotsId = useId();

    useEffect(() => {
        if (!manual) {
            clearTimeout(timerId.current);
            timerId.current = setTimeout(() => {
                incrementSlides();
            }, 1000 * seconds);
        }
    }, [slideIndex])

    const dots = slides.map((slide, index) =>
        <span name={dotsId} className="dot" onClick={() => currentSlide(index + 1)}></span>
    );

    const sidebuttons = <>
        <a className="prev" onClick={decrementSlides}>&#10094;</a>
        <a className="next" onClick={incrementSlides}>&#10095;</a>
    </>;

    function incrementSlides() {
        let index = slideIndex + 1;
        if (index > slides.length) {index = 1}
        setSlideIndex(index);
        if (manual) {setDots(index)}
    }

    function decrementSlides() {
        let index = (slideIndex - 1);
        if (index < 1) {index = slides.length}
        setSlideIndex(index);
        if (manual) {setDots(index)}
    }

    function currentSlide(index) {
        console.log(index);
        if (index <= slides.length && index >= 1) {
            setSlideIndex(index);
        }
        if (manual) {setDots(index)}
    }

    function setDots(index) {
        let i;
        let dots = document.getElementsByName(dotsId);
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" dotActive", "");
        }
        dots[index-1].className += " dotActive";
    }

    return (
        <>
            <div className="SlideshowContainer">
                { slides[slideIndex - 1] }
                { manual ? sidebuttons : null}
            </div>
            <div style={{ textAlign: "center" }}>
                { manual ? dots : null }
            </div>
        </>
    );
};