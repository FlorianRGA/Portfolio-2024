'use client'
import Lottie from "react-lottie-player";
import LottieAstronaut from "../media/lotties/astronauteCoding.json";
import IntersectionEffect from '../hooks/useIntersectionObserver';

export default function HeroHeader() {
    return (
        <section id="header" className="bg-black w-full  text-xl text-slate-100 h-auto md:h-full lg:text-base lg:items-start">
        <div className="lg:flex-row space-y-6 items-center flex flex-col lg:w-5/6 lg:m-auto lg:items-start lg:pt-0 lg:space-y-0 h-auto lg:h-screen pb-12">
            <div className="w-9/12 lg:w-1/2 lg:h-auto ">
                <Lottie className="aria-hidden" animationData={LottieAstronaut} play loop/>
                <p className="sr-only">Cette animation montre le visage de Roche Florian, un développeur passionné.</p>
            </div>
            
            <div className="text-center w-3/4 lg:w-1/2 lg:text-left space-y-3 lg:flex lg:flex-col lg:h-full lg:justify-center">
            <IntersectionEffect direction={"y"} time={"duration-700"}>
                <h1 className="leading-10 text-2xl md:text-4xl lg:text-4xl md:leading-snug md:mb"><strong>Développeur web et web mobile</strong> 
                    <br/>
                    <i className=" text-sky-200 text-xl md:text-3xl lg:text-3xl">Florian Roche</i>
                </h1>
                </IntersectionEffect>
                <IntersectionEffect direction={"y"} time={"duration-500"}>
                <p className="text-base leading-8 text-justify md:leading-10 lg:text-left lg:text-lg lg:leading-8 md:text-lg md:pb-8 pb-8 text-gray-300">Avec une passion pour la technologie, je suis prêt à relever de nouveaux défis. À travers des projets pratiques et des compétences en constante évolution, je m&lsquo;engage à créer des solutions innovantes et efficaces. Ensemble, faisons de vos idées une réalité numérique !</p>
                <a href="#" className="hover:bg-sky-500 border border-sky-300 shadow-sky-900 shadow-md p-3 w-fit rounded-lg hover:transition-all hover:duration-400"><button type="button">Me contacter</button></a>
                </IntersectionEffect>
            </div>
            </div>
        </section>
    );
};