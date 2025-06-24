import React from 'react'
import { ScrollTrigger} from "gsap/all"
import gsap from "gsap"
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

 gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <div className="h-screen"></div>
        </main>
    )
}
export default App
