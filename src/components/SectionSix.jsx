export const SectionSix = () => {
  return (
    <div className="bg-gradient-to-b from-five from-10% via-eleven via-50% to-five text-three pb-20">
      <div className="px-2 md:px-32 py-20 pb-10">
        <div className="flex flex-col justify-center items-center border-2 border-eleven rounded-3xl lg:rounded-full  bg-five bg-opacity-40 backdrop-blur-lg">
          <div>
            <h1 className="text-eleven pt-10 md:pt-20 pb-2 text-left">
              We are the team of
            </h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl">20+ Talented Folks</h1>
          </div>
          <div className="px-1 text-xs md:text-md py-6 text-center">
            From passion-driven dedication to impactful contribution, <br /> we
            do it all here. We are growing and will be excited to hear <br />{" "}
            from you!
          </div>
          <div className="pb-5 md:pb-10">
            <button className="bg-one text-three rounded-3xl p-3 m-2 md:m-3 px-5 py-2 hover:scale-105 transition-all duration-500 cursor-pointer">
              Join our Team
            </button>
          </div>
          <div className="md:flex-row lg:flex">
            <div className="flex pb-5 md:gap-1">
              <div>
                <button className=" text-three bg-five rotate-12 bg-opacity-40 backdrop-blur-lg rounded-3xl px-3 py-1 text-xs md:text-sm font-light hover:scale-105 transition-all duration-500 cursor-pointer">
                  Focused
                </button>
              </div>
              <div>
                <button className=" text-three bg-five -rotate-12 bg-opacity-40 backdrop-blur-lg rounded-3xl px-3 py-1 text-xs md:text-sm font-light hover:scale-105 transition-all duration-500 cursor-pointer">
                  Collaborative
                </button>
              </div>
              <div>
                <button className=" text-three bg-five rotate-12 bg-opacity-40 backdrop-blur-lg rounded-3xl px-3 py-1 text-xs md:text-sm font-light hover:scale-105 transition-all duration-500 cursor-pointer">
                  United
                </button>
              </div>
            </div>
            <div className="flex pb-5 md:gap-1">
              <div>
                <button className=" text-three bg-five -rotate-12 bg-opacity-40 backdrop-blur-lg rounded-3xl px-3 py-1 text-xs md:text-sm font-light hover:scale-105 transition-all duration-500 cursor-pointer">
                  Vibrant
                </button>
              </div>
              <div>
                <button className=" text-three bg-five rotate-12 bg-opacity-40 backdrop-blur-lg rounded-3xl px-3 py-1 text-xs md:text-sm font-light hover:scale-105 transition-all duration-500 cursor-pointer">
                  Dynamic
                </button>
              </div>
              <div>
                <button className=" text-three bg-five -rotate-12 bg-opacity-40 backdrop-blur-lg rounded-3xl px-3 py-1 text-xs md:text-sm font-light hover:scale-105 transition-all duration-500 cursor-pointer">
                  Motivated
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
