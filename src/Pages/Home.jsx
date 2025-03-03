import Banner from "../Components/Banner";
import Featured_room from "../Components/Featured_room";
import Focus from "../Custom_css/Focus";

const Home = () => {
    return (
        <div className="my-10">
           <Banner/>
           <Featured_room/>
           <Focus/>
        </div>
    );
};

export default Home;