import React from 'react'
import {featureLists, goodLists} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import {useMediaQuery} from "react-responsive";
import gsap from "gsap";

const Art = () => {

    const isMobile = useMediaQuery({maxWidth: 760})
    const start = isMobile ? "top 30%" : "top top"

    useGSAP(() => {
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start,
                end: "bottom center",
                scrub: 1.5,
                pin: true,
            }
        })

        scrollTimeline
            .to(".will-fade", {
                duration: 1,
                opacity: 0,
                stagger: 0.2,
                ease: "power1.inOut"
            })
            .to(".masked-img", {
                scale: 1.3,
                maskPosition: "center",
                maskSize: "400%",
                duration: 1,
                ease: "power1.out",
            })
            .to("#masked-content", {
                opacity: 1,
                duration: 1,
                ease: "power1.out",
                stagger: 0.2
            })
    })

    return (
        <div id="art">
            <div className="contianer mx-auto h-full md:pt-20 pt-10">
                <h2 className="will-fade">The ART</h2>
                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <img src="/images/check.png" alt="check" />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="cocktail-img">
                        <img src="/images/under-img.jpg" alt="goodLists" className=" abs-center object-contain size-full masked-img" />
                    </div>

                    <ul className="space-y-4 will-fade">
                        {featureLists.map((item, index) => (
                            <li key={index} className="flex items-center justify-start gap-2">
                                <img src="/images/check.png" alt="check" />
                                <p className="md:w-fit w-60">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className="will-fade">
                        Sip-Worthy Perfection
                    </h2>
                    <div id="masked-content" className="md:mt-0 mt-[-10px]" >
                        <h3>
                            Made with Craft, Poured with Passion
                        </h3>
                        <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Art
