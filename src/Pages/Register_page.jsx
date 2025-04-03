import { useContext, useState } from "react";
import { Auth_context } from "../Api/Context";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
// import { updateProfile } from "firebase/auth";

const Register_page = () => {
  const [viewpass, setViewpass] = useState(false);
  const navigate = useNavigate();
  const { create_user, google_signIn, profileUpdate } = useContext(Auth_context);
  // get form info
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const photo = formData.get("photo");

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@%$&?*]).{6,}$/;
    if (!regExp.test(password)) {
      Swal.fire({
        title: "Invalid Password",
        text: "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.",
        icon: "error",
        confirmButtonText: "Retry",
      });
      return;
    }
    create_user(email, password)
      .then(() => {
        Swal.fire({
          title: "User Create Successful",
          text: "Wellcome to dashboard",
          icon: "success",
          timer: 2000,
        });
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "User Create Failed",
          text: err,
          icon: "error",
          timer: 2000,
        });
      });
    profileUpdate({ displayName: name, photoURL: photo });
  };

  return (
    <div className="my-10">
      {/* helmet */}
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <div className=" border shadow-lg w-2/6 mx-auto py-5 rounded-md">
        <h2 className="text-2xl text-center font-bold">
          Register your Account
        </h2>
        <form onSubmit={handleRegister} action="" className="">
          {/* user name section */}
          <div className="relative w-10/12 mx-auto mt-6">
            <input
              type="text"
              name="name"
              required
              className=" w-full border rounded-md inp"
            />
            <label className="lab text-lime-500 bg-white px-3 leading-none">
              Enter your name
            </label>
          </div>
          {/* email part */}
          <div className="relative w-10/12 mx-auto mt-6">
            <input
              type="email"
              name="email"
              required
              className=" w-full border rounded-md inp"
            />
            <label className="lab text-lime-500 bg-white px-3 leading-none">
              Enter your email
            </label>
          </div>
          {/* photo url part */}
          <div className="relative w-10/12 mx-auto mt-6">
            <input
              type="text"
              name="photo"
              required
              className=" w-full border rounded-md inp"
            />
            <label className="lab text-lime-500 bg-white px-3 leading-none">
              Your photo url
            </label>
          </div>
          {/* password div */}
          <div className="relative w-10/12 mx-auto mt-6">
            <input
              type={`${viewpass ? "text" : "password"}`}
              name="password"
              required
              className=" w-full border rounded-md inp"
            />
            <label className="lab text-lime-500 bg-white px-3 leading-none">
              Enter your password
            </label>
            {/* icon div */}
            <div
              onClick={() => setViewpass(!viewpass)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {viewpass ? (
                <IoIosEyeOff className="cursor-pointer" />
              ) : (
                <IoIosEye className="cursor-pointer" />
              )}
            </div>
          </div>
          {/* submit <button></button> */}
          <button className="py-2 w-3/5 mx-auto my-4 border rounded-md text-lg block font-bold bg-gradient-to-br from-lime-300 to-lime-950 hover:from-lime-200 duration-300 hover:to-lime-950 text-white">
            Register
          </button>
        </form>
        <button
          onClick={google_signIn}
          className="py-2 w-44 mx-auto border rounded-md text-lg hover:text-lime-600 flex items-center justify-center gap-3 hover:border-lime-600 duration-300"
        >
          <FcGoogle />
          <h2>Google</h2>
        </button>
        {/* signup link */}
        <div className="flex items-center justify-center gap-3 my-4">
          <h4>Already have an account?</h4>
          <Link to="/login" className="hover:text-purple-900 text-blue-700">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register_page;
