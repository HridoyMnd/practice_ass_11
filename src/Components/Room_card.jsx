import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import { motion } from "framer-motion";
import { FaidIn } from './Varient';

// eslint-disable-next-line react/prop-types
const Room_card = ({ data }) => {
    console.log(data);
    // eslint-disable-next-line react/prop-types
    const { image, name, location, price, roomSize, rating } = data;
    return (
        < motion.div
            variants={FaidIn("up", 0.2, 40)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.2}}
            className="p-3 rounded-md shadow-lg">
            {/* img div */}
            <div className="h-52 ">
                <img src={image} alt="" className="object-cover w-full h-full rounded-md hover:scale-110 transition-all duration-300" />
            </div>
            {/* room info div */}
            <div className="text-lg font-semibold mt-6 mb-3 ">
                <div className="flex">
                    <h2 className="w-1/2">Room Name :</h2>
                    <h2 className="w-1/2"> {name}</h2>
                </div>
                <div className="flex">
                    <h2 className="w-1/2">Location :</h2>
                    <h2 className="w-1/2"> {location}</h2>
                </div>
                <div className="flex">
                    <h2 className="w-1/2">Price :</h2>
                    <h2 className="w-1/2"> {price} $</h2>
                </div>
                <div className="flex">
                    <h2 className="w-1/2">Rating :</h2>
                    {/* <h2 className="w-1/2"> {rating}</h2> */}
                    <Rating
                        className="w-1/2"
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="flex">
                    <h2 className="w-1/2">Room size :</h2>
                    <h2 className="w-1/2"> {roomSize}</h2>
                </div>
            </div>
            {/* book now button */}
            <Link className="py-2 w-full text-lg hover:bg-opacity-50 duration-300 bg-lime-500 bg-opacity-10 border-opacity-50 font-semibold block text-center mx-auto border border-lime-500 rounded-md">Book Now</Link>
        </ motion.div>
    );
};

export default Room_card;