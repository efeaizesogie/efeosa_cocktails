import React from 'react'
import { ScrollTrigger} from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";

 gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
            <Art/>
        </main>
    )
}
export default App
