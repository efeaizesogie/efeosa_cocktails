import React from 'react'
import {openingHours, socials} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const Footer = () => {
    useGSAP(() => {
        const wordSplit = SplitText.create(".content h2", {
            type: "words"
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center"
            },
            ease: "power2.inOut",
        }).from(wordSplit.lines, {
                opacity: 0,
                stagger: 0.02, yPercent: 100, ease: "power2.inOut",
        }).from("#contact h3, #contact p", {
            opacity: 0,
            stagger: 0.02, yPercent: 100, ease: "power2.inOut",
        }).to("#f-right-leaf", {
            y: -50, ease: "power2.inOut", duration: 1
        }, ).to("#f-left-leaf", {
            y: -50, ease: "power2.inOut", duration: 1
        }, "<")
    })
    return (
        <section id="contact">
            <img src="/images/footer-left-leaf.png" alt="l-leaf" id="f-left-leaf" />
            <img src="/images/footer-right-leaf.png" alt="r-leaf" id="f-right-leaf" />

            <div className="content">
                <h2>
                    Where to Find Us
                </h2>

                <div>
                    <h3 >
                        Visit our store
                    </h3>
                    <p>
                        456, Raq Blvd. #404, Los Angeles, CA 90210
                    </p>
                </div>
                <div>
                    <h3 >
                        Contact us
                    </h3>
                    <p>
                        (555) 987-6543
                    </p>
                    <p>
                         hello@jsmcocktail.com
                    </p>
                </div>
                <div>
                    <h3 >
                        Open every day
                    </h3>
                    {openingHours.map(({day, time}) => (
                        <p key={day}> {day } : {time} </p>
                    ))}

                </div>
                <div>
                    <h3 >
                        Socials
                    </h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <img src={social.icon} alt={social.name} />
                            </a>

                        ))}
                    </div>

                </div>
            </div>

            <img src='/images/footer-drinks.png' alt="drinks" className="drink-img" />
        </section>
    )
}
export default Footer
