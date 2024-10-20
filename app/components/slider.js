'use client';
import {Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import Image from "next/image";
import TailwindLogo from '../media/svg/tailwind-css-2.svg';
import SymfonyLogo from '../media/svg/symfonyLogo.svg';
import NextLogo from '../media/svg/next-js.svg';
import JavascriptLogo from '../media/svg/javascript-1.svg';
import CssLogo from '../media/svg/css-3.svg';
import HtmlLogo from '../media/svg/html-1.svg';
import BootstrapLogo from '../media/svg/bootstrap-5-1.svg';
import SassLogo from '../media/svg/sass-1.svg';
import WordpressLogo from '../media/svg/wordpress-icon-1.svg';
import GithubLogo from '../media/svg/githublogo.svg';

export default function Slider() {
    return (
        <Swiper
            className='bg-black'
            modules={[Autoplay]}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={25}
            slidesPerView={'4'}
            autoplay={{
            delay: 0,
            disableOnInteraction: false
        }}
            loop
            speed={1100}>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={HtmlLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={CssLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={SassLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={BootstrapLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={TailwindLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={JavascriptLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={NextLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={SymfonyLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={WordpressLogo} fill/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-11 w-11 relative">
                    <Image alt="Logo du framework Symfony" src={GithubLogo} fill/>
                </div>
            </SwiperSlide>
        </Swiper>
    )
};