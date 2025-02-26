
import "./Focus.css"
const Focus = () => {

    return (

            <div className="relative bg-black p-10 w-1/4 mx-auto">
                <input type="text"
                    required
                    className=" w-11/12 text-lg rounded-md inp" />
                <label
                    className="lab">
                    Enrer your name
                </label>
            </div>
    );
};

export default Focus;