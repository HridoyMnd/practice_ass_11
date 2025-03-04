
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Auth_provider from "../Provider/Auth_provider";
import Footer from "../Components/Footer";


const Layout = () => {
    return (
        <div className="w-[96%] mx-auto ">
            <Auth_provider>
                <Navbar />
                <Outlet />
                <Footer />
            </Auth_provider>
        </div>
    );
};

export default Layout;