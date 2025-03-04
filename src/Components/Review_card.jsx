import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import log_img from '../assets/react.svg';
const Review_card = () => {
    return (
        <div className="border shadow-md rounded-md px-6 py-2">
            {/* comment header section */}
            <div className="flex items-center justify-between">
                <RiDoubleQuotesL />
                <h3 className="text-lg font-bold">11/02/2025</h3>
            </div>
            {/* comment section */}
            <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur animi, accusamus natus iure ducimus, suscipit vero ratione ipsam impedit repellat deserunt molestiae dolores beatae amet asperiores molestias dicta a.
            </p>
            {/* comment footer section */}
            <div className="flex items-center gap-5 mt-10">
                {/* img section */}
                <div className='h-10 w-10 rounded-full'>
                    <img src={log_img} alt="" className='object-cover w-full h-full' />
                </div>
                {/* userName and rating section */}
                <div>
                    <h2 className='text-xl font-bold'>Hriodoy Munda</h2>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={4}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default Review_card;