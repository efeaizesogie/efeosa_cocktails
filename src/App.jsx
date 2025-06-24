import React from 'react'
import { ScrollTrigger} from "gsap/all"
import gsap from "gsap"

 gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <div>
            <h1 className="text-5xl text-green-200">Hello Gsap</h1>
        </div>
    )
}
export default App
