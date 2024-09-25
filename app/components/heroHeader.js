'use client'
import Lottie from "react-lottie-player";
import LottieAstronaut from "../media/lotties/astronauteCoding.json";

export default function HeroHeader() {
    return (
        <section id="header" className="bg-zinc-800 flex flex-col w-full items-center text-xl space-y-6 text-slate-50 h-screen md:text-2xl">
            <div className="w-7/12">
                <Lottie className="aria-hidden" animationData={LottieAstronaut} play loop/>
                <p className="sr-only">Cette animation montre le visage de Roche Florian, un développeur passionné.</p>
            </div>
            <div className="text-center w-3/4 space-y-3">
                <h1 className="leading-10"><strong>Développeur web et web mobile</strong> 
                    <br/>
                    <i className=" text-purple-300">Florian Roche</i>
                </h1>
                <p className="text-base leading-8 text-justify md:text-xl md:leading-10">Avec une passion pour la technologie, je suis prêt à relever de nouveaux défis. À travers des projets pratiques et des compétences en constante évolution, je m&lsquo;engage à créer des solutions innovantes et efficaces. Ensemble, faisons de vos idées une réalité numérique !</p>
            </div>
        </section>
    );
};