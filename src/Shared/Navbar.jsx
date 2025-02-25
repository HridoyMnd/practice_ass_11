import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import '../Custom_css/Hover.css'
const Navbar = () => {
    const [open_menu, setOpen_menu] = useState(false);
    const [show_price, setShow_price] = useState(false);
    const [border, setBorder] = useState("")

    return (
        <div>
            <div className="navbar bg-base-100">
                {/* navbar start */}
                <div className="navbar-start">
                    <h2 className="text-3xl font-bold"><strong className="text-lime-600 cursor-pointer ">Luxe</strong>Stay</h2>
                </div>
                {/* navbar center */}
                <div
                    className="navbar-center max-md:hidden">
                    <ul className="menu menu-horizontal px-1 space-x-8">
                        <NavLink
                            to="/"
                            onMouseEnter={() => setBorder("home")}
                            onMouseLeave={() => setBorder("")}
                            className={({ isActive }) => `text-lg relative font-semibold duration-300 ${isActive ? "text-lime-600" : ""}`}>
                            Home
                            <span className={`${border === 'home' ? "w-full" : "w-0"} duration-300 h-[2px] bg-lime-500 -bottom-1 left-0 absolute`}></span>
                        </NavLink>
                        {/* All Room nav */}
                        <NavLink

                            onMouseEnter={() => setShow_price(true)}
                            onMouseLeave={() => setShow_price(false)}
                            className={`relative`}>
                            <NavLink
                                to="/rooms"

                                className={({ isActive }) => `${isActive ? "text-lime-600" : ""} cursor-pointer text-lg font-semibold duration-300 overflow-hidden`}>
                                All Rooms
                            </NavLink>
                            <ul
                                className={`flex-col flex absolute w-32 border-lime-500 border-opacity-40 rounded-md duration-500 overflow-hidden ${show_price ? "space-y-4 py-4 border " : "-space-y-10 py-0"} -left-6`}>
                                <NavLink
                                    to="/rooms"
                                    onMouseEnter={() => setBorder("400-499")}
                                    onMouseLeave={() => setBorder("")}
                                    className={({ isActive }) => `${isActive ? "" : ""} text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    $400-499
                                    <span className={`${border === '400-499' ? "w-[74px]" : "w-0"} duration-300 h-[1px] bg-lime-500 -bottom-1 left-7 absolute`}></span>
                                </NavLink>
                                <NavLink
                                    to="/rooms"
                                    onMouseEnter={() => setBorder("300-399")}
                                    onMouseLeave={() => setBorder("")}
                                    className={({ isActive }) => `${isActive ? "" : ""} text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    $300-399
                                    <span className={`${border === '300-399' ? "w-[74px]" : "w-0"} duration-300 h-[1px] bg-lime-500 -bottom-1 left-7 absolute`}></span>
                                </NavLink>
                                <NavLink
                                    to="/rooms"
                                    onMouseEnter={() => setBorder("200-299")}
                                    onMouseLeave={() => setBorder("")}
                                    className={({ isActive }) => `${isActive ? "" : ""} text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    $200-299
                                    <span className={`${border === '200-299' ? "w-[74px]" : "w-0"} duration-300 h-[1px] bg-lime-500 -bottom-1 left-7 absolute`}></span>
                                </NavLink>
                                <NavLink
                                    to="/rooms"
                                    onMouseEnter={() => setBorder("100-199")}
                                    onMouseLeave={() => setBorder("")}
                                    className={({ isActive }) => `${isActive ? "" : ""} text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    $100-199
                                    <span className={`${border === '100-199' ? "w-[74px]" : "w-0"} duration-300 h-[1px] bg-lime-500 -bottom-1 left-7 absolute`}></span>
                                </NavLink>
                            </ul>
                        </NavLink>
                        {/* my bookings navlink */}
                        <NavLink
                            to="/my_bookings"
                            onMouseEnter={() => setBorder("my-b")}
                            onMouseLeave={() => setBorder('')}
                            className={({ isActive }) => `text-lg font-semibold duration-300 relative ${isActive ? 'text-lime-600' : ''}`}>
                            My Bookings
                            <span className={`${border === "my-b" ? "w-full" : "w-0"} duration-300 h-[2px] bg-lime-500 -bottom-1 left-0 absolute`}></span>
                        </NavLink>
                    </ul>
                </div>
                {/* navbar end */}
                <div className="navbar-end items-center gap-5 ">

                    {/* mobile menu bar */}
                    <div
                        className="md:hidden relative"
                        onClick={() => setOpen_menu(!open_menu)}>
                        <div className={`m-4 font-bold absolute -right-12 top-3`}>
                            <ul
                                className={`menu menu-sm shadow-md rounded-md dropdown-content py-4 space-y-3 items-center text-lg ${open_menu ? "flex" : "hidden"} font-semibold z-[1]  w-44 p-2 shadow`}>
                                {/* home navlink */}
                                <NavLink
                                    to="/"
                                    onMouseEnter={() => setBorder("home")}
                                    onMouseLeave={() => setBorder("")}
                                    className={({ isActive }) => `text-lg relative w-full text-center font-semibold duration-300 ${isActive ? "text-lime-600" : ""}`}>
                                    Home
                                    <span className={`${border === 'home' ? "w-12" : "w-0"} duration-300 h-[2px] bg-lime-500 -bottom-1 left-14 absolute`}></span>
                                </NavLink>
                                {/* all rooms navlink */}
                                <NavLink

                                    onMouseEnter={() => setShow_price(true)}
                                    onMouseLeave={() => setShow_price(false)}
                                    className={`relative w-full text-center`}>
                                    <NavLink
                                        to="/rooms"

                                        className={({ isActive }) => `${isActive ? "text-lime-600" : ""} cursor-pointer text-lg font-semibold duration-300 overflow-hidden`}>
                                        All Rooms
                                    </NavLink>
                                    <ul
                                        className={`flex-col flex absolute w-32 border-lime-500 border-opacity-40 rounded-md duration-500 overflow-hidden ${show_price ? "space-y-4 py-4 border " : "-space-y-10 py-0"} left-36 top-0`}>
                                        <NavLink
                                            to="/rooms"
                                            onMouseEnter={() => setBorder("400-499")}
                                            onMouseLeave={() => setBorder("")}
                                            className={({ isActive }) => `${isActive ? "" : ""} text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                            $400-499
                                            <span className={`${border === '400-499' ? "w-[74px]" : "w-0"} duration-300 h-[1px] bg-lime-500 -bottom-1 left-7 absolute`}></span>
                                        </NavLink>
                                        <NavLink
                                            to="/rooms"
                                            onMouseEnter={() => setBorder("300-399")}
                                            onMouseLeave={() => setBorder("")}
                                            className={({ isActive }) => `${isActive ? "" : ""} text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                            $300-399
                                            <span className={`${border === '300-399' ? "w-[74px]" : "w-0"} duration-300 h-[1px] bg-lime-500 -bottom-1 left-7 absolute`}></span>
                                        </NavLink>
                                        <NavLink
                                            to="/rooms"
                                            onMouseEnter={() => setBorder("200-299")}
                                            onMouseLeave={() => setBorder("")}
                                            className={({ isActive }) => `${isActive ? "" : ""} text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                            $200-299
                                            <span className={`${border === '200-299' ? "w-[74px]" : "w-0"} duration-300 h-[1px] bg-lime-500 -bottom-1 left-7 absolute`}></span>
                                        </NavLink>
                                        <NavLink
                                            to="/rooms"
                                            onMouseEnter={() => setBorder("100-199")}
                                            onMouseLeave={() => setBorder("")}
                                            className={({ isActive }) => `${isActive ? "" : ""} text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                            $100-199
                                            <span className={`${border === '100-199' ? "w-[74px]" : "w-0"} duration-300 h-[1px] bg-lime-500 -bottom-1 left-7 absolute`}></span>
                                        </NavLink>
                                    </ul>
                                </NavLink>
                                {/* my bookings navlink */}
                                <NavLink
                                    to="/my_bookings"
                                    onMouseEnter={() => setBorder("my-b")}
                                    onMouseLeave={() => setBorder('')}
                                    className={({ isActive }) => `text-lg w-full text-center font-semibold duration-300 relative ${isActive ? 'text-lime-600' : ''}`}>
                                    My Bookings
                                    <span className={`${border === "my-b" ? "w-28" : "w-0"} duration-300 h-[2px] bg-lime-500 -bottom-1 left-6 absolute`}></span>
                                </NavLink>
                            </ul>
                        </div>
                        <FaBarsStaggered className="text-xl cursor-pointer hover:text-lime-600 duration-300" />
                    </div>
                    <div>
                        <Link
                            className="mBtn relative text-lg duration-300 text-white font-semibold py-2 rounded-md bg-lime-600 bg-opacity-70 hover:bg-opacity-20 hover:text-black px-10 ">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;