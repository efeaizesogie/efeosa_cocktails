import React from 'react'
import { ScrollTrigger} from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";

 gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
        </main>
    )
}
export default App
