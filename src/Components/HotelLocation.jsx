import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { motion } from "framer-motion";
import { FaidIn } from "./Varient";

const HotelLocation = () => {
  return (
    <div className="my-10 ">
      <div className="w-9/12 max-sm:w-10/12 mx-auto text-center">
        <motion.h1
          variants={FaidIn("right", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl max-xs:text-2xl font-bold "
        >
         Our Hotel Location
        </motion.h1>
        <motion.p
          variants={FaidIn("left", 0.2, 40)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-lg max-xs:text-base max-exs:font-normal mb-4 text-gray-700 font-semibold my-2"
        >
          You can find out our hotel though this map
        </motion.p>
      </div>
      <MapContainer
        center={[23.8103, 90.4125]} // ঢাকা, বাংলাদেশ
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* মার্কার (লোকেশন পয়েন্ট) */}
        <Marker position={[23.8103, 90.4125]}>
          <Popup>এখানে তোমার হোটেল লোকেশন দেখানো হবে!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HotelLocation;
