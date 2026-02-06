import ArrowOutward from "./icon/ArrowOutward"
export default function HeroSection3(){
    return(
    <>
        <div className="ml-10 mt-30 mr-10 inline-flex gap-80">
            <div>
            <button className="inline-flex items-center gap-2 px-3 py-2 bg-[#251D26] text-white rounded-full mb-4">
                invest smarter
                <ArrowOutward className="w-5 h-5 text-white opacity-75" />
            </button>

            <h1 className="text-white font-bold text-4xl">Scaling a beauty brand with <br /> reels</h1>
            <p className="text-white mt-5 font-small opacity-75">Beauty brand Glowhaus came to us with great products but low engagement. We developed <br /> a UGC-driven content strategy focused on short-form video, optimized for Reels.</p>

            <button className="relative inline-flex items-center gap-4 py-2 pr-2 pl-10 mt-6 rounded-full text-white border-2 border-[#251D26] border-opacity-75">
             <span className="absolute inset-0 -z-10 rounded-full " />

             <span className="relative z-10 font-medium">
                 Get Started
             </span>

                <span className="relative z-10 flex items-center bg-[#251D26] justify-center w-10 h-10 rounded-full ">
                 <ArrowOutward className="w-5 h-5 text-white" />
                </span>
            </button>
        </div>

        <div className="mb-0">
            <img src="/people.svg"  className="w-30 h-30 "/>
            <p className="text-white opacity-75">Reel Views In the first 30 days</p>
            <img  src="/pen.svg"  className="w-27 h-27" />
            <p className="text-white opacity-75">Engagement Compared to previous</p>
        </div>


    </div>
    <span className=" flex justify-center mt-10 mb-20">
            <img src="/main-pic.png"  className="w-295 h-135 "/>
    </span>

</>
)
}