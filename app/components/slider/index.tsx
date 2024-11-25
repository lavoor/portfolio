"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from "next/image"
import '@splidejs/react-splide/css';
import {Reviews, Review} from "@/types"
import { useEffect, useState } from 'react';

const ScrollerItem = ({review}: {review: Review}) => {
    return (
        <div data-description={review.description} className="sliderSlide pointer-events-auto cursor-pointer duration-100 group relative md:w-72 md:h-24 lg:w-96 lg:h-32 md:p-4 lg:p-7 select-none box-border bg-white bg-opacity-10 rounded-sm md:rounded-lg flex gap-3 lg:gap-4 items-center hover:bg-opacity-20">
            <div className="md:h-3/4 lg:h-full aspect-square rounded-full overflow-hidden relative select-none pointer-events-none">
                <Image
                    src={`/images/pfps/${review.image}`}
                    alt="Zdjęcie autora opini"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={false}
                    sizes="(max-width: 1200px) 60vw, 80vw"
                />
            </div>
            <div className="flex flex-col">
                <span className="font-bold md:text-base lg:text-xl tracking-tight">{review.name}</span>
                <span className="font-medium md:text-sm lg:text-base tracking-tight text-white text-opacity-50 -mt-1">{review.job}</span>
            </div>
        </div>
    )
}

const Scroller = ({reviews}: Reviews) => {
    const [description, setDescription] = useState("");
    const [descriptionVisibility, setDescriptionVisibility] = useState(false)
    const [mouseposition, setMousePosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const slides = document.querySelectorAll(".sliderSlide");

        slides.forEach((item) => {
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        })

        if(window){
            setMousePosition({ x: window.innerWidth/2, y: 0 });
        }

        return () => {
            slides.forEach((item) => {
                item.removeEventListener('mouseenter', handleMouseEnter);
                item.removeEventListener('mouseleave', handleMouseLeave);
            })
        }
    }, [])
    const handleMouseEnter = (e: Event) => {
        const target = e.target as HTMLElement;
        const newDescription = target.getAttribute("data-description") || "";
        setDescription(newDescription);
        setDescriptionVisibility(true);
    }
    const handleMouseLeave = () => {
        setDescriptionVisibility(false);
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    }
    return(
        <div onMouseMove={handleMouseMove} className="-ml-[18.5%] relative">
            <Splide options={{autoWidth: true, gap: '3.75rem', focus: 0, snap: true, type: "loop", autoplay: true, pauseOnHover: true, pagination: false, arrows: false, interval: 5000, speed: 1000}}>
                {reviews.map((review) => (
                    <SplideSlide key={review.id}>
                        <ScrollerItem review={review}></ScrollerItem>
                    </SplideSlide>
                ))}
            </Splide>
            <div
                className={`absolute pointer-events-none ${descriptionVisibility ? 'opacity-100' : 'opacity-0'} top-0 z-10 duration-300 ease-out left-0 ${description.length > 380 ? 'w-[40rem]' : 'w-96'} h-max md:p-4 lg:p-7 box-border rounded-lg bg-white`}
                style={{
                    transform: `translate(${mouseposition.x - 10}px, ${mouseposition.y - 20}px)`,
                    transitionProperty: `transform, opacity`
                }}
            >
                <p className="text-black text-opacity-70 font-medium md:text-sm lg:text-base leading-5">&ldquo;{description}&rdquo;</p>
            </div>
        </div>
    )
}

export default Scroller;