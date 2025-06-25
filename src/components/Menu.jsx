import React, {useRef, useState, useCallback, } from 'react'
import {sliderLists} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
    const infoRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const animationsRef = useRef(null);

    // Only create the timeline once
    useGSAP(() => {
        const leafScroll = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: "#menu",
                    start: "-10% top",
                    end: "bottom 80%",
                    scrub: true,
                    markers: false, // Remove markers in production
                }
            })

        leafScroll.to("#m-left-leaf", {y: -300, })
        leafScroll.to("#m-right-leaf",  {y: 300, })
    }, { scope: document.documentElement }) // Specify scope to improve performance

    // Optimize animations when currentIndex changes
    useGSAP(() => {
        // Kill any existing animations to prevent conflicts
        if (animationsRef.current) {
            animationsRef.current.forEach(anim => anim.kill());
        }

        // Store new animations for cleanup
        animationsRef.current = [
            gsap.fromTo("#title, .info p, .details h2", {
                opacity: 0, yPercent: 100,
            },
            {opacity: 1, yPercent: 0, duration: 0.8}),

            gsap.fromTo(".details p", {
                opacity: 0, yPercent: 100,
            },
            {opacity: 1, yPercent: 0, duration: 0.8}),

            gsap.fromTo(".cocktail img", {
                opacity: 0, xPercent: -100
            },
            {opacity: 1, xPercent: 0, duration: 0.8, ease: "easeOutExpo"})
        ];
    }, [currentIndex])

    const allCocktails = sliderLists.length;

    // Memoize the goToSlides function to prevent unnecessary re-renders
    const goToSlides = useCallback((index) => {
        const newIndex = (index + allCocktails) % allCocktails;
        setCurrentIndex(newIndex);
    }, [allCocktails]);

    // Memoize the getCocktailInfo function
    const getCocktailInfo = useCallback((indexOf) => {
        return sliderLists[(currentIndex + indexOf + allCocktails) % allCocktails];
    }, [currentIndex, allCocktails]);

    // Memoize cocktail info to prevent recalculation on every render
    const currentCocktailInfo = getCocktailInfo(0);
    const prevCocktailInfo = getCocktailInfo(-1);
    const nextCocktailInfo = getCocktailInfo(+1);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="l-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="r-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;
                    return (<button key={cocktail.id} className={isActive ? "text-white border-white" : "text-white/50 border-white/50"}
                    onClick={() => goToSlides(index)}>
                        {cocktail.name}
                    </button>)
                    })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlides(currentIndex - 1)}>
                        <span>{prevCocktailInfo.name}</span>
                        <img src="/images/right-arrow.png" alt="right arrow" aria-hidden='true" />' />
                    </button>

                    <button className="text-left" onClick={() => goToSlides(currentIndex + 1)}>
                        <span>{nextCocktailInfo.name}</span>
                        <img src="/images/left-arrow.png" alt="left arrow" aria-hidden='true" />' />
                    </button>
                </div>

                <div className="cocktail">
                    <img src={currentCocktailInfo.image} className="object-contain" alt={currentCocktailInfo.name} />
                </div>

                <div className="recipe">
                    <div ref={infoRef} className="info">
                        <p> Recipe for: </p>
                        <p id="title">{currentCocktailInfo.name}</p>
                    </div>

                    <div className="details">
                        <h2> {currentCocktailInfo.title}</h2>
                        <p >{currentCocktailInfo.description}</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Menu
