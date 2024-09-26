import IntersectionEffect from '../hooks/useIntersectionObserver';
export default function AboutMe() {
    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center pt-4 w-5/6 m-auto">
            <IntersectionEffect time={"duration-500"}>
                <h2 className="text-purple-300">
                    <strong>
                        A PROPOS DE MOI</strong>
                </h2>
                </IntersectionEffect>
                <IntersectionEffect time={"duration-1000"}>
                <p className="text-gray-50 text-justify mt-4 leading-8">Lorem ipsum odor amet, consectetuer
                    adipiscing elit. Cubilia sit luctus fringilla pretium porta libero varius
                    eleifend. Rhoncus diam efficitur viverra habitasse faucibus venenatis cursus.
                    Netus rutrum augue suscipit arcu dolor aptent. Class blandit felis at parturient
                    conubia efficitur semper. Tristique tempor parturient efficitur suscipit
                    pharetra netus; tellus feugiat magna.</p>
                    </IntersectionEffect>
            </div>
        </section>

    )
}