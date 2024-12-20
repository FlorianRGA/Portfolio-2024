"use client";
import IntersectionEffect from "../hooks/useIntersectionObserver";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import AsekurScreenShot from "../media/images/asekur.PNG";

export default function ProjectSection() {
  return (
    <section className="bg-black text-slate-50 h-auto">
      <div className="flex flex-col items-center pt-4 w-5/6 m-auto ">
        <IntersectionEffect time={"duration-500"} direction={"y"}>
          <h2 className="text-slate-50 text-xl md:text-3xl pb-6 pt-5 underline decoration-indigo-300 underline-offset-8">
            <strong>PORTFOLIO</strong>
          </h2>
        </IntersectionEffect>
      </div>
      <div className=" hidden md:block lg:block">
        <Swiper
          className="bg-black w-4/6 demoProject"
          modules={[Autoplay]}
          allowTouchMove={false}
          grabCursor={false}
          spaceBetween={0}
          slidesPerView={"3"}
          centeredSlides={true}
          loop
          speed={1200}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              className="border border-double rounded h-auto border-slate-200"
              src={AsekurScreenShot}
              alt=""
            />
            <p className="text-center mt-7 text-lg"></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="border border-double rounded h-auto border-slate-200"
              src={AsekurScreenShot}
              alt=""
            />
            <p className="text-center mt-7 text-lg"></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="border border-double rounded h-auto border-slate-200"
              src={AsekurScreenShot}
              alt=""
            />
            <p className="text-center mt-7 text-lg"></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="border border-double rounded h-auto border-slate-200"
              src={AsekurScreenShot}
              alt=""
            />
            <p className="text-center mt-7 text-lg"></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="border border-double rounded h-auto border-slate-200"
              src={AsekurScreenShot}
              alt=""
            />
            <p className="text-center mt-7 text-lg"></p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="border border-double rounded h-auto border-slate-200"
              src={AsekurScreenShot}
              alt=""
            />

            <p className="text-center mt-7 text-lg"></p>
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col w-5/6 pt-24 m-auto">
          <div className="flex m-auto w-2/6">
            <button className="hover:bg-sky-500 border border-sky-300 shadow-sky-900 shadow-md p-3 w-fit rounded-lg hover:transition-all hover:duration-400">
              Projets récents
            </button>
            <button className="hover:bg-sky-500 border border-sky-300 shadow-sky-900 shadow-md p-3 w-fit rounded-lg hover:transition-all hover:duration-400">
              Tout les projets
            </button>
            <button className="hover:bg-sky-500 border border-sky-300 shadow-sky-900 shadow-md p-3 w-fit rounded-lg hover:transition-all hover:duration-400">
              Back-end
            </button>
            <button className="hover:bg-sky-500 border border-sky-300 shadow-sky-900 shadow-md p-3 w-fit rounded-lg hover:transition-all hover:duration-400">
              Front-end
            </button>
            <button className="hover:bg-sky-500 border border-sky-300 shadow-sky-900 shadow-md p-3 w-fit rounded-lg hover:transition-all hover:duration-400">
              CMS
            </button>
            <button className="hover:bg-sky-500 border border-sky-300 shadow-sky-900 shadow-md p-3 w-fit rounded-lg hover:transition-all hover:duration-400">
              Divers
            </button>
          </div>
          <div className="w-4/6 border border-gray-100 flex">
            <div className=" w-2/12 mr-7">
              <Image src={AsekurScreenShot} alt="Image du site ..." />
            </div>
            <div className="w-5/6 flex flex-col justify-between">
              <h4 className="mb-4">Asekur</h4>
              <p>description...</p>
              <div className="flex">
                <Image
                  className="h-10 w-10"
                  src={AsekurScreenShot}
                  alt="logo ..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
