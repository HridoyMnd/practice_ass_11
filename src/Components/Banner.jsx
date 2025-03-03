import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { FaidIn } from './Varient';
const Banner = () => {
    // banner img, title and sort description here
    const banner_images = [
        {
            id: 1,
            img: "bg-bg_back_1",
            title: "This is banner img 1",
            description: "This is a paragraph this 1"
        },
        {
            id: 2,
            img: "bg-bg_back_2",
            title: "This is banner img 2",
            description: "This is a paragraph this 2"
        },
        {
            id: 3,
            img: "bg-bg_back_3",
            title: "This is banner img 3",
            description: "This is a paragraph this 3"
        },
        {
            id: 4,
            img: "bg-bg_back_4",
            title: "This is banner img 4",
            description: "This is a paragraph this 4"
        },
        {
            id: 5,
            img: "bg-bg_back_5",
            title: "This is banner img 5",
            description: "This is a paragraph this 5"
        }
    ]

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                {
                    banner_images.map(img =>
                        <SwiperSlide key={img?.id}>
                            <div className={`${img?.img} bg-no-repeat bg-center bg-cover h-[520px] max-sm:h-60 max-md:h-80`}>
                                <div className=' bg-black bg-opacity-60 flex flex-col justify-center space-y-4 text-white text-lg font-semibold w-full h-full text-center '>
                                    {/* heading part */}
                                    <motion.h1
                                        variants={FaidIn("right", 0.2, 100)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.1 }}

                                        className='text-5xl max-sm:text-2xl max-md:text-3xl max-md:font-bold font-extrabold text-slate-300'>
                                        {img.title}
                                    </motion.h1>
                                    {/* description section */}
                                    <motion.p
                                        className='text-base max-sm:text-sm w-3/5 max-xs:w-[95%] mx-auto'
                                        variants={FaidIn("left", 0.2, 100)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.2 }}>
                                        {/* {img?.description} */}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ullam consequuntur nisi quas incidunt? Mollitia veritatis iure quas dolores maxime.
                                        consequuntur nisi quas incidunt? Mollitia veritatis iure quas dolores maxime.
                                        
                                    </motion.p>
                                    {/* button secion */}
                                    <motion.button
                                        variants={FaidIn("up", 0.2, 30)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.2 }}
                                        className='py-3 max-sm:py-1 max-md:py-2 w-44 max-sm:w-28 max-md:w-36 block mx-auto text-xl max-sm:text-base max-md:text-lg max-sm:font-bold font-semibold hover:text-slate-200 hover:border-lime-600 duration-300  border text-lime-600 rounded-md'>
                                        View More
                                    </motion.button>
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
};

export default Banner;

