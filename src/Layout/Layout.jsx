
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const Layout = () => {
    return (
        <div className="w-[96%] mx-auto ">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;