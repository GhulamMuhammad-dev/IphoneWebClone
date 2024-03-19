import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Balls = () => {
    useGSAP(()=>{
         gsap.to(".balls",{
            y:400,
            yoyo:true,
            repeat:-1,
            backgroundColor:"black",
            stagger:{
                amount:1.5,
                grid:[2,1],
                axis:'y',
                ease:'bounce.out',
                from:'center'
            }
         })
    },[])
  return (
    <div className="flex gap-4 p-2">
    <div className="w-32 h-32 bg-red-600 rounded-full balls"></div>
    <div className="w-32 h-32 bg-blue-600 rounded-full balls"></div>
    <div className="w-32 h-32 bg-orange-600 rounded-full balls"></div>
    <div className="w-32 h-32 bg-pink-600 rounded-full balls"></div>
    <div className="w-32 h-32 bg-yellow-600 rounded-full balls"></div>
    <div className="w-32 h-32 bg-violet-600 rounded-full balls"></div>
      
    </div>
  )
}

export default Balls
