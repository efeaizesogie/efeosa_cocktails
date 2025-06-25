import React, { useRef, memo } from 'react'
import {cocktailLists, mockTailLists} from "../constants/index.js";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Cocktails = () => {
    // Reference to store animations for cleanup
    const animationsRef = useRef([]);

    useGSAP(() => {
        // Clean up previous animations
        if (animationsRef.current.length) {
            animationsRef.current.forEach(anim => anim.kill());
            animationsRef.current = [];
        }

        // Create and store the animation
        animationsRef.current.push(
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#cocktails",
                    start: "top 30%",
                    end: "bottom 80%",
                    scrub: 0.5, // Add a small delay for smoother scrolling
                    markers: false, // Remove markers in production
                }
            }).from("#c-left-leaf", {
                x: -100, y: 100, force3D: true, // Force GPU acceleration
                duration: 0.8 // Shorter duration for better performance
            })
            .from("#c-right-leaf", {
                x: 100, y: -100, force3D: true, // Force GPU acceleration
                duration: 0.8 // Shorter duration for better performance
            })
        );
    }, { scope: document.documentElement }) // Specify scope to improve performance
    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>

                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) => <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>

                            <span>
                               - {price}
                            </span>
                        </li>)}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most popular mocktails:</h2>

                    <ul>
                        {mockTailLists.map(({name, country, detail, price}) => <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>

                            <span>
                               - {price}
                            </span>
                        </li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
// Memoize the component to prevent unnecessary re-renders
export default memo(Cocktails)
