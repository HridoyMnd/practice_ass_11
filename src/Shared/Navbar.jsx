import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
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
                            onMouseEnter={() => setBorder("home")}
                            onMouseLeave={() => setBorder("")}
                            className="text-lg relative font-semibold hover:text-lime-600 duration-300">
                            Home
                            <span className={`${border === 'home' ? "w-full" : "w-0"} duration-300 h-[2px] bg-lime-500 -bottom-1 left-0 absolute`}></span>
                        </NavLink>
                        <NavLink
                            onMouseEnter={() => setShow_price(true)}
                            onMouseLeave={() => setShow_price(false)}
                            className="relative">
                            <h3 className="cursor-pointer text-lg font-semibold hover:text-lime-600 duration-300 overflow-hidden ">All Rooms</h3>
                            <ul
                                className={`flex-col flex absolute w-32 border-lime-500 border-opacity-40 rounded-md duration-500 overflow-hidden ${show_price ? "space-y-4 py-4 border " : "-space-y-10 py-0"} -left-6`}>
                                <button
                                    className={`text-lg font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    $400-499
                                </button>
                                <button
                                    className={`text-lg font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    $300-399
                                </button>
                                <button
                                    className={`text-lg font-semibold hover:text-lime-600 duration-300 ${show_price ? 'mt-0' : "-mt-10"}`}>
                                    $200-299
                                </button>
                                <button
                                    className={`text-lg font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    $100-199
                                </button>
                            </ul>
                        </NavLink>
                        <NavLink
                            onMouseEnter={() => setBorder("my-b")}
                            onMouseLeave={() => setBorder('')}
                            className="text-lg font-semibold hover:text-lime-600 duration-300 relative">
                            My Bookings
                            <span className={`${border === "my-b" ? "w-full" : "w-0"} duration-300 h-[2px] bg-lime-500 -bottom-1 left-0 absolute`}></span>
                        </NavLink>
                    </ul>
                </div>
                {/* navbar end */}
                <div className="navbar-end items-center gap-5 ">
                    <div
                        className="md:hidden relative"
                        onClick={() => setOpen_menu(!open_menu)}>
                        <div className={`m-4 font-bold absolute right-6`}>
                            <ul
                                className={`menu menu-sm shadow-md rounded-md dropdown-content py-4 space-y-3 items-center text-lg ${open_menu ? "flex" : "hidden"} font-semibold z-[1]  w-44 p-2 shadow`}>
                                <NavLink>Home</NavLink>
                                <NavLink>Rooms</NavLink>
                                <NavLink>My Bookings</NavLink>
                            </ul>
                        </div>
                        <FaBarsStaggered className="text-xl cursor-pointer hover:text-lime-600 duration-300" />
                    </div>
                    <div>
                        <Link
                            className="mBtn relative text-lg duration-300 text-white font-semibold py-2 rounded-md bg-lime-600 bg-opacity-70 hover:bg-opacity-20 hover:text-black  w-32 px-10">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;