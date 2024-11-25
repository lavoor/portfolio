"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const navItemStyle = "sm:text-xl lg:text-2xl font-bold cursor-pointer text-white text-opacity-100 duration-150 hover:text-opacity-70";
const githubLink = "https://github.com/lavoor"
const Navbar = () => {
    const [expandedNav, setexpandedNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        if (expandedNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        }
    }, [expandedNav]);
    
    useEffect(() => {
        scrollNav()
        window.addEventListener('scroll', () => {
            scrollNav()
        })
        return () => {
            window.removeEventListener('scroll', () => {
                scrollNav()
            })
        }
    }, [])

    const scrollNav = () => {
        if(window.scrollY > 0){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }

    const closeNav = () => {
        if(expandedNav){
            setexpandedNav(false)
        }
    }


    return (
        <nav
            className={`futura w-full fixed border-b border-purple border-opacity-0 duration-300 top-0 z-20 ${scrolled ? 'backdrop-blur-lg bg-black bg-opacity-10 border-opacity-20' : ''}`}
            aria-label="Nawigacja"
        >
            <div className={`${expandedNav ? 'bg-purple h-screen' : 'h-0'} duration-300 w-full absolute top-0 left-0 -z-10 pointer-events-none sm:hidden`}></div>
            <div className={`${scrolled ? 'py-6' : 'py-10'} ease-in-out sm:h-auto duration-300 sm:bg-transparent container flex-col sm:flex-row mx-auto flex sm:items-center sm:justify-between overflow-hidden`}>
                <div className="flex justify-between items-center">
                    <span className={`${navItemStyle} text-2xl relative z-10`}>
                        <Link href="/">stanislawsynal</Link>
                    </span>
                    <span
                        aria-label="Przełącz menu nawigacji"
                        onClick={() => setexpandedNav(!expandedNav)}
                        className="sm:hidden flex flex-col justify-center items-center gap-2 w-8 h-8 relative z-10 cursor-pointer hover:opacity-70 duration-300"
                    >
                        <span className={`${expandedNav ? '-rotate-45' : ''} duration-300 w-full h-[3px] rounded-sm bg-white origin-top-right`}></span>
                        <span className={`${expandedNav ? 'rotate-45 mt-[11px]' : ''} duration-300 w-full h-[3px] rounded-sm bg-white origin-bottom-right`}></span>
                    </span>
                </div>
                <ul className={`${expandedNav ? 'h-screen opacity-100 w-full' : 'h-0 opacity-0 pointer-events-none sm:pointer-events-auto'} absolute sm:relative sm:opacity-100 duration-300 ease-in-out sm:max-h-none overflow-hidden flex justify-center sm:justify-end h-full sm:h-auto flex-col sm:items-center gap-12 lg:gap-24 sm:flex-row`}>
                    <li className={`${navItemStyle} text-6xl`}><Link onClick={closeNav} className="w-full block" href="/projekty">projekty</Link></li>
                    <li className={`${navItemStyle} text-6xl`}><a onClick={closeNav} className="w-full block" href={githubLink} target="_blank" rel="noopener noreferrer">github</a></li>
                    <li className={`${navItemStyle} text-6xl`}><Link onClick={closeNav} className="w-full block" href="/#kontakt">kontakt</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;