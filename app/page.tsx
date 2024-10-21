// import Image from "next/image";
import Hometextsvg from "./components/hometextsvg";
import Starsvg from "./components/starsvg";
import { IconArrowNarrowDown } from '@tabler/icons-react';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center container mx-auto">
        <div className="futura flex flex-col w-full sm:w-[456px] md:w-[556px] lg:w-[656px] xl:w-[856px] 2xl:w-[956px] relative">
          <div className="absolute -top-[30%] sm:-top-[15%] right-0">
            <h1 className="font-bold text-lg sm:text-2xl lg:text-4xl xl:text-5xl 2xl:text-[3.375rem] tracking-tight">
              stanisław synal
            </h1>
            <div className="w-full absolute h-full top-0">
              <div className="w-[10px] h-[10px] lg:w-5 lg:h-5 absolute left-[20%] animate-starspinaround animation-delay-1">
                <div className="animate-starspin drop-shadow-star">
                  <Starsvg width={"100%"}/>
                </div>
              </div>
              <div className="w-2 h-2 lg:w-4 lg:h-4 absolute left-[35%] animate-starspinaround animation-delay-2">
                <div className="animate-starspin drop-shadow-star">
                  <Starsvg width={"100%"}/>
                </div>
              </div>
              <div className="w-[11px] h-[11px] lg:w-4 lg:h-4 absolute left-[68%] animate-starspinaround animation-delay-3">
                <div className="animate-starspin drop-shadow-star">
                  <Starsvg width={"100%"}/>
                </div>
              </div>
            </div>
          </div>
          <Hometextsvg width={"100%"}/>
          <p className="satoshi absolute -bottom-32 sm:-bottom-20 text-white text-opacity-50 sm:max-w-[90%] md:max-w-[75%] text-base lg:text-md xl:text-lg 2xl:text-xl font-medium tracking-tight">Z pasją tworzę nowoczesne i responsywne aplikacje internetowe, które są nie tylko estetyczne, ale także wydajne - tak, by Twój projekt wyróżniał się w sieci.</p>
        </div>
        <a className="absolute left-0 bottom-[6%] px-8 font-medium text-lg md:text-2xl text-white opacity-70 duration-100 hover:opacity-100 flex items-center gap-1" href="#about">
          <span>Odkryj więcej</span>
          <span>
            <IconArrowNarrowDown className="h-6 w-6 md:h-8 md:w-8" stroke={2} />
          </span>
        </a>
      </section>
      <section className="container mx-auto flex items-center justify-between">
        <div className="flex flex-col w-full">
          <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">O mnie</h2>
          <p className="text-white text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Front-end developer, który uwielbia tworzyć nowoczesne i intuicyjne strony internetowe. Poza programowaniem, projektuję UI/UX, dbając o to, by interfejsy były estetyczne i funkcjonalne. Pracuję głównie z React i Next.js, a każdy projekt traktuję jako okazję do doskonalenia swoich umiejętności i dostarczania jak najlepszych rozwiązań.</p>
        </div>
        <div className="relative min-w-[38%] h-[320px] hidden md:block animate-float">
          <Image
            src="/images/aboutme.png"
            alt="Memoji przedstawiające mnie"
            fill={true}
            style={{objectFit: "contain"}}
          />
        </div>
      </section>
    </div>
  );
}
