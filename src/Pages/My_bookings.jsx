import { Link } from "react-router-dom";

const My_bookings = () => {
  return (
    <div className="my-10 border rounded-md shadow-lg">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg font-medium text-center">Name & price</th>
              <th className="text-lg font-medium text-center">Location</th>
              <th className="text-lg font-medium text-center">Details Button</th>
              <th className="text-lg font-medium text-center">Update Button</th>
              <th className="text-lg font-medium text-center">Delete Button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* room img, name and price */}
              <td className="">
                <div className="flex items-center justify-center gap-3">
                  <div className="avatar">
                    <div className=" rounded-md h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  {/* room name and price section */}
                  <section>
                    <div className="font-bold text-lg">Hart Hagerty</div>
                    <div className="text-sm opacity-70">United States</div>
                  </section>
                </div>
              </td>
              {/* locaion */}
              <td className="">
                <h2 className="font-medium text-lg text-center">Dhaka</h2>
              </td>
              {/* details button */}
              <td className="">
                <Link to='/' className="w-32 hover:border-lime-600 hover:text-lime-600 duration-300 border rounded-md mx-auto py-2 block text-center text-base font-semibold">Details</Link>
              </td>
              {/* update button */}
              <td className="">
                <Link to='/' className="w-32 hover:border-amber-600 hover:text-amber-600 duration-300 border rounded-md py-2 block mx-auto text-center text-base font-semibold">Update</Link>
              </td>
              {/* delete button */}
              <td className="">
                <button className="w-32 hover:border-red-600 hover:text-red-500 duration-300 font-semibold text-base block mx-auto border py-2 rounded-md">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default My_bookings;
