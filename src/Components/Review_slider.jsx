import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Review_card from './Review_card';
import { FaidIn } from './Varient';
import { motion } from "framer-motion";
const Review_slider = () => {
    return (
        <div>
            {/* review header  */}
            <div className="w-full text-center mx-auto my-10">
                <motion.h2
                    variants={FaidIn('right', 0.2, 40)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-3xl max-sm:text-xl max-md:text-2xl max-lg:text-3xl font-extrabold">What Client Say About Us</motion.h2>
                <motion.p
                    variants={FaidIn('left', 0.2, 40)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-3/5 mx-auto my-2 max-sm:text-sm max-md:text-base text-lg font-medium">Our clients love our exceptional service, luxurious accommodations, and attention to detail. They praise</motion.p>
            </div>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        520: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review_card />
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default Review_slider;