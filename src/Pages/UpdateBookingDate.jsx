import { useState } from "react";
import useBooked from "../Hooks/useBooked";
import { useParams } from "react-router-dom";

const UpdateBookingDate = () => {
  const { BookedRoom, updateDate } = useBooked();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const { id } = useParams();
  const matchedRoom = BookedRoom.find((room) => room?.id === id);
  const updatedData = {checkInDate, checkOutDate}

  //   handle update booking date
  const handleUpdateBookingDate = () => {
    updateDate(updatedData, id)
  };

  return (
    <div>
      {/* booking field */}
      <div className="w-1/2 border mt-5 mb-8 mx-auto shadow-md rounded-md p-4">
        {/* header */}
        <h2 className="text-2xl font-bold text-center my-3">
          Update Your Booking Date
        </h2>
        {/* checkin date field */}
        <div className="relative w-8/12 mx-auto mt-6">
          <input
            type="date"
            required
            defaultValue={matchedRoom?.checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className=" w-full border rounded-md inp"
          />
          <label className="lab text-lime-500 leading-none bg-white">
            Enrer your checkin date
          </label>
        </div>
        {/* checkout date field */}
        <div className="relative w-8/12 mx-auto mt-6">
          <input
            type="date"
            required
            defaultValue={matchedRoom?.checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className=" w-full border rounded-md inp"
          />
          <label className="lab text-lime-500 leading-none bg-white">
            Enrer your checkin date
          </label>
        </div>

        {/* Confirm button */}
        <button
          onClick={handleUpdateBookingDate}
          className={`block mx-auto w-40 bg-gradient-to-br from-lime-300 to-lime-950 before:rounded-md after:rounded-md duration-500 border py-2 rounded-md mt-8 text-lg font-bold relative mBtn text-white hover:bg-none hover:text-lime-600`}
        >
          Update Now
        </button>
      </div>
    </div>
  );
};

export default UpdateBookingDate;
