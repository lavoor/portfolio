"use client"

import { useState } from "react";

const navItemStyle = "text-2xl sm:text-xl lg:text-2xl font-bold cursor-pointer text-white text-opacity-100 duration-150 hover:text-opacity-70";
const githubLink = "https://github.com/lavoor"
const Navbar = () => {
    const [expandedNav, setexpandedNav] = useState<boolean>(false)
    return (
        <nav className='futura w-full fixed top-0 z-10' aria-label="Nawigacja">
            <div className={`${expandedNav ? 'bg-purple h-screen' : 'h-0'} ease-in-out sm:h-auto duration-300 sm:bg-transparent container flex-col sm:flex-row mx-auto py-10 flex sm:items-center sm:justify-between overflow-hidden`}>
                <div className="flex justify-between items-center">
                    <span className={`${navItemStyle}`}>
                        <a>stanislawsynal</a>
                    </span>
                    <span aria-label="Przełącz menu nawigacji" onClick={() => setexpandedNav(!expandedNav)} className="sm:hidden flex flex-col justify-center items-center gap-2 w-8 h-8 cursor-pointer hover:opacity-70 duration-300">
                        <span className={`${expandedNav ? '-rotate-45' : ''} duration-300 w-full h-[3px] rounded-sm bg-white origin-top-right`}></span>
                        <span className={`${expandedNav ? 'rotate-45 mt-[11px]' : ''} duration-300 w-full h-[3px] rounded-sm bg-white origin-bottom-right`}></span>
                    </span>
                </div>
                <ul className={`${expandedNav ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} sm:opacity-100 duration-300 ease-in-out sm:max-h-none overflow-hidden flex justify-center sm:justify-end h-full sm:h-auto flex-col sm:items-center gap-12 lg:gap-24 sm:flex-row`}>
                    <li className={`${navItemStyle}`}>projekty</li>
                    <li className={`${navItemStyle}`}><a href={githubLink} target="_blank" rel="noopener noreferrer">github</a></li>
                    <li className={`${navItemStyle}`}>kontakt</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;