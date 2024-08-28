import { useState } from "react";

export const SectionFour = () => {
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
    <div className="text-three bg-five pt-8 md:pt-0">
      <h1 className="font-semibold  text-xl md:text-4xl shadow-inner text-center pb-5 md:pb-12 ">
        Meet Our Starclinch Squad
      </h1>
      <div className="flex flex-col justify-center items-center">
        {handleButton == 0 && (
          <div className="flex justify-around items-center">
            <img
              src="/images/st_1.jpg"
              alt="st"
              className="w-1/6 rounded-xl border-eight border-2 opacity-25"
            />
            <img
              src="/images/backward.svg"
              alt="backward_arrow"
              className="w-5 md:w-10 cursor-pointer hover:scale-125 transition-all duration-500"
              onClick={() => handleBackward()}
            />
            <img
              src="/images/st_2.jpg"
              alt="st"
              className="w-2/6 rounded-xl border-eight border-2"
            />
            <img
              src="/images/forward.svg"
              alt="forward_arrow"
              className="w-5 md:w-10 cursor-pointer hover:scale-125 transition-all duration-500"
              onClick={() => handleForward()}
            />
            <img
              src="/images/st_3.jpg"
              alt="st"
              className="w-1/6 rounded-xl border-eight border-2 opacity-25"
            />
          </div>
        )}
        {handleButton == 1 && (
          <div className="flex justify-around items-center">
            <img
              src="/images/st_3.jpg"
              alt="st"
              className="w-1/6 rounded-xl border-eight border-2 opacity-25"
            />
            <img
              src="/images/backward.svg"
              alt="backward_arrow"
              className="w-5 md:w-10 cursor-pointer hover:scale-125 transition-all duration-500"
              onClick={() => handleBackward()}
            />
            <img
              src="/images/st_1.jpg"
              alt="st"
              className="w-2/6 rounded-xl border-eight border-2"
            />
            <img
              src="/images/forward.svg"
              alt="forward_arrow"
              className="w-5 md:w-10 cursor-pointer hover:scale-125 transition-all duration-500"
              onClick={() => handleForward()}
            />
            <img
              src="/images/st_2.jpg"
              alt="st"
              className="w-1/6 rounded-xl border-eight border-2 opacity-25"
            />
          </div>
        )}
        {handleButton == 2 && (
          <div className="flex justify-around items-center">
            <img
              src="/images/st_2.jpg"
              alt="st"
              className="w-1/6 rounded-xl border-eight border-2 opacity-25"
            />
            <img
              src="/images/backward.svg"
              alt="backward_arrow"
              className="w-5 md:w-10 cursor-pointer hover:scale-125 transition-all duration-500"
              onClick={() => handleBackward()}
            />
            <img
              src="/images/st_3.jpg"
              alt="st"
              className="w-2/6 rounded-xl border-eight border-2"
            />
            <img
              src="/images/forward.svg"
              alt="forward_arrow"
              className="w-5 md:w-10 cursor-pointer hover:scale-125 transition-all duration-500"
              onClick={() => handleForward()}
            />
            <img
              src="/images/st_1.jpg"
              alt="st"
              className="w-1/6 rounded-xl border-eight border-2 opacity-25"
            />
          </div>
        )}
        <div className="py-5 flex  flex-col justify-around items-center">
          <div>
            <button className="bg-nine text-three hover:bg-two hover:text-three rounded-3xl p-3 m-2 md:m-3 px-5 py-2 hover:scale-105 transition-all duration-500 cursor-pointer">
              5 Members
            </button>
          </div>
          {handleButton ==0 && <div>
            <h1 className="md:text-3xl pb-2">Design Dynamos</h1>
          </div>}
          {handleButton ==1 && <div>
            <h1 className="md:text-3xl pb-2">Tech Titans</h1>
          </div>}
          {handleButton ==2 && <div>
            <h1 className="md:text-3xl pb-2">Daring Developers</h1>
          </div>}
          <div>
            <h1 className="text-center text-xs md:text-lg px-2 md:px-52 lg:px-80">
              The artist behind the visuals. The design superheros bring ideas
              to life, painting our projects with creativity and imagination.
            </h1>
          </div>
          <div>
            <h1 className="text-ten text-center text-xs md:text-lg py-2 md:px-52 lg:px-80 cursor-pointer hover:scale-105 transition-all duration-500">
              Our design team is growing. Apply Now ≫
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
