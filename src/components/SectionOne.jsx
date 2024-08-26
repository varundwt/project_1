export const SectionOne = () => {
  return (
    <div className="flex-row py-10 md:flex justify-center items-center h-screen gap-2 md:gap-5 lg:justify-center px-10 bg-two text-three">
        <div className="font-semibold text-5xl md:text-5xl text-right pr-8">Singers</div>
        <div className="">
            <img src="/images/AS.jpg" alt="hero-image" className="rounded-full h-64 md:h-64 lg:h-96 border-one border-44 hover:scale-125 transition-all duration-500 cursor-pointer"/>
        </div>
        <div className="font-semibold text-md text-left lg:text-2xl py-8 pl-10">
        <div className="text-four">Choose from </div>
        <div className="text-sm">100+ categories</div>
        <div className="text-lg md:text-sm ">Explore all categories</div>
        </div>
    </div>
  )
}
