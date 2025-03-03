
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Auth_provider from "../../Provider/Auth_provider";

const Layout = () => {
    return (
        <div className="w-[96%] mx-auto ">
            <Auth_provider>
                <Navbar />
                <Outlet />
            </Auth_provider>
        </div>
    );
};

export default Layout;