import { useContext } from "react";
import { Auth_context } from "../Api/Context";
import { Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
const {user} = useContext(Auth_context);
const location = useLocation();
if(user){
    return children;
}
else{
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}


};

export default PrivateRoute;