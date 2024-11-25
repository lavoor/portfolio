import type { Metadata } from "next";
import { IconArrowNarrowDown } from '@tabler/icons-react';
import Image from "next/image";
import { promises as fs } from 'fs';

import Hometextsvg from "./components/hometextsvg";
import Starsvg from "./components/starsvg";
import Slider from "./components/slider"

import type {Project, Review} from "@/types"
import Button from './components/button';
import Coopstep from './components/coopstep';
import Contactform from './components/contactform';
import Link from 'next/link';
import FadeIn from "./components/animationfade";


const description: string = "Front-end developer, który tworzy intuicyjne i nowoczesne strony internetowe. Na stronie znajdziesz projekty z wykorzystaniem React, Next.js i Vue.js, które łączą estetykę z funkcjonalnością.";

export const metadata: Metadata = {
  title: "Strona główna",
  description: description,
};


export default async function Home() {
  const reviewsFile = await fs.readFile(process.cwd() + '/app/data/reviews.json', 'utf8');
  const projectsFile = await fs.readFile(process.cwd() + '/app/data/projects.json', 'utf8');

  const reviews = JSON.parse(reviewsFile);
  const projects = JSON.parse(projectsFile);

  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center container mx-auto">
        <div className="futura flex flex-col w-full sm:w-[456px] md:w-[556px] lg:w-[656px] xl:w-[856px] 2xl:w-[956px] relative">
          <FadeIn>
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
                <div className="w-2 h-2 lg:w-4 lg:h-4 absolute left-[41%] animate-starspinaround animation-delay-2">
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
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="satoshi absolute -bottom-32 sm:-bottom-20 text-white text-opacity-50 sm:max-w-[90%] md:max-w-[75%] text-base lg:text-md xl:text-lg 2xl:text-xl font-medium tracking-tight">Z pasją tworzę nowoczesne i responsywne aplikacje internetowe, które są nie tylko estetyczne, ale także wydajne - tak, by Twój projekt wyróżniał się w sieci.</p>
          </FadeIn>
        </div>
        <a className="absolute left-0 bottom-[6%] px-8 font-medium text-lg md:text-2xl text-white opacity-70 duration-100 hover:opacity-100 flex items-center gap-1" href="#about">
          <span>Odkryj więcej</span>
          <span>
            <IconArrowNarrowDown className="h-6 w-6 md:h-8 md:w-8" stroke={2} />
          </span>
        </a>
      </section>
      <section className="container mx-auto flex items-center justify-between mt-24 scroll-mt-24" id="about">
        <div className="flex flex-col w-full">
          <FadeIn>
            <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">O mnie</h2>
            <p className="text-white text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Front-end developer, który uwielbia tworzyć nowoczesne i intuicyjne strony internetowe. Poza programowaniem, projektuję UI/UX, dbając o to, by interfejsy były estetyczne i funkcjonalne. Pracuję głównie z React i Next.js, a każdy projekt traktuję jako okazję do doskonalenia swoich umiejętności i dostarczania jak najlepszych rozwiązań.</p>
          </FadeIn>
        </div>
        <div className="relative min-w-[38%] hidden md:block">
          <FadeIn>
            <div className="w-full animate-float h-[320px]">
              <Image
                src="/images/aboutme.png"
                alt="Memoji przedstawiające mnie"
                fill={true}
                style={{objectFit: "contain"}}
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="mt-24 flex flex-col gap-10">
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-col">
            <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Zadowoleni klienci</h2>
            <p className="text-white ml-10 sm:ml-16 lg:ml-24 xl:ml-32 2xl:ml-48 text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Poznaj osoby które mi zaufały</p>
          </div>
        </div>
        <div className="hidden md:block">
          <Slider reviews={reviews}/>
        </div>
        <div className="container mx-auto flex flex-col gap-10 md:hidden">
        {reviews.map((review: Review) => (
          <FadeIn key={review.id}>
            <div className="p-6 duration-100 group relative w-full min-h-60 select-none box-border bg-white bg-opacity-10 rounded-lg flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div className="h-14 aspect-square rounded-full overflow-hidden relative select-none pointer-events-none">
                    <Image
                        src={`/images/pfps/${review.image}`}
                        alt="Zdjęcie autora opini"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={false}
                        sizes="(max-width: 1200px) 60vw, 80vw"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-tight">{review.name}</span>
                    <span className="font-medium text-base tracking-tight text-white text-opacity-50 -mt-1">{review.job}</span>
                </div>
              </div>
              <p className="text-white text-opacity-50 font-medium text-base leading-5">&ldquo;{review.description}&rdquo;</p>
            </div>
          </FadeIn>
        ))}
        </div>
      </section>
      <section className="container mx-auto mt-24 flex flex-col items-end gap-14">
        <div className="flex flex-col items-end">
          <FadeIn>
            <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Ostatnie realizacje</h2>
            <p className="text-white text-right text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Zobacz na własne oczy zrealizowane przeze mnie projekty.</p>
          </FadeIn>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {
            projects.slice(0,4).map((project: Project) => (
              <FadeIn key={project.id}>
                <Link href={`/projekty/${project.name}`}>
                  <div
                    className="w-full flex flex-col gap-4 md:gap-5 cursor-pointer hover:opacity-80 duration-300 hover:-translate-y-4"
                  >
                    <div className="relative rounded-xl bg-black w-full aspect-video overflow-hidden shadow-xl">
                      <Image
                        src={`/images/projects/${project.name}/thumbnail.jpg`}
                        alt="Podgląd projektu"
                        fill={true}
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-black text-xl xl:text-2xl 2xl:text-3xl">{project.label}</h2>
                      <p className="font-normal text-base xl:text-lg 2xl:text-xl text-white text-opacity-50">{project.small_description}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))
          }
        </div>
        <Link className="w-full md:w-max" href="/projekty">
          <Button text="Zobacz wszystkie wykonane projekty" borderColor="border-purple" bgColor="bg-purple" />
        </Link>
      </section>
      <section className="container mx-auto mt-24 flex flex-col gap-16">
        <div className="flex flex-col">
          <FadeIn>
            <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Proces współpracy ze mną</h2>
            <p className="text-white text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Dowiedz się jak przebiega współpraca od początku do końca.</p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-8 lg:gap-[4.25rem]">
          <FadeIn>
            <Coopstep title={"Kontakt ze mną"} color={"text-purple"} step={1} description="Ważny jest kontakt w celu omówienia szczegółów projektu oraz Twoich oczekiwań. Zrozumienie potrzeb jest kluczowe, aby przygotować dokładną wycenę i skuteczny plan działania."/>
          </FadeIn>
          <FadeIn delay={0.5}>
            <Coopstep title={"Praca nad projektem"} color={"text-blue"} step={2} description="Rozpocznę prace nad projektem UI. Będziemy w bieżącym kontakcie, aby upewnić się, że projekt spełnia Twoje oczekiwania. Po zatwierdzeniu projektu przystąpię do kodowania."/>
          </FadeIn>
          <FadeIn delay={0.7}>
            <Coopstep title={"Wysłanie produktu"} color={"text-yellow"} step={3} description="Projekt będzie dostępny do odbioru. Mogę go wysłać na adres e-mail lub dodać do repozytorium na GitHubie. Dodatkowo, mogę pomóc w kwestiach związanych z hostingiem i wdrożeniem."/>
          </FadeIn>
        </div>
      </section>
      <section id="kontakt" className="container mx-auto mt-24 flex flex-col gap-16 scroll-mt-24">
        <div className="flex flex-col items-end">
          <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Kontakt</h2>
          <p className="text-white text-right text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Masz pytania lub chcesz porozmawiać o projekcie?<br/> Skontaktuj się ze mną, a chętnie omówię szczegóły i odpowiem na Twoje pytania.</p>
        </div>
        <Contactform/>
      </section>
    </div>
  );
}
