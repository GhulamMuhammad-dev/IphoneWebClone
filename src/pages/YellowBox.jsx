import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const YellowBox = () => {

    const timeLine=gsap.timeline({
        repeat:-1,
        repeatDelay:1,
        yoyo:true
      });


    useGSAP(()=>{
        timeLine.from("#yellow-box",{
            x:0
        })
        timeLine.to("#yellow-box",{
         x:250,
         duration:3,
         repeat:-1,
         yoyo:true,
         rotation:360,
         borderRadius:'100%',
         ease:'elastic'
        })

        timeLine.to("#yellow-box",{
            y:300,
            duration:2,
            borderRadius:'20%',
            scale:2,
            ease:'elastic'
        })
     },[])




  return (
    <div id="yellow-box" className="w-[200px] h-[200px] rounded-xl bg-yellow-600">
      hlooo
    </div>
  )
}

export default YellowBox
