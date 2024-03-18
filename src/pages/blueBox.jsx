import { useGSAP } from "@gsap/react"
import gsap from "gsap"




const BlueBox = () => {
useGSAP(()=>{
   gsap.to("#blue-box",{
    x:500,
    duration:3,
    repeat:-1,
    yoyo:true,
    rotation:270,
    ease:'elastic'
   })
},[])

  return (
    <div id="blue-box" className="w-[200px] h-[200px] rounded-xl bg-red-600">
      hlooo
    </div>
  )
}

export default BlueBox
