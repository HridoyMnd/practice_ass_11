import { useContext, useState } from 'react';
import '../Custom_css/Focus.css'
import { Auth_context } from '../Api/Context';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const Login_page = () => {
    const { google_signIn, user_signIn } = useContext(Auth_context);
    const [viewpass, setViewpass] = useState(false)
    const handleSignIn = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email")
        const password = formData.get("password")
        // sing in with email and password
        user_signIn(email, password)
    }

    return (
        <div className=' border shadow-lg w-2/6 mx-auto py-5 my-10 rounded-md'>
            <h2 className='text-2xl text-center font-bold'>
                Login to your Account
            </h2>
            <form
                onSubmit={handleSignIn}
                action="" className=''>
                {/* email part */}
                <div className="relative w-10/12 mx-auto mt-6">
                    <input type="email"
                        name='email'
                        required
                        className=" w-full border rounded-md inp" />
                    <label
                        className="lab text-lime-500 leading-none bg-white">
                        Enrer your email
                    </label>
                </div>
                {/* password div */}
                <div className="relative w-10/12 mx-auto mt-6">
                    <input type={`${viewpass ? "text" : "password"}`}
                        name='password'
                        required
                        className=" w-full border rounded-md inp" />
                    <label
                        className="lab text-lime-500 leading-none bg-white">
                        Enrer your password
                    </label>
                    {/* password show icon */}
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
                    Login
                </button>
            </form>
            <button
                onClick={() => google_signIn()}
                className='py-2 w-44 mx-auto border rounded-md block'>
                Google
            </button>

        </div>
    );
};

export default Login_page;