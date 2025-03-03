import { useContext, useState } from "react";
import { Auth_context } from "../../Api/Context";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Register_page = () => {
    const [viewpass, setViewpass] = useState(false)
    const { create_user, google_signIn } = useContext(Auth_context);
    // get form info
    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email")
        const password = formData.get("password")

        create_user(email, password)
    }

    return (
        <div>
            <div className=' border shadow-lg w-2/6 mx-auto py-5 rounded-md'>
                <h2 className='text-2xl text-center font-bold'>
                    Register your Account
                </h2>
                <form
                    onSubmit={handleRegister}
                    action="" className=''>
                    {/* email part */}
                    <div className="relative w-10/12 mx-auto mt-6">
                        <input type="email"
                            name="email"
                            required
                            className=" w-full border rounded-md inp" />
                        <label
                            className="lab text-lime-500 leading-none">
                            Enrer your email
                        </label>
                    </div>
                    {/* password div */}
                    <div className="relative w-10/12 mx-auto mt-6">
                        <input type={`${viewpass ? "text" : "password"}`}
                            name="password"
                            required
                            className=" w-full border rounded-md inp" />
                        <label
                            className="lab text-lime-500 leading-none">
                            Enrer your password
                        </label>
                        {/* icon div */}
                        <div
                            onClick={() => setViewpass(!viewpass)}
                            className="absolute right-3 top-1/2 -translate-y-1/2">
                            {
                                viewpass ? <IoIosEyeOff className="cursor-pointer" /> : <IoIosEye className="cursor-pointer" />
                            }
                        </div>
                    </div>
                    {/* submit <button></button> */}
                    <button
                        className='py-2 w-3/5 mx-auto my-4 border rounded-md text-lg block font-bold bg-gradient-to-br from-lime-300 to-lime-950 hover:from-lime-200 duration-300 hover:to-lime-950 text-white'>
                        Register
                    </button>
                </form>
                <button
                    onClick={google_signIn}
                    className='py-2 w-44 mx-auto border rounded-md block'>
                    Google
                </button>

            </div>
        </div>
    );
};

export default Register_page;