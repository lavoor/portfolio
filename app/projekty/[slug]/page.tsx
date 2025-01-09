import Button from '@/app/components/button';
import type { Project } from '@/types';
import { promises as fs } from 'fs';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import Technology from '@/app/components/technology';
import FadeIn from '@/app/components/animationfade';
import path from 'path';
import { notFound } from 'next/navigation'

async function getProject(slug: string){
    const filePath = path.join(process.cwd(), 'app/data/projects.json');
    try {
        await fs.access(filePath);
    
        const projectsFile = await fs.readFile(filePath, 'utf8');
        const projects = JSON.parse(projectsFile);
        const project = projects.find((p: Project) => p.name === slug);
        if (!project) notFound(); 
        return project;
    } catch (err) {
        console.log(err);
        notFound();
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = await getProject(params.slug)
    
    return {
        title: `Portfolio - ${project.label}`,
        description: project.small_description,
        keywords: project.keywords,
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
            },
        },
    };
}

export async function generateStaticParams() {
    const projectsFile = await fs.readFile(process.cwd() + '/app/data/projects.json', 'utf8');
    const projects = JSON.parse(projectsFile);

    return projects.map((project: Project) => ({
        slug: project.name,
    }));
}

const Project = async ({params}: {params: {slug: string}}) => {
    const project = await getProject(params.slug)

    return(
        <div>
            <section className="container mx-auto flex flex-col gap-14 pt-48">
                <div className="flex flex-col">
                    <FadeIn>
                        <h1 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">{project.label}</h1>
                        <p className="text-white text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">{project.small_description}</p>
                    </FadeIn>
                </div>
                <FadeIn>
                    <div className="relative bg-transparent w-[90%] md:w-[70%] aspect-video mx-auto">
                        <Image
                            src={`/images/projects/${project.name}/mockup.png`}
                            alt="Mockup"
                            fill={true}
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </FadeIn>
                <div className="flex flex-col">
                    <FadeIn>
                        <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Opis projektu</h2>
                        <p className="text-white text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">{project.description}</p>
                    </FadeIn>
                </div>
            </section>
            <section className="container mx-auto flex flex-col items-center gap-10 mt-24">
                <div className="flex flex-col items-center justify-center">
                    <FadeIn>
                        <h2 className="font-black text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Użyte technologie</h2>
                        <p className="text-white text-center text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Poznaj jakie technologie zostały użyte podczas tworzenia tego projektu</p>
                    </FadeIn>
                </div>
                <div className="w-full flex gap-4 md:gap-16 md:gap-y-8 flex-col md:flex-row md:flex-wrap justify-center">
                        {project.technology.map((technology: string, n: number) => (
                            <FadeIn key={n}>
                                <Technology technology={technology}></Technology>
                            </FadeIn>
                        ))}
                </div>
            </section>
            <section className="container mx-auto flex flex-col gap-10 mt-24">
                <div className="flex flex-col">
                    <FadeIn>
                        <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Podgląd projektu</h2>
                        <p className="text-white text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Przejrzyj podgląd projektu lub sprawdź samemu</p>
                    </FadeIn>
                    {project.show_preview ? (
                        <FadeIn>
                            <div className="relative rounded-xl bg-black w-full aspect-video overflow-y-scroll mt-10">
                                <div className="relative rounded-xl bg-black w-full h-auto">
                                    <Image
                                        src={`/images/projects/${project.name}/showcase.jpg`}
                                        alt="Podgląd"
                                        width={1920}
                                        height={1080}
                                        style={{ objectFit: "contain", height: 'unset', width: '100%'}}
                                        quality={80}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    ) : ""}
                    <a className="mt-10 w-max" href={project.preview} target="_blank" rel="noopener noreferrer">
                        <FadeIn>
                            <Button text="Otwórz projekt w nowej karcie" borderColor="border-purple" bgColor="bg-purple" />
                        </FadeIn>
                    </a>
                </div>
            </section>
            <section className="container mx-auto flex flex-col items-center gap-10 mt-24">
                <FadeIn>
                    <div className="flex flex-col items-center">
                        <h2 className="font-black text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tight">Spodobał ci się projekt?</h2>
                        <p className="text-white text-center text-opacity-50 font-medium text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-tight">Chcesz aby twój projekt prezentował się równie dobrze albo nawet jeszcze lepiej?</p>
                    </div>
                </FadeIn>
                <FadeIn>
                    <Link href="/#kontakt">
                        <Button text="Skontaktuj się ze mną" borderColor="border-purple" bgColor="bg-purple" />
                    </Link>
                </FadeIn>
            </section>
        </div>
    )
}

export default Project;