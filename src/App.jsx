import React from 'react'
import { ScrollTrigger} from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";

 gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
        </main>
    )
}
export default App
