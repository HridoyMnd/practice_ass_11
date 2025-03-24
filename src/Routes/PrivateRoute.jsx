import { useContext } from "react";
import { Auth_context } from "../Api/Context";
import { Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
const {user} = useContext(Auth_context);

if(user){
    return children;
}
else{
    return <Navigate to="/login"></Navigate>
}


};

export default PrivateRoute;