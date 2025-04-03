import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { FaidIn } from './Varient';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
const Banner = () => {


    // banner img, title and sort description here
    const banner_images = [
        {
            id: 1,
            img: "bg-bg_back_1",
            title: 'Find Your Perfect Hotel Anywhere, Anytime!',
            description: 'Our built-in booking form provides a quick and easy reservation, allowing guests to select dates, rooms, and preferences seamlessly.',
        },
        {
            id: 2,
            img: "bg-bg_back_2",
            title: 'Exclusive Deals on Hotels Reserve Today!',
            description: 'Sed duis ut exercitation consequat anim in duis sed non ullamco qui tempor sint dolor pariatur qui in et incididunt laboris dolor.',
        },
        {
            id: 3,
            img: "bg-bg_back_3",
            title: 'Stay Where You Love Discover Your Next Destination!',
            description: 'Includes 8 elegant homepage designs, tailored to showcase hotels, resorts, and vacation rentals with style and ease.',
        },
        {
            id: 4,
            img: "bg-bg_back_4",
            title: 'Your Gateway to Comfort and Convenience',
            description: 'A fast, intuitive, and smart page builder will make your customization fast and easy. Your layout will be ready for publishing in a minute!',
        },
        {
            id: 5,
            img: "bg-bg_back_5",
            title: `Book Our Hotels And Stays  For Your Next Tour`,
            description: 'Our built-in booking form provides a quick and easy reservation, allowing guests to select dates, rooms, and preferences seamlessly.',
        },
    ]

    return (
        <>
{/* 
        <Helmet>
            <title>Home || Banner</title>
        </Helmet> */}
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

                                        className='text-5xl max-sm:text-2xl max-md:text-3xl max-md:font-bold font-extrabold text-slate-300 w-8/12 mx-auto'>
                                        {img.title}
                                    </motion.h1>
                                    {/* description section */}
                                    <motion.p
                                        className='text-base max-sm:text-sm w-3/5 max-xs:w-[95%] mx-auto'
                                        variants={FaidIn("left", 0.2, 100)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.2 }}>
                                        {img?.description}

                                    </motion.p>
                                    {/* button secion */}
                                    <Link
                                        to="/rooms"
                                    >
                                        <motion.button
                                            variants={FaidIn("up", 0.2, 30)}
                                            initial="hidden"
                                            whileInView={"show"}
                                            viewport={{ once: false, amount: 0.2 }}
                                            className='py-3 max-sm:py-1 max-md:py-2 w-44 max-sm:w-28 max-md:w-36 block mx-auto text-xl max-sm:text-base max-md:text-lg max-sm:font-bold font-semibold hover:text-slate-200 hover:border-lime-600 border text-lime-600 rounded-md'>
                                            View More
                                        </motion.button>
                                    </Link>
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

