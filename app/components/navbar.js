'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import GithubSVG from "../svg/github-svgrepo-com.svg";
import LinkedinSVG from "../svg/linkedin-icon-svgrepo-com.svg";

export default function Navbar(){
    const [scrollPosition ,setscrollPosition] = useState(0);
    const [displayNavbar, setDisplayNavbar] = useState(1)
    useEffect(() => {
        const handleScroll = () => {
            let actualPosition = window.scrollY;
            if (actualPosition > scrollPosition) {
                setDisplayNavbar(0);
            }else if(actualPosition < scrollPosition){
                setDisplayNavbar(1)
            }
            setscrollPosition(actualPosition);
        }
        return () => window.addEventListener('scroll', handleScroll);
    });
    return(
        <nav className={displayNavbar ? "fixed bg-stone-900 py-4" : "fixed  hidden"}>
        <div className="flex w-5/6 m-auto">
            <ul className=" text-slate-100 flex w-4/5 m-auto space-x-11 text-xl">
                <li>
                    <a href="#">Introduction</a>
                </li>
                <li>
                    <a href="#">Projets</a>
                </li>                
                <li>
                    <a href="#">Compétences</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <ul className="flex space-x-4">
            <button>Night Mode</button>
                <li>
                    <a href="#" target="_blank"><Image src={LinkedinSVG} width={32} height={32} alt="github Logo"/></a>
                </li>
                <li>
                    <a href="https://github.com/FlorianRGA" target="_blank"><Image src={GithubSVG} width={32} height={32} alt="Linkedin Logo"/></a>
                </li>
            </ul>
            </div>
            </nav>
    );
}