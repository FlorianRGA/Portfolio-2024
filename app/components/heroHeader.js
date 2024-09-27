'use client'
import Lottie from "react-lottie-player";
import LottieAstronaut from "../media/lotties/astronauteCoding.json";
import Image from "next/image";
import WaveSeparator from "../media/svg/waves.svg"
import IntersectionEffect from '../hooks/useIntersectionObserver';

export default function HeroHeader() {
    return (
        <section id="header" className="bg-black w-full  text-xl text-slate-50 h-auto md:h-full lg:text-base lg:items-start">
        <div className="lg:flex-row space-y-6 items-center flex flex-col lg:w-5/6 lg:m-auto lg:items-start lg:pt-0 lg:space-y-0 h-auto lg:h-screen pb-12">
            <div className="w-9/12 lg:w-1/2 lg:h-auto ">
                <Lottie className="aria-hidden" animationData={LottieAstronaut} play loop/>
                <p className="sr-only">Cette animation montre le visage de Roche Florian, un développeur passionné.</p>
            </div>
            
            <div className="text-center w-3/4 lg:w-1/2 lg:text-left space-y-3 lg:flex lg:flex-col lg:h-full lg:justify-center">
            <IntersectionEffect time={"duration-1000"}>
                <h1 className="leading-10 text-2xl md:text-4xl lg:text-4xl lg:leading-snug"><strong>Développeur web et web mobile</strong> 
                    <br/>
                    <i className=" text-purple-300 text-xl md:text-3xl lg:text-3xl">Florian Roche</i>
                </h1>
                </IntersectionEffect>
                <IntersectionEffect time={"duration-700"}>
                <p className="text-base leading-8 text-justify md:leading-10 lg:text-left lg:text-lg lg:leading-8 md:text-lg">Avec une passion pour la technologie, je suis prêt à relever de nouveaux défis. À travers des projets pratiques et des compétences en constante évolution, je m&lsquo;engage à créer des solutions innovantes et efficaces. Ensemble, faisons de vos idées une réalité numérique !</p>
                </IntersectionEffect>
            </div>
            </div>
            <div>
                <Image src={WaveSeparator} className="w-full bg-gray-900" alt="Vagues séparant les sections de la page"/>
            </div>
        </section>
    );
};