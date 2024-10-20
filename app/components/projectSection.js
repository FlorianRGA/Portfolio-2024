'use client'
import IntersectionEffect from '../hooks/useIntersectionObserver';
import {Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import AsekurScreenShot from '../media/images/asekur.PNG';

export default function ProjectSection(){
    return(
    <section className="bg-black text-slate-50">
    <div className="flex flex-col items-center pt-4 w-5/6 m-auto">
                <IntersectionEffect time={"duration-500"} direction={"y"}>
                    <h2 className="text-slate-50 text-xl md:text-3xl pb-6 pt-5 underline decoration-indigo-300 underline-offset-8">
                        <strong>
                            PORTFOLIO</strong>
                    </h2>
                    </IntersectionEffect>
                    </div>
                    <div>
                    <Swiper className='bg-black w-1/2' modules={[Autoplay]}
                    grabCursor={true}
                    spaceBetween={5}
                    slidesPerView={'3'}
                    autoplay={{
                            delay:2000,
                            disableOnInteraction:false}}>
                        <SwiperSlide className='shadow-2xl shadow-gray-500/50'>
                        <div className='w-24 h-96'>
                            <Image className='border-4 rounded border-slate-00' fill src={AsekurScreenShot} alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='shadow-2xl shadow-gray-500/50'>
                        <div className='w-24 h-96'>
                            <Image className='border-4 rounded border-slate-00' fill src={AsekurScreenShot} alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='shadow-2xl shadow-gray-500/50'>
                        <div className='w-24 h-96'>
                            <Image className='border-4 rounded border-slate-00' fill src={AsekurScreenShot} alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='shadow-2xl shadow-gray-500/50'>
                        <div className='w-24 h-96'>
                            <Image className='border-4 rounded border-slate-00' fill src={AsekurScreenShot} alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='shadow-2xl shadow-gray-500/50'>
                        <div className='w-24 h-96'>
                            <Image className='border-4 rounded border-slate-00' fill src={AsekurScreenShot} alt=''/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='shadow-2xl shadow-gray-500/50'>
                        <div className='w-24 h-96'>
                            <Image className='border-4 rounded border-slate-00' fill src={AsekurScreenShot} alt=''/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
    </section>
)
};