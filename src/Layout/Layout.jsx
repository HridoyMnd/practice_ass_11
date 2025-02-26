
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
// import Focus from "../Custom_css/Focus";


const Layout = () => {
    return (
        <div className="w-[96%] mx-auto ">
            <Navbar />
            <Outlet />
            {/* <Focus/> */}
        </div>
    );
};

export default Layout;