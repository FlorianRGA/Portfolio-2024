import Navbar from "./components/navbar";
import HeroHeader from "./components/heroHeader";
import AboutMe from "./components/aboutme";

export default function Home() {
  return (
    <header>
    <Navbar/>
    <HeroHeader/>
    <AboutMe/>
    </header>
  );
}
