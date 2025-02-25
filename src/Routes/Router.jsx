import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Rooms from "../Pages/Rooms";
import My_bookings from "../Pages/My_bookings";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/rooms",
                element: <Rooms/>
            },
            {
                path: "/my_bookings",
                element: <My_bookings/>
            }
        ]

    }

])