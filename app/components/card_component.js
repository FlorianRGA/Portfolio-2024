import Image from "next/image";

export default function CardComponent({children, title, alt, icon}) {
    return (
        <div
            className="w-auto flex p-3 justify-between">
            <div
                className="w-3/12 h-3/12 flex flex-col justify-center">
                <Image src={icon} alt={alt}/>
            </div>
            <div className="flex flex-col w-8/12 h-8/12">
                <h3 className="text-base md:text-lg text-purple-300 mb-4">
                    <strong>{title}</strong>
                </h3>

                {children}
            </div>
        </div>
    )
};