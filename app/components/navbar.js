'use client'
import {useEffect, useState} from "react";
import Image from "next/image";
import GithubSVG from "../svg/github-svgrepo-com.svg";
import LinkedinSVG from "../svg/linkedin-icon-svgrepo-com.svg";

export default function Navbar() {
    const [scrollPosition,
        setscrollPosition] = useState(0);
    const [displayNavbar,
        setDisplayNavbar] = useState(1)
    useEffect(() => {
        const handleScroll = () => {
            let actualPosition = window.scrollY;
            if (actualPosition > scrollPosition) {
                setDisplayNavbar(0);
            } else if (actualPosition < scrollPosition) {
                setDisplayNavbar(1)
            }
            setscrollPosition(actualPosition);
        }
        return () => window.addEventListener('scroll', handleScroll);
    });
    return (
        /* TODO : 
        + Hover animation on Links 
        + add href destination. 
        + Burger Menu On phone/tablet media 
        Opt : add logo
         */
        <nav
            className={displayNavbar
            ? " h-screen text-slate-50 text-3xl lg:h-auto lg:text-xl fixed bg-stone-900 lg:py-4"
            : "fixed hidden"}>
            <div className="flex-col space-y-36 lg:flex lg:flex-row lg:w-5/6 lg:m-auto lg:space-y-0">
            <p className="text-center text-xl py-2 lg:hidden">Florian Roche</p>
                <ul className="space-y-6 ms-10 lg:items-center lg:space-y-0 lg:flex lg:w-4/5 lg:m-auto lg:space-x-11 lg:ms-0">
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
                <ul className="flex justify-center lg:space-x-4 pt-8 lg:pt-0">
                    <li className="w-14 mx-4 lg:w-12">
                        <a href="#" target="_blank" ><Image src={LinkedinSVG} layout="responsive" alt="Logo Github"/></a>
                    </li>
                    <li className="w-14 mx-4 lg:w-12">
                        <a href="https://github.com/FlorianRGA" target="_blank"><Image src={GithubSVG} layout="responsive" alt="Logo Linkedin"/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}