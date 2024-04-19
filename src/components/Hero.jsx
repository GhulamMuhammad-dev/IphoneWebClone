import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo,smallHeroVideo } from "../utils"
import { useState } from "react"

const Hero = () => {
    const [videoSrc,setVideoSrc]=useState(window.innerWidth<760?smallHeroVideo:heroVideo)
   useGSAP(()=>{
    gsap.to("#hero",{
        delay:1.5,
        opacity:1,
    })
   },[])
  return (
    <section className=" w-full nav-height bg-black relative">
    <div className="h-5/6 w-full flex-center flex-col ">
        <p id="hero" className="hero-title text-white">iPhone 15 Pro</p>
    </div>

     <div className="md:w-10/12 w-9/12">
     <video autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type="video/mp4" />
     </video>

     </div>


    </section>
  )
}

export default Hero
