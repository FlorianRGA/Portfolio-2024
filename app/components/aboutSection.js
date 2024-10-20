import IntersectionEffect from '../hooks/useIntersectionObserver';
import CardComponent from './card_component';
import MusicSvgIcon from '../media/svg/music-note-svgrepo-com.svg';
import FitnessSVGIcon from '../media/svg/fitness-svgrepo-com.svg';
import ControllerSVGIcon from '../media/svg/controller-svgrepo-com.svg';
export default function AboutMe() {
    return (
        <section className="bg-black h-auto">
            <div className="flex flex-col items-center pt-4 w-5/6 m-auto">
                <IntersectionEffect direction={"y"} time={"duration-500"}>
                    <h2 className="text-slate-50 text-xl md:text-3xl pb-6 pt-5 underline decoration-indigo-300 underline-offset-8">
                        <strong>
                            A PROPOS DE MOI</strong>
                    </h2>
                </IntersectionEffect>
                <IntersectionEffect direction={"y"} time={"duration-500"}>
                    <p className="text-gray-300 text-justify mt-4 leading-10 text-base md:text-lg pb-8">Lorem
                        ipsum odor amet, consectetuer adipiscing elit. Cubilia sit luctus fringilla
                        pretium porta libero varius eleifend. Rhoncus diam efficitur viverra habitasse
                        faucibus venenatis cursus. Netus rutrum augue suscipit arcu dolor aptent. Class
                        blandit felis at parturient conubia efficitur semper. Tristique tempor
                        parturient efficitur suscipit pharetra netus; tellus feugiat magna.</p>
                </IntersectionEffect>
                <div className=' space-y-10 mt-10 lg:flex lg:space-y-0'>
                <IntersectionEffect direction={"y"} time={"duration-100"}>
                    <CardComponent alt={'xxx'} title={'lorem'} icon={MusicSvgIcon}>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing
                            elit. Interdum tristique elit nullam sit in enim imperdiet dui.</p>
                    </CardComponent>
                    </IntersectionEffect>
                    <IntersectionEffect direction={"y"} time={"duration-500"}>
                    <CardComponent alt={'xxx'} title={'lorem'} icon={FitnessSVGIcon}>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing
                            elit. Interdum tristique elit nullam sit in enim imperdiet dui.</p>
                    </CardComponent>
                    </IntersectionEffect>
                    <IntersectionEffect direction={"y"} time={"duration-1000"} >
                    <CardComponent alt={'xxx'} title={'lorem'} icon={ControllerSVGIcon}>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing
                            elit. Interdum tristique elit nullam sit in enim imperdiet dui.</p>
                    </CardComponent>
                    </IntersectionEffect>
                </div>
            </div>

        </section>

    )
}