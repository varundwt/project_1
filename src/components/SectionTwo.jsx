import { useState } from "react";

export const SectionTwo = () => {
    const [handleButton, setHandleButton] = useState(false);

    function handlePhotos() {
        setHandleButton(false);
    }

    function handleVideos() {
        setHandleButton(true);
    }

  return (
    <div
      
      className="text-three bg-five "
    >
      <div className="flex flex-col justify-center items-center md:mt-0">
        <div className="flex justify-between items-center gap-4 rounded-2xl p-8 shadow-md bg-seven">
          <div>
            <button className="bg-three text-two hover:bg-four hover:text-two rounded-3xl p-3 px-5 hover:scale-105 transition-all duration-500 cursor-pointer" onClick={()=>handlePhotos()}>
              Photos
            </button>
          </div>
          <div>
            <button className="bg-three text-two hover:bg-four hover:text-two rounded-3xl p-3 px-5 hover:scale-105 transition-all duration-500 cursor-pointer" onClick={()=>handleVideos()}>
              Videos
            </button>
          </div>
        </div>
        {!handleButton && <div className="p-10 w-2/3">
          <div className="md:flex gap-3 md:py-3 pb-0">
            <div><img src="/images/gridKK.png" alt="grid-images" className="rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-md border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
            <div><img src="/images/gridAS2.png" alt="grid-images" className="rounded-3xl border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
            <div><img src="/images/gridKK.png" alt="grid-images" className="rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-md border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500" /></div>
            <div><img src="/images/gridAS2.png" alt="grid-images" className="rounded-3xl border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
          </div>
          <div className="md:flex gap-3 py-3 pt-0">
            <div><img src="/images/gridKS.jpg" alt="grid-images" className="rounded-3xl border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
            <div><img src="/images/gridZK.jpg" alt="grid-images" className="border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
            <div><img src="/images/gridKS.jpg" alt="grid-images" className="rounded-3xl border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
            <div><img src="/images/gridZK.jpg" alt="grid-images" className="border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
          </div>
        </div>}
        {handleButton && <div className="p-10 w-2/3">
          <div className="md:flex gap-10 md:py-3 pb-0">
            <div><img src="/images/vidAS.jpg" alt="grid-images" className="rounded-3xl border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
            <div><img src="/images/vidAS.jpg" alt="grid-images" className="rounded-3xl border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500"/></div>
            <div><img src="/images/vidAS.jpg" alt="grid-images" className="rounded-3xl border-eight border-2 my-3 md:my-0 hover:scale-105 transition-all duration-500" /></div>            
          </div>          
        </div>}
      </div>
    </div>
  );
};
