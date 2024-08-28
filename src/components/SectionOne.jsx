import { useState } from "react";
import Arrow from "/images/arrow.svg"

export const SectionOne = () => {
  const [heroComponent, setHeroComponent] = useState(0);

  function handleHero() {
    setHeroComponent(heroComponent + 1);
    if(heroComponent == 2){
      setHeroComponent(0);
    }    
  }

  return (
    <div className="flex-row px-8 py-10 md:flex justify-center items-center h-screen gap-2 md:gap-2 lg:justify-center  bg-five text-three">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {heroComponent == 0 && <div className="font-semibold  text-3xl md:text-5xl w-28 z-10 shadow-inner">
          Singers
        </div>}
        {heroComponent == 1 && <div className="font-semibold  text-3xl md:text-5xl w-28 z-10 shadow-inner">
          Dancers
        </div>}
        {heroComponent == 2 && <div className="font-semibold  text-3xl md:text-5xl  w-28 z-10 shadow-inner">
          Comedians
        </div>}
        <div>
          {heroComponent == 0 && <img
            src="/images/AS.png"
            alt="hero-image"
            className="rounded-full h-64 md:h-64 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer"
          />}
          {heroComponent == 1 && <img
            src="/images/NF.png"
            alt="hero-image"
            className="rounded-full h-64 md:h-64 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer"
          />}
          {heroComponent == 2 && <img
            src="/images/ZK.png"
            alt="hero-image"
            className="rounded-full h-64 md:h-64 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer"
          />}
        </div>
      </div>
      <div className="font-semibold md:pl-12 text-md text-center pt-8 md:pt-0 md:text-left md:text-2xl">
        <div className="text-four">Choose from </div>
        <div className="">100+ categories</div>
        <div className="flex justify-center items-center">
        <div className="text-lg md:text-sm py-4 text-six cursor-pointer" onClick={()=>handleHero()}>
          Explore all categories 
        </div>
        <img src={Arrow} alt="arrow" className="h-5"/>
        </div>
      </div>
    </div>
  );
};
