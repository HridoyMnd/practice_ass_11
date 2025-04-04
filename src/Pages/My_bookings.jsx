import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useBooked from "../Hooks/useBooked";

const My_bookings = () => {
  const {BookedRoom} = useBooked()
  return (
    <div className="my-10 border rounded-md shadow-lg">
      {/* helmet */}
      <Helmet>
        <title>
          My Booking Page
        </title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg font-medium">Name & price</th>
              <th className="text-lg font-medium text-center">
                Details Button
              </th>
              <th className="text-lg font-medium text-center">Update Button</th>
              <th className="text-lg font-medium text-center">Delete Button</th>
              <th className="text-lg font-medium text-center">Reivew Button</th>
            </tr>
          </thead>
          <tbody>
{
  BookedRoom.map((item, idx) => 
    <tr key={idx}>
    {/* room img, name and price */}
    <td className="">
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className=" rounded-md h-12 w-12">
            <img
              src={item?.image}
              alt="room img"
            />
          </div>
        </div>
        {/* room name and price section */}
        <section>
          <div className="font-bold text-lg">{item?.name}</div>
          <div className="text-sm opacity-70">{item?.location}</div>
        </section>
      </div>
    </td>
    {/* details button */}
    <td className="">
      <Link
        to={`/room_details/${item?.id}`}
        className="w-32 hover:border-lime-600 hover:text-lime-600 duration-300 border rounded-md mx-auto py-2 block text-center text-base font-semibold"
      >
        Details
      </Link>
    </td>
    {/* update button */}
    <td className="">
      <Link
        to={`/bookingDateUpdate/${item?.id}`}
        className="w-32 hover:border-amber-600 hover:text-amber-600 duration-300 border rounded-md py-2 block mx-auto text-center text-base font-semibold"
      >
        Update
      </Link>
    </td>
    {/* delete button */}
    <td className="">
      <button className="w-32 hover:border-red-600 hover:text-red-500 duration-300 font-semibold text-base block mx-auto border py-2 rounded-md">
        Delete
      </button>
    </td>
    {/* locaion */}
    <td className="">
      <button className="w-32 hover:border-lime-600 hover:text-lime-600 duration-300 font-semibold text-base block mx-auto border py-2 rounded-md">
        Delete
      </button>
    </td>
  </tr>
  )
}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default My_bookings;
