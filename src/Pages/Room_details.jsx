import { useParams } from "react-router-dom";
import useBook from "../Hooks/useBook";
import { Rating } from "@smastrom/react-rating";
import { useContext, useEffect, useState } from "react";
import Review_slider from "../Components/Review_slider";
import { RxCross1 } from "react-icons/rx";
import { Auth_context } from "../Api/Context";
// import { FaCaretDown } from "react-icons/fa";


const Room_details = () => {
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const {user} = useContext(Auth_context);
    const { All_rooms } = useBook();
    const { id } = useParams();


    // handle booking confirm
    const handleBooking = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const date = formData.get("date")
        console.log(date);
    }

    // data load with page render
    useEffect(() => {
        const data = All_rooms.find(item => item?._id === id)
        setDetails(data || {})
        setLoading(false)
    }, [All_rooms, id])

    // loading state
    if (loading || !details) {
        return <p>Loading....</p>
    }

    const { image, price, location, rating, roomSize, description, name, amenities } = details;

    if (loading || !amenities) {
        return <p>Loading....</p>
    }
    const [wifi, air_conditioner, breakfast, pool, service] = amenities;
    return (
        <div>
            <div className="border p-4 rounded-md shadow-lg flex max-md:flex-col gap-4">
                {/* room image */}
                <div className="w-1/2 h-96 max-md:w-full max-exs:h-44 max-xs:h-60 max-sm:h-72 md:h-72 lg:h-96">
                    <img src={image} alt="" className="object-cover w-full h-full rounded-md" />
                </div>
                <div className="w-1/2 max-md:w-full ">
                    {/* details heading  */}
                    <div className="text-center">
                        <h4 className="text-2xl max-xs:text-xl md:text-xl lg:text-2xl font-bold">WellCome To Our Beautiful</h4>
                        <h4 className="text-3xl max-sm:text-2xl md:text-2xl lg:text-3xl font-bold text-lime-500">
                            {name}
                        </h4>
                    </div>
                    {/* room all info */}
                    <div className="flex max-xs:flex-col md:flex-col lg:flex-row text-lg xl:text-lg max-sm:text-base lg:text-base max-sm:font-medium font-semibold mt-10 max-xs:mt-5 md:mt-5 lg:mt-10">
                        {/* left side room info */}
                        <div className="w-1/2 max-md:w-full md:w-full lg:w-full ml-10 max-sm:ml-3 lg:ml-3">
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Hotel name: </h2>
                                <h2 className="text-lime-900">{name}</h2>
                            </div>
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Price/day: </h2>
                                <h2 className="text-lime-900">{price} $</h2>
                            </div>
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Rating: </h2>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Room size: </h2>
                                <h2 className="text-lime-900">{roomSize}</h2>
                            </div>
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Location:</h2>
                                <h2 className="text-lime-800">{location}</h2>
                            </div>
                        </div>
                        {/* right side room info */}
                        <div className="w-1/2 max-md:w-full md:w-full lg:w-full ml-10 max-sm:ml-3">
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Wifi: </h2>
                                <h2 className="text-lime-800">{wifi}</h2>
                            </div>
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Room AC: </h2>
                                <h2 className="text-lime-900">{air_conditioner}</h2>
                            </div>
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Snack: </h2>
                                <h2 className="text-lime-900">{breakfast}</h2>
                            </div>
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Pool: </h2>
                                <h2 className="text-lime-900">{pool}</h2>
                            </div>
                            <div className="flex gap-2">
                                <h2 className="text-gray-500">Service: </h2>
                                <h2 className="text-lime-900">{service}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="text-lg max-sm:text-base max-exs:font-medium font-semibold ml-10 lg:ml-3 lg:text-base xl:text-lg max-sm:ml-3">
                        <h2 className="text-gray-500">Description: </h2>
                        <p className="text-lime-900">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* review modal button */}
            <button
                onClick={() => setShowModal(true)}
                className="block mx-auto w-40 bg-gradient-to-br from-lime-300 to-lime-950 before:rounded-md after:rounded-md duration-500 border py-2 rounded-md mt-8 text-lg font-bold relative mBtn text-white hover:bg-none  hover:text-lime-600">
                Book Now
            </button>
            {/* confirm modal */}
            <div
                className={`fixed inset-0 z-30 items-center justify-center bg-black bg-opacity-50
             ${showModal ? "block" : "hidden"}`}>
                <div className="bg-white p-3 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 relative rounded-lg w-1/3 text-center">
                    <h2 className="text-xl font-semibold">Wellcome To</h2>
                    <h2 className="text-2xl font-bold text-red-500">{name}</h2>
                    <div className="flex justify-between items-center text-lg font-semibold px-5 my-3 ">
                        <h2>Price: ${price}</h2>
                        <h2>Location: {location}</h2>
                    </div>
                    <p className="text-left mx-4">{description}</p>
                    {/* Date Picker Section */}
                    <form
                        onSubmit={handleBooking}>
                        <div
                            className="relative w-10/12 mx-auto mt-6">
                            <input type="date"
                                name="date"
                                required
                                placeholder=""
                                className=" w-full border focus:border-lime-600 valid:border-lime-600 rounded-md inp" />
                            <label
                                className="lab text-lime-500 leading-none bg-white">
                               Booking chick in date
                            </label>
                        </div>
                        <div
                            className="relative w-10/12 mx-auto mt-6">
                            <input type="date"
                                name="date"
                                required
                                placeholder=""
                                className=" w-full border focus:border-lime-600 valid:border-lime-600 rounded-md inp" />
                            <label
                                className="lab text-lime-500 leading-none bg-white">
                                Booking checkout date
                            </label>
                        </div>
                        <button
                            onClick={() => setShowModal(false)}
                            className="block mx-auto w-40 bg-gradient-to-br from-lime-300 to-lime-950 before:rounded-md after:rounded-md duration-500 border py-2 rounded-md mt-8 text-lg font-bold relative mBtn text-white hover:bg-none  hover:text-lime-600">
                            Confirm
                        </button>
                    </form>


                    <RxCross1 onClick={() => setShowModal(false)} className="top-2 right-3 absolute cursor-pointer hover:text-lg duration-300 hover:text-red-500" />
                </div>
            </div>

            {/* product review slider here */}
            <div className="mb-10">
                <Review_slider />
            </div>
        </div>
    );
};

export default Room_details;