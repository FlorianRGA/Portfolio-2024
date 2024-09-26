'use client'
import Lottie from "react-lottie-player";
import LottieAstronaut from "../media/lotties/astronauteCoding.json";
import Image from "next/image";
import WaveSeparator from "../media/svg/waves.svg"

export default function HeroHeader() {
    return (
        <section id="header" className="bg-black w-full  text-xl text-slate-50 h-auto md:text-2xl md:h-full lg:text-base lg:items-start">
        <div className="lg:flex-row space-y-6 items-center flex flex-col lg:w-5/6 lg:m-auto lg:items-start lg:pt-0 lg:space-y-0 h-auto lg:h-screen">
            <div className="w-9/12 lg:w-1/2 lg:h-auto ">
                <Lottie className="aria-hidden" animationData={LottieAstronaut} play loop/>
                <p className="sr-only">Cette animation montre le visage de Roche Florian, un développeur passionné.</p>
            </div>
            <div className="text-center w-3/4 lg:w-1/2 lg:text-left space-y-3 lg:flex lg:flex-col lg:h-full lg:justify-center">
                <h1 className="leading-10 lg:text-xl lg:leading-10"><strong>Développeur web et web mobile</strong> 
                    <br/>
                    <i className=" text-purple-300">Florian Roche</i>
                </h1>
                <p className="text-base leading-8 text-justify md:text-xl md:leading-10 lg:text-left lg:text-lg lg:leading-8">Avec une passion pour la technologie, je suis prêt à relever de nouveaux défis. À travers des projets pratiques et des compétences en constante évolution, je m&lsquo;engage à créer des solutions innovantes et efficaces. Ensemble, faisons de vos idées une réalité numérique !</p>
            </div>
            </div>
            <div>
                <Image src={WaveSeparator} className="w-full bg-gray-900" alt="Vagues séparant les sections de la page"/>
            </div>
        </section>
    );
};