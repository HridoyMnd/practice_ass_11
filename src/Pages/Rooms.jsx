import { Rating } from "@smastrom/react-rating";
// import useBook from "../Hooks/useBook";
import { FaidIn } from "../Components/Varient";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useRoom from "../Hooks/useRoom";

const Rooms = () => {
  const { All_rooms } = useRoom();
  console.log(All_rooms);
  return (
    <div className="my-10">
      {/* helmet */}
      <Helmet>
        <title>All Room Page</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-14">
        {All_rooms.map((data) => (
          <Link
            to={`/room_details/${data?._id}`}
            className="hover:scale-105 transition-all duration-300 "
            key={data?._id}
          >
            <motion.div
              variants={FaidIn("up", 0.2, 40)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="p-3 rounded-md shadow-lg hover:border-lime-500 hover:border"
            >
              {/* img div */}
              <div className="h-52 ">
                <img
                  src={data?.image}
                  alt=""
                  className="object-cover w-full h-full rounded-md "
                />
              </div>
              {/* room info div */}
              <div className="text-lg font-semibold mt-6 mb-3 ">
                <div className="flex">
                  <h2 className="w-1/2">Room Name :</h2>
                  <h2 className="w-1/2"> {data?.name}</h2>
                </div>
                <div className="flex">
                  <h2 className="w-1/2">Location :</h2>
                  <h2 className="w-1/2"> {data?.location}</h2>
                </div>
                <div className="flex">
                  <h2 className="w-1/2">Price :</h2>
                  <h2 className="w-1/2"> {data?.price} $</h2>
                </div>
                <div className="flex">
                  <h2 className="w-1/2">Rating :</h2>
                  <Rating
                    className="w-1/2"
                    style={{ maxWidth: 100 }}
                    value={data?.rating}
                    readOnly
                  />
                </div>
                <div className="flex">
                  <h2 className="w-1/2">Room size :</h2>
                  <h2 className="w-1/2"> {data?.roomSize}</h2>
                </div>
                <div className="flex">
                  <h2 className="w-1/2">Total review:</h2>
                  <h2 className="w-1/2">350</h2>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
