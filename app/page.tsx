import Header from "@/components/Header/Header";
import ArrowOutward from "@/components/icon/ArrowOutward";
import HeroSection2 from "@/components/HeroSection2";
import HeroSection3 from "@/components/HeroSection3";

export default function Home() {
  return (
    <div className="relative font-sans mx-auto max-w-[1280px] min-h-screen overflow-hidden">

      {/* 🔥 نور از بالا سمت راست */}
      <div
        className="
          absolute
          -top-[200px]
          -right-[500px]
          w-[800px]
          h-[800px]
          opacity-100
          blur-[160px]
          bg-[radial-gradient(circle,
            #EA80C3_20%,
            #A1B7F1_40%,
            #FF9ADA_60%,
            #D12190_80%,
            transparent_100%
          )]
        "
      />

      {/* محتوا */}
      <div className="relative z-10">
        <Header />
        <HeroSection2 />
        <HeroSection3 />
      </div>

    </div>
  );
}
