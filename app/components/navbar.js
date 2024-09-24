'use client'
import {useEffect, useState} from "react";
import Image from "next/image";
import GithubSVG from "../svg/github-svgrepo-com.svg";
import LinkedinSVG from "../svg/linkedin-icon-svgrepo-com.svg";
import CrossSVG from "../svg/cross-svgrepo-com.svg";

export default function Navbar() {
    const [burgerButton, setburgerButton] = useState(0);
    return (
    /* TODO :
        + Hover animation on Links
        + add href destination.
        + Burger Menu On phone/tablet media
        Opt : add logo
         */ <nav className = {burgerButton ?"h-screen w-screen text-slate-50 text-2xl fixed bg-zinc-900 md:text-3xl lg:hidden" :"h-auto bg-zinc-900 sticky top-0 text-slate-50 md:text-3xl "}> <div className="flex h-full flex-col justify-between lg:flex-row lg:m-auto lg:w-5/6 lg:text-xl">
        <div className="flex py-6 my-0 w-5/6 m-auto justify-between">
            <p className="text-center text-2xl lg:text-xl">Florian Roche</p>
            <button onClick={() => burgerButton ? setburgerButton(0) : setburgerButton(1)} className="w-8 flex flex-col justify-center lg:hidden">
                <span className={burgerButton ?"transition-all w-full relative h-1 rounded-full bg-white origin-center rotate-45":"transition-all bg-white  rounded-full w-full h-1 "}></span>
                <span className={burgerButton ?"transition-all w-full relative bottom-1 h-1 rounded-full bg-white origin-center -rotate-45":"transition-all bg-white  rounded-full w-full mt-1 h-1"}></span>
            </button>
        </div>
        <ul className={burgerButton ? "text-gray-300 flex flex-col h-2/4 ms-10 space-y-10 md:ms-0 md:text-center md:justify-between md:content-center md:space-y-0": 'hidden lg:text-gray-300 lg:flex lg:flex-row lg:items-center lg:space-x-4'}>
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
        <ul className={burgerButton ? "flex mb-7 justify-center": "hidden lg:flex lg:items-center lg:ms-8"}>
            <li className="w-12 mx-4 md:w-14 lg:w-8 lg:mx-2">
                <a href="#" target="_blank"><Image src={LinkedinSVG} layout="responsive" alt="Logo Github"/></a>
            </li>
            <li className="w-12 mx-4 md:w-14 lg:w-8 lg:mx-2">
                <a href="https://github.com/FlorianRGA" target="_blank"><Image src={GithubSVG} layout="responsive" alt="Logo Linkedin"/></a>
            </li>
        </ul>
    </div> </nav>
    );
}