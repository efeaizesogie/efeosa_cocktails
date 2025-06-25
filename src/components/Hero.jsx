import React, {useRef, memo} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";
import {useMediaQuery} from "react-responsive";

const Hero = () => {

    const videoRef = useRef();
    const animationsRef = useRef([]);
    // Memoize media query result to prevent unnecessary re-renders
    const isMobile = useMediaQuery({maxWidth: 760});


    useGSAP(() => {
        // Clean up previous animations
        if (animationsRef.current.length) {
            animationsRef.current.forEach(anim => anim.kill());
            animationsRef.current = [];
        }

        // Optimize text animations by reducing complexity
        const heroSplit = new SplitText(".title", { 
            type: "chars, words",
            // Reduce the number of elements created
            charsClass: "char",
            wordsClass: "word"
        });

        // Use words instead of lines for better performance
        const paraSplit = new SplitText(".subtitle", { 
            type: "words, lines",
            linesClass: "line"
        });

        // Add gradient in a more performant way
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        // Store animations for cleanup
        animationsRef.current.push(
            gsap.from(heroSplit.chars, {
                yPercent: 100,
                duration: 1.5, // Slightly faster animation
                ease: "expo.out",
                stagger: 0.05, // Reduce stagger time
            }),

            gsap.from(paraSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 1.5, // Slightly faster animation
                ease: "expo.out",
                stagger: 0.05, // Reduce stagger time
                delay: 0.8 // Reduce delay
            })
        );

        // Store leaf animations for cleanup
        animationsRef.current.push(
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom 80%",
                    scrub: 0.5, // Add a small delay for smoother scrolling
                }
            }).to(".right-leaf", {y: 200, force3D: true}, 0) // Force GPU acceleration
              .to(".left-leaf", {y: -200, force3D: true}, 0) // Force GPU acceleration
        );

        // Memoize these values to prevent recalculation
        const startValue = isMobile ? "top 50% " : "center 60%";
        const endValue = isMobile ? "200% top" : "bottom top";

        // Optimize video playback
        const videoTl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: 0.5, // Add a small delay for smoother scrolling
                pin: true,
                // Add markers only in development
                markers: false,
            }
        });

        // Store video animation for cleanup
        animationsRef.current.push(videoTl);

        // Optimize video playback by using requestAnimationFrame
        if (videoRef.current) {
            // Add loading attribute for better performance
            videoRef.current.setAttribute('loading', 'lazy');

            videoRef.current.onloadedmetadata = () => {
                videoTl.to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                    ease: "none", // Linear easing for smoother playback
                });
            };
        }

    }, [])

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">
                    MOJITO
                </h1>

                <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit <br/> of Summer
                            </p>
                        </div>

                        <div className="view-cocktails ">
                            <p className="subtitle ">
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                            </p>

                            <a href="#cocktails">View Cocktails</a>
                        </div>

                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video 
                    ref={videoRef} 
                    src="/videos/output.mp4" 
                    muted 
                    playsInline 
                    preload="metadata"
                    className="will-change-transform" 
                />
            </div>
        </>

    )
}

// Memoize the entire component to prevent unnecessary re-renders
export default memo(Hero)
