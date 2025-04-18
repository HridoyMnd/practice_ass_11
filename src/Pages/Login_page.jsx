import { useContext, useState } from "react";
import "../Custom_css/Focus.css";
import { Auth_context } from "../Api/Context";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
// import WebToken from "../Components/WebToken";
import useAxios from "../Hooks/useAxios";

const Login_page = () => {
  const { google_signIn, user_signIn } = useContext(Auth_context);
  const [viewpass, setViewpass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // sing in with email and password
    user_signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "User Login Successful",
          text: "Wellcome to dashboard",
          icon: "success",
          timer: 2000,
        });
        navigate(from, { replace: true });

        // jot token create

        // const user = res.user.email;
        // useAxios.post("/jot", {user}).then((res) => {
        //   console.log(res);
        // });

        // json web token  create this function
        // const userUid = res.user.uid;
        // console.log(userUid);
        // WebToken({ userUid });
      })
      .catch((err) => {
        Swal.fire({
          title: "User Login Failed",
          text: err,
          icon: "error",
          timer: 2000,
        });
      });
  };

  // handle google sign In
  const handleGoogleSingIn = () => {
    google_signIn()
      .then((res) => {
        Swal.fire({
          title: "User Login Successful",
          text: "Wellcome to dashboard",
          icon: "success",
          timer: 2000,
        });
        navigate(from, { replace: true });

        // json web token  create this function
        // const user_email = {email:res.user.email}
        // useAxios.post('/jwt_token', user_email, {
        //   withCredentials:true
        // })
        // .then(res => {
        //   console.log(res.data);
        // })


        const user = res.user.email;
        useAxios.post("/jot", {user}, {
          withCredentials:true
        }).then((res) => {
          console.log(res.data);
        });



      })
      .catch((err) => {
        Swal.fire({
          title: "User Login Failed",
          text: err,
          icon: "error",
          timer: 2000,
        });
      });
  };

  return (
    <div className=" border shadow-lg w-2/6 mx-auto py-5 my-10 rounded-md">
      {/* helmet implement */}
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <h2 className="text-2xl text-center font-bold">Login to your Account</h2>
      <form onSubmit={handleSignIn} action="" className="">
        {/* email part */}
        <div className="relative w-10/12 mx-auto mt-6">
          <input
            type="email"
            name="email"
            required
            className=" w-full border rounded-md inp"
          />
          <label className="lab text-lime-500 leading-none bg-white">
            Enrer your email
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
          <label className="lab text-lime-500 leading-none bg-white">
            Enrer your password
          </label>
          {/* password show icon */}
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
          Login
        </button>
      </form>
      <button
        onClick={handleGoogleSingIn}
        className="py-2 w-44 mx-auto border rounded-md text-lg hover:text-lime-600 flex items-center justify-center gap-3 hover:border-lime-600 duration-300"
      >
        <FcGoogle />
        <h2>Google</h2>
      </button>
      {/* signup link */}
      <div className="flex items-center justify-center gap-3 my-4">
        <h4>Have not any accout ?</h4>
        <Link to="/register" className="hover:text-purple-900 text-blue-700">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login_page;
