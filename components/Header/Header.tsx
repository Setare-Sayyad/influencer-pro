import ArrowOutward from "@/components/icon/ArrowOutward";
export default function Header() {
  return (
    <>
    <header className="flex justify-between items-center py-4 px-8 text-white max-w-[1280px] mx-auto mr-10 mt-5 ml-10">
      
      <img src="/icon.png" alt="protocol" className="w-38 h-8" />

      
      <ul className="flex gap-8 items-center whitespace-nowrap border border-[#3C383C] px-6 py-3  rounded-[32px] bg-[#50494F] bg-opasity-3 ">
        <li className="cursor-pointer font-bold">Home</li>
        <li className="cursor-pointer text-[#CCCCCC]">How it works?</li>
        <li className="cursor-pointer  text-[#CCCCCC]">Features</li>
        <li className="cursor-pointer text-[#CCCCCC]">FAQ</li>
      </ul>

      
      
      <button className="
  inline-flex items-center gap-4
  p-[1px]
  rounded-full
  border-2
  border-[#775C83]
">
  <span className="
    flex items-center gap-4
    py-2 px-3
    rounded-full
    text-white
  ">
    Book a Discovery

    <span className="
      flex items-center justify-center
      w-10 h-10
      rounded-full
      bg-[#775C83]
    ">
      <ArrowOutward className="w-5 h-5 text-white" />
    </span>
  </span>
</button>


      
    </header>
    {/* <img src="/light.svg" alt="light" className="w-100 h-100" /> */}
      <section className="flex spacebetween mt-18">
       <div className="text-white mt-37 ml-10 ">
            <button className=" inline-flex items-center gap-4 py-2 px-3 border-transparent bg-[#1D191E] rounded-full mb-6">
              <img src="/grid.svg" alt="icon" />
              invest smarter
              <ArrowOutward className="w-5 h-5 text-white opacity-75" />
            </button>
          
          <h1 className="font-bold text-4xl">Create Stunning </h1>
          <h1 className="font-bold text-4xl">AI Influencer Videos</h1>
          <p className="opacity-77">We combine content, management, and paid media to help brands grow </p>
          <p className="opacity-77">and convert on the social platforms that matter most to you.</p>
          

          <button className="
  inline-flex items-center gap-4
  py-2
  pr-2 pl-10
  mt-10
  rounded-full
  text-white
  bg-pink
  border-2
  border-[#50494F]
  border-opacity-75
  bg-clip-padding
  relative
">
  <span className="
    absolute inset-0 rounded-full
    bg-gradient-to-r from-[#FF42B9] via-[#FF9ADA] to-[#FF9ADA]
    -z-10
  " />

  <span className="relative z-10 font-medium">
    Get Started
  </span>

  
  <span className="
    relative z-10
    flex items-center justify-center
    w-10 h-10
    rounded-full
    bg-white
  ">
    <ArrowOutward className="w-5 h-5 text-[#C51075]" />
  </span>
</button>

<button className="
  inline-flex items-center gap-4
  p-[1px]
  ml-3
  rounded-full
  border-2
  border-[#50494F]
">
  <span className="
    flex items-center gap-4
    py-2 px-3
    rounded-full
    text-white
  ">
    Book a Discovery

    <span className="
      flex items-center justify-center
      w-10 h-10
      rounded-full
      bg-[#50494F]
    ">
      <ArrowOutward className="w-5 h-5 text-white" />
    </span>
  </span>
</button>


          
          
        </div>
        

        <img src="/Group-1.png" alt="girl " className="w-145 h-150 ml-30"/>
        <div className="absolute w-[10000px] h-[400px] bg-gradient-to-l from-[#261129]  via-[#01002A]   via-[#A05B99] to-[#01002A] opacity-60 filter blur-[150px] top-0 right-0"></div>
      </section>
      <div className="flex items-center justify-center h-40 w-full mt-13">
         <img src="/center.svg" alt="bookmark" />
      </div>

      <section className="ml-10 flex flex-row mt-20 max-w-[1280px] mx-auto mr-3">
      {/* بخش هدر و باتن بالایی */}

      <div className="relative mb-12 mr-90">
      <div className="absolute w-[1118px] h-[453px] bg-gradient-to-r from-[#EA80C3] via-[#A1B7F1] via-[#30096F] via-[#FF9ADA] to-[#01002A] opacity-60 filter blur-[150px]"></div>

  {/* نور نرم و غالباً صورتی/بنفش */}
  <div
    className="absolute -inset-10 w-[100%] h-[100%] pointer-events-none rounded-full blur-3xl"
    style={{
      // background: `linear-gradient(120deg, #EA80C3 20%, #A1B7F1 50%, #30096F 70%, #FF9ADA 85%, #01002A 100%);`,   /* یه تیرگی ملایم برای عمق */
      zIndex: -1,
      opacity: 0.7,
    }}
  />

  {/* محتویات اصلی */}
  <button className="inline-flex items-center gap-2 px-3 py-2 bg-[#251D26] text-white rounded-full mb-4">
    invest smarter
    <ArrowOutward className="w-5 h-5 text-white opacity-75" />
  </button>

  <p className="text-white font-bold text-4xl mb-4">
    How we can help you grew?
  </p>

  <button className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#48424F] rounded-full">
    <span className="text-white font-semibold">Book a Discovery</span>
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#48424F]">
      <ArrowOutward className="w-5 h-5 text-white" />
    </span>
  </button>
</div>



      

      {/* کارت‌ها */}
      <div className="grid grid-cols-2 gap-6 text-white">
        {/* کارت ۱ */}
        <div className="flex flex-col items-start gap-2 p-4  rounded-xl">
          <img src="/creation.svg" alt="content creation" className="w-8 h-8" />
          <h3 className="font-bold text-lg">Content Creation</h3>
          <p className="text-sm opacity-75">
            Short-form video, UGC, reels, and visuals designed to stop the scroll and spark engagement.
          </p>
        </div>

        {/* کارت ۲ */}
        <div className="flex flex-col items-start gap-2 p-4  rounded-xl">
          <img src="/creation.svg" alt="content creation" className="w-8 h-8" />
          <h3 className="font-bold text-lg">Content Creation</h3>
          <p className="text-sm opacity-75">
            Short-form video, UGC, reels, and visuals designed to stop the scroll and spark engagement.
          </p>
        </div>

        {/* کارت ۳ */}
        <div className="flex flex-col items-start gap-2 p-4  rounded-xl">
          <img src="/creation.svg" alt="content creation" className="w-8 h-8" />
          <h3 className="font-bold text-lg">social management</h3>
          <p className="text-sm opacity-75">
          We handle your content calendar, posting, and day-to-day management of your socials.
          </p>
        </div>

        {/* کارت ۴ */}
        <div className="flex flex-col items-start gap-2 p-4  rounded-xl">
          <img src="/creation.svg" alt="content creation" className="w-8 h-8" />
          <h3 className="font-bold text-lg">Paid media</h3>
          <p className="text-sm opacity-75">
          We build and manage targeted ad campaigns that turn attention into results and help you scale.
          </p>
          
        </div>
      </div>
    </section>


    

    
    
  {/* </section> */}
  </>

      
  );
}
