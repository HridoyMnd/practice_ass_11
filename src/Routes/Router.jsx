import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Rooms from "../Pages/Rooms";
import My_bookings from "../Pages/My_bookings";
import Room_details from "../Pages/Room_details";
import Login_page from "../Pages/Login_page";
import Register_page from "../Pages/Register_page";
import PrivateRoute from "./PrivateRoute";
import UpdateBookingDate from "../Pages/UpdateBookingDate";
import Review from "../Pages/Review";
// import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/rooms",
                element: <Rooms />
            },
            {
                path: "/my_bookings",
                element: <PrivateRoute><My_bookings /></PrivateRoute>
            },
            {
                path: "/room_details/:id",
                element: <PrivateRoute><Room_details /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login_page />
            }, 
            {
                path: "/register",
                element: <Register_page/>
            },
            {
                path: "/bookingDateUpdate/:id",
                element: <UpdateBookingDate/>
            },
            {
                path: "/feedback/:id",
                element: <Review/>
            }
        ]

    }

])