import type { Metadata } from "next";
import { promises as fs } from 'fs';
import Image from 'next/image';
import type { Project } from '@/types';
import Link from 'next/link';
import FadeIn from "@/app/components/animationfade";

const description: string = "Sprawdź wszystkie zrealizowane przezemnie projekty.";

export const metadata: Metadata = {
    title: "Stanisław Synal - Portfolio / Projekty",
    description: description,
};

const Projekty = async () => {
    const projectsFile = await fs.readFile(process.cwd() + '/app/data/projects.json', 'utf8');
    const projects = JSON.parse(projectsFile);
    return (
        <div>
            <section className="container mx-auto pt-48 flex flex-col gap-14">
                <div className="flex flex-col">
                    <FadeIn>
                        <h1 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Zrealizowane projekty</h1>
                        <p className="text-white text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Przejrzyj zrealizowane przeze mnie projekty.</p>
                    </FadeIn>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
                    {
                        projects.map((project: Project) => (
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
            </section>
        </div>
    )
}

export default Projekty;