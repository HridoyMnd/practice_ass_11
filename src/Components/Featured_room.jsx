import { useEffect, useState } from "react";
import useAxiso from "../Hooks/useAxios";
import Room_card from "./Room_card";
import { motion } from "framer-motion";
import { FaidIn } from './Varient';

const Featured_room = () => {
    const [featured_room, setFeatured_room] = useState([]);
    // fetch featured room with page render
    useEffect(() => {
        useAxiso.get('/featured_room')
            .then(data => {
                setFeatured_room(data.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <div className="my-10">
            {/* featured room heading title and description */}
            <div className="w-7/12 mx-auto text-center">
                <motion.h1
                    variants={FaidIn("right", 0.2, 40)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-3xl font-bold ">
                    Visit Featured Room
                </motion.h1>
                <motion.p
                    variants={FaidIn("left", 0.2, 40)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-lg text-gray-700 font-semibold my-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi tenetur modi magnam sequi natus neque recusandae. Voluptatum voluptatem doloribus dolorem aut placeat assumenda
                </motion.p>
            </div>
            {/* room card container */}
            <div className="grid grid-cols-3 gap-10 my-10">
                {
                    featured_room.map(data =>
                        <Room_card key={data?._id} data={data} />
                    )
                }
            </div>
        </div>
    );
};

export default Featured_room;