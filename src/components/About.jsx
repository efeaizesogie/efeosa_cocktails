import React from 'react'
import gsap from "gsap";
import {SplitText} from "gsap/all";
import { profileLists, starImages} from "../constants/index.js";
import {useGSAP} from "@gsap/react";

const About = () => {

    useGSAP(() => {
        const textSplit = new SplitText("#about h2", {
            type: "words"
        })

        const lineSplit = new SplitText(".sub-content p", {
            type: "lines"
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        })

        scrollTimeline
            .from(textSplit.words, {
                opacity: 0, duration: 1, yPercent: 100, ease: "ease", stagger: 0.01
            })
            .from(lineSplit.lines, {
                opacity: 0, duration: 1, yPercent: 100, ease: "ease",
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
                    <img src="/images/abt1.png" alt={`grid image 1`} />
                </div>
                <div className='md:col-span-6' >
                    <div className="noisy"/>
                    <img src="/images/abt2.png" alt={`grid image 2`} />
                </div>
                <div className='md:col-span-3' >
                    <div className="noisy"/>
                    <img src="/images/abt5.png" alt={`grid image 5`} />
                </div>
            </div>

            <div className="bottom-grid">
                <div className='md:col-span-8' >
                    <div className="noisy"/>
                    <img src="/images/abt3.png" alt={`grid image 3`} />
                </div>
                <div className='md:col-span-4' >
                    <div className="noisy"/>
                    <img src="/images/abt4.png" alt={`grid image 4`} />
                </div>
            </div>
        </div>
    )
}
export default About
