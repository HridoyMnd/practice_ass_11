import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Featured_room from "../Components/Featured_room";
import Review_slider from "../Components/Review_slider";
import HotelLocation from "../Components/HotelLocation";

const Home = () => {
    return (
        <div className="my-10">
             <Helmet>
                <title>Home Page</title>
             </Helmet>
            <Banner />
            <HotelLocation/>
            <Featured_room />
            <Review_slider />
        </div>
    );
};

export default Home;