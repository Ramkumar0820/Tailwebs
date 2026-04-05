import { useState, useEffect } from "react";
import { GlobalButton } from "../../components";

const bgImages = {
  homepage_banner: "/homepage-banner.png",
};

const riderTextbg = "/homepage-textbg.webp";

function HomepageHeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="mt-20">
      <div
        className="relative overflow-hidden max-w-480 mx-auto lg:min-h-screen"
        style={{
          backgroundImage: isMobile ? "none" : `url(${bgImages.homepage_banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col justify-center h-full lg:min-h-screen px-4 md:px-12 lg:px-18 max-w-2xl">
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold text-[#1a2e4a] leading-tight mb-4">
            20 years of digital <br />
            transformation in <br />
            public service delivery
          </h1>

          <div className="mb-6">
            <span
              className="text-[#1a2e4a] font-bold text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] inline-block bg-no-repeat bg-center py-1 px-4"
              style={{
                backgroundImage: `url(${riderTextbg})`,
                backgroundSize: "100% 100%",
              }}
            >
              It's possible.
            </span>
          </div>

          <p className="text-[#1a2e4a] text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Catalysts. Ecosystem enablers. Problem Solvers. <br />
            At eGov, we're driven by the power of open digital
            infrastructure and ecosystems to enable governments deliver
            accessible, inclusive and transparent services to every citizen.
          </p>

          <div className="flex gap-4 flex-wrap">
            <GlobalButton
              text="Our Approach"
              navigateTo="/#"
              className="rounded-full! bg-[#3DBFB8]! text-white!"
            />
            <GlobalButton
              text="Our Impact"
              navigateTo="/#"
              variant="outline"
              className="rounded-full! border-[#1a2e4a]! text-[#1a2e4a]! hover:bg-[#1a2e4a]! hover:text-white!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageHeroSection;