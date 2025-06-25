import React, {useRef, useState} from 'react'
import {sliderLists} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
    const infoRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        const leafScroll = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: "#menu",
                    start: "-10% top",
                    end: "bottom 80%",
                    scrub: true,
                }
            })

        leafScroll.to("#m-left-leaf", {y: -300, })
        leafScroll.to("#m-right-leaf",  {y: 300, })
    })

    useGSAP(() => {
        gsap.fromTo("#title, .info p, .details h2", {
            opacity: 0, yPercent: 100,
        },
 {opacity: 1, yPercent: 0, duration: 1},)

        gsap.fromTo(".details p", {
                opacity: 0, yPercent: 100,
            },
            {opacity: 1, yPercent: 0, duration: 1},)

        gsap.fromTo(".cocktail img", {
            opacity: 0, xPercent: -100
        },
 {opacity: 1, xPercent: 0, duration: 1, ease: "easeOutExpo"},)

    }, [currentIndex])

    const allCocktails = sliderLists.length;

    function goToSlides(index) {
        const newIndex = (index + allCocktails) % allCocktails;

        setCurrentIndex(newIndex);
    }

    const getCocktailInfo = indexOf => {
        return sliderLists[(currentIndex + indexOf + allCocktails) % allCocktails];
    }

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
