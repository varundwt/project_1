import { useState } from "react";

export const SectionFive = () => {

const [handleButton, setHandleButton] = useState(0);

  function handleForward() {
    setHandleButton(handleButton + 1);
    if (handleButton == 2) {
      setHandleButton(0);
    }
  }

  function handleBackward() {
    setHandleButton(handleButton - 1);
    if (handleButton == 0) {
      setHandleButton(2);
    }
  }

  return (
    <div className="text-three bg-five pt-16">
    <div><h1 className="font-semibold  text-xl md:text-4xl shadow-inner text-center pb-5 md:pb-12 ">Recent shows made star- <br/>studded via StarClinch</h1></div>
    <div className="flex justify-center items-center gap-2 md:px-28 lg:px-10 md:gap-5">
        <div><img src="/images/backward.svg" alt="backward_arrow" className="w-5 md:w-10 cursor-pointer hover:scale-125 transition-all duration-500" onClick={()=>handleBackward()}/></div>
        {handleButton==0 && <><div className="md:pl-10 w-2/5 md:w-2/4 lg:w-1/4"><img src="/images/qNF.jpg" alt="card" className="rounded-tl-3xl rounded-tr-3xl"/></div>
        <div className="md:pr-10">
            <div className="text-xs md:text-2xl"><h1 className="text-four">Nora Fatehi <span className="text-three">for</span></h1><h1>an event hosted</h1><h1>by XYZ </h1><h1>performed <span className="text-four">at Pune.</span></h1></div>
            <div className="flex justify-start items-center pt-3 text-xs md:text-2xl"><img src="/images/calender.svg" alt="calender" className="w-6"/> 14 March 2023</div>
        </div></>}
        {handleButton==1 && <><div className="md:pl-10 w-2/5 md:w-2/4 lg:w-1/4"><img src="/images/qKS.jpg" alt="card" className="rounded-tl-3xl rounded-tr-3xl"/></div>
        <div className="md:pr-10">
            <div className="text-xs md:text-2xl"><h1 className="text-four">Kapil Sharma <span className="text-three">for</span></h1><h1>an event hosted</h1><h1>by XYZ </h1><h1>performed <span className="text-four">at Pune.</span></h1></div>
            <div className="flex justify-start items-center pt-3 text-xs md:text-2xl"><img src="/images/calender.svg" alt="calender" className="w-6"/> 14 March 2023</div>
        </div></>}
        {handleButton==2 && <><div className="md:pl-10 w-2/5 md:w-2/4 lg:w-1/4"><img src="/images/qZK.jpg" alt="card" className="rounded-tl-3xl rounded-tr-3xl"/></div>
        <div className="md:pr-10">
            <div className="text-xs md:text-2xl"><h1 className="text-four">Zakir Khan <span className="text-three">for</span></h1><h1>an event hosted</h1><h1>by XYZ </h1><h1>performed <span className="text-four">at Pune.</span></h1></div>
            <div className="flex justify-start items-center pt-3 text-xs md:text-2xl"><img src="/images/calender.svg" alt="calender" className="w-6"/> 14 March 2023</div>
        </div></>}
        <div><img src="/images/forward.svg" alt="forward_arrow" className="w-5 md:w-10 cursor-pointer hover:scale-125 transition-all duration-500" onClick={()=>handleForward()}/></div>
    </div>
    </div>
  )
}
