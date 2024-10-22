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
                    <Swiper className='bg-black w-4/6 demoProject' modules={[Autoplay]}
                    allowTouchMove={false}
                    grabCursor={false}
                    spaceBetween={0}
                    slidesPerView={'3'}
                    centeredSlides={true}
                    loop
                    speed={1200}
                    autoplay={{
                            delay:3000,
                            disableOnInteraction:false}}
                            >
                        <SwiperSlide>
                        
                            <Image className='border border-double rounded h-auto border-slate-200' src={AsekurScreenShot} alt=''/>
                            <p className='text-center mt-7 text-lg' >hello</p>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <Image className='border border-double rounded h-auto border-slate-200' src={AsekurScreenShot} alt=''/>
                            <p className='text-center mt-7 text-lg' >hello</p>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <Image className='border border-double rounded h-auto border-slate-200' src={AsekurScreenShot} alt=''/>
                            <p className='text-center mt-7 text-lg' >hello</p>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <Image className='border border-double rounded h-auto border-slate-200' src={AsekurScreenShot} alt=''/>
                            <p className='text-center mt-7 text-lg' >hello</p>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <Image className='border border-double rounded h-auto border-slate-200' src={AsekurScreenShot} alt=''/>
                            <p className='text-center mt-7 text-lg' >hello</p>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <Image className='border border-double rounded h-auto border-slate-200' src={AsekurScreenShot} alt=''/>
                            
                            <p className='text-center mt-7 text-lg' >hello</p>
                        </SwiperSlide>
                    </Swiper>
                    </div>
    </section>
)
};