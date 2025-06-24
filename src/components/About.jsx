import React from 'react'
import gsap from "gsap";
import {SplitText} from "gsap/all";
import {bottomAboutImages, topAboutImages} from "../constants/index.js";
import {useGSAP} from "@gsap/react";

const About = () => {

    useGSAP(() => {
        const textSplit = new SplitText("#about h2", {
            type: "words"
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center"
            }
        })

        scrollTimeline
            .from(textSplit.words, {
                opacity: 0, duration: 1, yPercent: 100, ease: "ease", stagger: 0.02
            })
            .from(".top-grid div, .bottom-grid div", {
                opacity: 0, stagger: 0.04, yPercent: 100, ease: "power2.inOut", duration: 1
            }, "-=0.5")
    })

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

                        <div className="sub-content">
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                {topAboutImages.map(({imgPath, span}, i ) => <div className={`md:col-span-${span}`} key={imgPath}>
                    <div className="noisy"/>
                    <img src={imgPath} alt={`grid image ${i + 4}`} />
                </div> )}
                {/*<div className={`md:col-span-6`} key="/images/abt3.png">*/}
                {/*    <div className="noisy"/>*/}
                {/*    <img src="/images/abt3.png" alt={`grid image 3`} />*/}
                {/*</div>*/}
            </div>

            <div className="bottom-grid">
                {bottomAboutImages.map(({imgPath, span}, i ) => <div className={`md:col-span-${span}`} key={imgPath}>
                    <div className="noisy"/>
                    <img src={imgPath} alt={`grid image ${i + 1}`} />
                </div> )}
            </div>
        </div>
    )
}
export default About
