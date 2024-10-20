import Navbar from "./components/navbar";
import HeroHeader from "./components/heroHeader";
import AboutMe from "./components/aboutSection";
import Slider from "./components/slider";
import ProjectSection from "./components/projectSection";

export default function Home() {
  return (
    <>
    <header>
    <Navbar/>
    <HeroHeader/>
    </header>
    <main>
    <AboutMe/>
    <ProjectSection/>
    <Slider/>

    </main>
    </>
  );
}
