import React, { useRef, memo } from 'react'
import gsap from "gsap";
import {SplitText} from "gsap/all";
import { profileLists, starImages} from "../constants/index.js";
import {useGSAP} from "@gsap/react";

const About = () => {
    // Reference to store animations for cleanup
    const animationsRef = useRef([]);

    useGSAP(() => {
        // Clean up previous animations
        if (animationsRef.current.length) {
            animationsRef.current.forEach(anim => anim.kill());
            animationsRef.current = [];
        }

        // Optimize text animations by using words instead of characters
        const textSplit = new SplitText("#about h2", {
            type: "words",
            wordsClass: "split-word"
        });

        // Use words for better performance
        const lineSplit = new SplitText(".sub-content p", {
            type: "lines",
            linesClass: "split-line"
        });

        // Create and store the animation
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
                markers: false, // Remove markers in production
                once: true, // Only trigger once for better performance
            }
        });

        // Store the animation for cleanup
        animationsRef.current.push(scrollTimeline);

        // Optimize animations with shorter durations and fewer stagger steps
        scrollTimeline
            .from(textSplit.words, {
                opacity: 0, 
                duration: 0.8, // Shorter duration
                yPercent: 100, 
                ease: "ease", 
                stagger: 0.01,
                force3D: true // Force GPU acceleration
            })
            .from(lineSplit.lines, {
                opacity: 0, 
                duration: 0.8, // Shorter duration
                yPercent: 100, 
                ease: "ease",
                force3D: true // Force GPU acceleration
            })
            .from(".top-grid div, .bottom-grid div", {
                opacity: 0, 
                stagger: 0.03, // Reduce stagger time
                yPercent: 100, 
                ease: "power2.inOut", 
                duration: 0.8, // Shorter duration
                force3D: true // Force GPU acceleration
            }, "-=0.3"); // Reduce overlap time

    }, { scope: document.documentElement }) // Specify scope to improve performance

    return (
        <div id="about">
            <div className="mb-16 md:p-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">
                            Best Cocktails
                        </p>
                        <h2>
                            Where every detail matters <span className="text-white">-</span> from muddle to garnish
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                        </p>

                        <div className="flex justify-between items-center flex-row">
                            <div>

                                    <div className="flex flex-row gap-[-10px] ">
                                        {starImages.map(starImage => (
                                        <img src={starImage} alt={starImage} key={starImage} className="size-5 " />
                                        ))}
                                    </div>

                                <p className="md:text-3xl text-xl font-bold">
                                    <span>4.5</span>/5
                                </p>
                                <p className="text-sm text-white-100">
                                    More than +12000 customers
                                </p>
                            </div>

                            <div className="w-1 h-[100%] relative">
                                <div className="noisy" />
                            </div>

                            <div className=" h-[85px] rounded-full relative flex justify-center items-center p-6">
                                <div className="noisy rounded-full"/>
                                <div className="flex flex-row z-10 ">
                                    {profileLists.map((profile, i) => <img src={profile.imgPath} className={`${i !== 0 && 'md:ml-[-15px] ml-[-25px]'} rounded-full md:size-12 size-10 `} alt={profile.imgPath} /> )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">

                <div className='md:col-span-3' >
                    <div className="noisy"/>
                    <img 
                        src="/images/abt1.png" 
                        alt="Grid image 1" 
                        loading="lazy" 
                        width="300" 
                        height="200"
                        className="will-change-transform" 
                    />
                </div>
                <div className='md:col-span-6' >
                    <div className="noisy"/>
                    <img 
                        src="/images/abt2.png" 
                        alt="Grid image 2" 
                        loading="lazy" 
                        width="600" 
                        height="400"
                        className="will-change-transform" 
                    />
                </div>
                <div className='md:col-span-3' >
                    <div className="noisy"/>
                    <img 
                        src="/images/abt5.png" 
                        alt="Grid image 5" 
                        loading="lazy" 
                        width="300" 
                        height="200"
                        className="will-change-transform" 
                    />
                </div>
            </div>

            <div className="bottom-grid">
                <div className='md:col-span-8' >
                    <div className="noisy"/>
                    <img 
                        src="/images/abt3.png" 
                        alt="Grid image 3" 
                        loading="lazy" 
                        width="800" 
                        height="500"
                        className="will-change-transform" 
                    />
                </div>
                <div className='md:col-span-4' >
                    <div className="noisy"/>
                    <img 
                        src="/images/abt4.png" 
                        alt="Grid image 4" 
                        loading="lazy" 
                        width="400" 
                        height="300"
                        className="will-change-transform" 
                    />
                </div>
            </div>
        </div>
    )
}
// Memoize the component to prevent unnecessary re-renders
export default memo(About)
