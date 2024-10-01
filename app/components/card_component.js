import Image from "next/image";

export default function CardComponent({children, title, alt, icon}) {
    return (
        <div
            className="w-auto flex p-3 justify-between lg:flex-col lg:items-center">
            <div
                className="w-3/12 h-3/12 flex flex-col justify-center md:w-2/12 md:h-2/12 lg:mb-6">
                <Image priority src={icon} alt={alt}/>
            </div>
            <div className="flex flex-col w-8/12 h-8/12 text-gray-300 lg:text-center">
                <h3 className="text-base md:text-lg text-indigo-300 mb-4 lg:text-center">
                    <strong>{title}</strong>
                </h3>

                {children}
            </div>
        </div>
    )
};