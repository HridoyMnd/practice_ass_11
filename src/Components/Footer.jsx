// import { useState } from 'react';
// import logo from '../assets/logo_2.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa6';
// import '../Custom_css/Focus.css'

const Footer = () => {
    // const [rounded, setRounded] = useState("input")

    // handleFormSubmit
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='bg-gray-700 text-white py-3'>
            {/* logo section */}
            <section className=' text-center'>
                {/* <img src={logo} alt="" className='w-24 mx-auto' /> */}
                <h2 className="max-exs:text-xl max-xs:text-2xl text-3xl font-bold"><strong className="text-lime-600 cursor-pointer ">Luxe</strong>Stay</h2>
            </section>

            {/* contact information Social links */}
            <section className="flex my-3 max-md:flex-col">
                {/* contact */}
                <aside className="flex-1 bg-black bg-opacity-30 p-4 text-center space-y-1">
                    <h3 className='text-2xl font-semibold mb-3'>Contact Us</h3>
                    <p className='text-gray-300 text-base font-medium'>Email: something@gmail.com</p>
                    <p className='text-gray-300 text-base font-medium'>Whatsapp: +0033993399</p>
                    <p className='text-gray-300 text-base font-medium'>Address: 1034 Fake Street, Suite 5678, City, State, 98765</p>
                    <p>Open: 9:00am - 5:00pm </p>

                </aside>

                {/* social */}
                <aside className="flex-1 bg-gray-800  p-4 text-center">
                    <h3 className='text-2xl font-semibold mb-3'>Follow Us</h3>
                    {/* links container */}
                    <div className='flex gap-4 items-center justify-center'>
                        <div className={`h-10 w-10 cursor-pointer rounded-full flex items-center justify-center border`}>
                            <FaFacebookF className='text-xl hover:text-3xl duration-300' />
                        </div>
                        <div className={`h-10 w-10 cursor-pointer rounded-full flex items-center justify-center border`}>
                            <FaInstagram className='text-xl hover:text-3xl duration-300' />
                        </div>
                        <div className={`h-10 w-10 cursor-pointer rounded-full flex items-center justify-center border`}>
                            <FaLinkedinIn className='text-xl hover:text-3xl duration-300' />
                        </div>
                        <div className={`h-10 w-10 cursor-pointer rounded-full flex items-center justify-center border`}>
                            <FaTwitter className='text-xl hover:text-3xl duration-300' />
                        </div>
                    </div>

                    {/* search bar and button */}
                    <div className='my-5 w-10/12 mx-auto'>
                        <form onSubmit={handleFormSubmit} className='flex'>
                            <div className="relative w-10/12 mx-auto">
                                <input type="email" 
                                    name='email'
                                    required
                                    className=" w-full border rounded-l-md inp" />
                                <label
                                    className="lab text-lime-500 bg-none bg-gray-800 px-3 z-20  leading-none">
                                    Enrer your email
                                </label>
                            </div>
                            <button type='submit' className={`w-32 text-lg rounded-r-full hover:text-lime-600 duration-300 font-semibold border `}>Subscribe</button>
                        </form>
                    </div>

                </aside>
            </section >
            {/* copywirte section */}
            < section className=" w-full text-center" >
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by LuxeStay</p>
                </aside>
            </section >
        </div>
    );
};

export default Footer;