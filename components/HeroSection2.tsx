import ArrowOutward from "./icon/ArrowOutward"

export default function HeroSection2() {
  return (
    <div className="ml-10 mt-30 mr-10 inline-flex gap-80 align-center items-center ">
    <div>
      <button className="inline-flex items-center gap-2 px-3 py-2 bg-[#251D26] text-white rounded-full mb-4">
        invest smarter
        <ArrowOutward className="w-5 h-5 text-white opacity-75" />
      </button>

      <h1 className="text-white font-bold text-4xl">Over 7 years of <br /> expertise in Influencer Marketing</h1>
      <p className="text-white mt-5 opacity-75">Active campaigns in 15+ countries every <br /> month, reaching 25 million+ users.</p>

      <button className="relative inline-flex items-center gap-4 py-2 pr-2 pl-10 mt-6 rounded-full text-white border-2 border-[#50494F] border-opacity-75">
        <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#FF42B9] via-[#FF9ADA] to-[#FF9ADA]" />

        <span className="relative z-10 font-medium">
          Get Started
        </span>

        <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white">
          <ArrowOutward className="w-5 h-5 text-[#C51075]" />
        </span>
      </button>
    </div>

      <div>
        <img src="/picci.png " alt="woman"/>
      </div>











    </div>
  )
}
