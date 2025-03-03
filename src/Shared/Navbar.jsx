import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import '../Custom_css/Hover.css'
import { Auth_context } from "../../Api/Context";
const Navbar = () => {

    const { loading, user, user_signOut } = useContext(Auth_context);
    const [open_menu, setOpen_menu] = useState(false);
    const [show_price, setShow_price] = useState(false);
    const [border, setBorder] = useState("")

    // loading state 
    if (loading) {
        return <span className="loading loading-bars loading-md block mx-auto min-h-screen"></span>
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                {/* navbar start */}
                <div className="navbar-start">
                    <h2 className="max-exs:text-xl max-xs:text-2xl text-3xl font-bold"><strong className="text-lime-600 cursor-pointer ">Luxe</strong>Stay</h2>
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
                            to="/rooms"

                            onMouseEnter={() => setShow_price(true)}
                            onMouseLeave={() => setShow_price(false)}
                            className={({ isActive }) => `text-lg font-semibold duration-300 hover:text-lime-600 relative ${isActive ? 'text-lime-600' : ''}`}>
                            Rooms
                            {/* all price div */}

                            <ul className={`flex-col flex absolute w-40 bg-lime-500 bg-opacity-5 border-lime-500 border-opacity-40 text-black z-10 rounded-md duration-500 overflow-hidden ${show_price ? "space-y-4 py-4 border " : "-space-y-10 py-0"} -left-12 `}>
                                <h3
                                    onMouseEnter={() => setBorder("400-499")}
                                    onMouseLeave={() => setBorder("")}
                                    className={`text-lg relative text-center font-semibold  hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    400$ - 499$
                                    <span className={`${border === "400-499" ? "w-24" : "w-0"} duration-300 h-[1px] bg-lime-600 bottom-0 py-0 px-0 left-8 absolute`}></span>
                                </h3>
                                <h3
                                    onMouseEnter={() => setBorder("300-399")}
                                    onMouseLeave={() => setBorder("")}
                                    className={`text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    300$ - 399$
                                    <span className={`${border === "300-399" ? "w-24" : "w-0"} duration-300 h-[1px] bg-lime-600 bottom-0 py-0 px-0 left-8 absolute`}></span>
                                </h3>
                                <h3

                                    onMouseEnter={() => setBorder("200-299")}
                                    onMouseLeave={() => setBorder("")}
                                    className={`text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    200$ - 299$
                                    <span className={`${border === "200-299" ? "w-24" : "w-0"} duration-300 h-[1px] bg-lime-600 bottom-0 py-0 px-0 left-8 absolute`}></span>
                                </h3>
                                <h3
                                    onMouseEnter={() => setBorder("100-199")}
                                    onMouseLeave={() => setBorder("")}
                                    className={`text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                    100$ - 199$
                                    <span className={`${border === "100-199" ? "w-24" : "w-0"} duration-300 h-[1px] bg-lime-600 bottom-0 py-0 px-0 left-8 absolute`}></span>
                                </h3>
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
                        <div className={`m-4 font-bold absolute -right-12 top-3 z-10`}>
                            <ul
                                className={`menu menu-sm bg-lime-500 bg-opacity-5 border-lime-500 border border-opacity-30 rounded-md dropdown-content py-4 space-y-3 items-center text-lg ${open_menu ? "flex" : "hidden"} font-semibold z-[1]  w-44 p-2 shadow`}>
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
                                    to="/rooms"

                                    onMouseEnter={() => setShow_price(true)}
                                    onMouseLeave={() => setShow_price(false)}
                                    className={({ isActive }) => `text-lg font-semibold w-full text-center duration-300 hover:text-lime-600 relative ${isActive ? 'text-lime-600' : ''}`}>
                                    Rooms
                                    {/* all price div */}

                                    <ul className={`flex-col flex absolute w-40 bg-lime-500 bg-opacity-5 border-lime-500 border-opacity-40 text-black z-20 rounded-md duration-500 overflow-hidden ${show_price ? "space-y-4 py-4 border " : "-space-y-10 py-0"} -right-32 top-4`}>
                                        <h3
                                            onMouseEnter={() => setBorder("400-499")}
                                            onMouseLeave={() => setBorder("")}
                                            className={`text-lg relative text-center font-semibold  hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                            400$ - 499$
                                            <span className={`${border === "400-499" ? "w-24" : "w-0"} duration-300 h-[1px] bg-lime-600 bottom-0 py-0 px-0 left-8 absolute`}></span>
                                        </h3>
                                        <h3
                                            onMouseEnter={() => setBorder("300-399")}
                                            onMouseLeave={() => setBorder("")}
                                            className={`text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                            300$ - 399$
                                            <span className={`${border === "300-399" ? "w-24" : "w-0"} duration-300 h-[1px] bg-lime-600 bottom-0 py-0 px-0 left-8 absolute`}></span>
                                        </h3>
                                        <h3

                                            onMouseEnter={() => setBorder("200-299")}
                                            onMouseLeave={() => setBorder("")}
                                            className={`text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                            200$ - 299$
                                            <span className={`${border === "200-299" ? "w-24" : "w-0"} duration-300 h-[1px] bg-lime-600 bottom-0 py-0 px-0 left-8 absolute`}></span>
                                        </h3>
                                        <h3
                                            onMouseEnter={() => setBorder("100-199")}
                                            onMouseLeave={() => setBorder("")}
                                            className={`text-lg relative text-center font-semibold hover:text-lime-600 duration-300 ${show_price ? '-mt-0' : "-mt-10"}`}>
                                            100$ - 199$
                                            <span className={`${border === "100-199" ? "w-24" : "w-0"} duration-300 h-[1px] bg-lime-600 bottom-0 py-0 px-0 left-8 absolute`}></span>
                                        </h3>
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
                        <FaBarsStaggered className="text-xl max-exs:text-lg cursor-pointer hover:text-lime-600 duration-300" />
                    </div>
                    <div>
                        {
                            user ?
                                <Link
                                    onClick={() => user_signOut()}
                                    className="mBtn relative text-lg max-exs:text-base duration-300 text-white font-semibold py-2 rounded-md bg-gradient-to-br from-lime-300 to-lime-950 hover:bg-no hover:text-black px-8 max-exs:px-3 max-xs:px-4 hover:bg-none ">
                                    Log Out
                                </Link> :
                                <Link
                                    to="/login"
                                    className="mBtn relative text-lg max-exs:text-base duration-300 text-white font-semibold py-2 rounded-md bg-gradient-to-br from-lime-300 to-lime-950 hover:bg-no hover:text-black px-10 max-exs:px-5 max-xs:px-8 hover:bg-none ">
                                    Login
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;