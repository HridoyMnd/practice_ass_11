import { useContext } from "react";
import { Auth_context } from "../Api/Context";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Review = () => {
  const { user } = useContext(Auth_context);
  const { id } = useParams();

  //   handle review submit
  const handleReviewPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const comment = formData.get("comment");
    const viewer_name = formData.get("viewer_name");
    const viewer_img = formData.get("viewer_img");
    const rating = formData.get("rating");
    const review_info = { comment, rating, id, viewer_name, viewer_img };
    console.log(review_info);
    // post product review
    // addReview(review_info)
    //   .then((res) => {
    //     Swal.fire({
    //       title: res.massage,
    //       text: "Welcome back to your dashboard.",
    //       icon: "success",
    //       confirmButtonText: "Continue",
    //       timer: 3000,
    //     });
    //   })
    //   .catch((err) => {
    //     Swal.fire({
    //       title: "Review Add Failed",
    //       err,
    //       text: "Welcome back to your dashboard.",
    //       icon: "error",
    //       confirmButtonText: "Continue",
    //       timer: 3000,
    //     });
    //   });
  };

  return (
    <div>
      <div className="border py-4 my-5">
        <h2 className="text-3xl font-bold text-center mb-9 max-md:text-2xl">
          Place Your Comment Here
        </h2>
        <div className="w-3/4 p-5 mx-auto max-md:w-11/12 shadow-md border rounded-lg">
          <form
          onSubmit={handleReviewPost}
          >
            {/* Name and img url input field */}
            <div className="flex gap-4 max-sm:flex-col">
              <div className="w-1/2 max-sm:w-10/12 mx-auto">
                <label> Name</label>
                <input
                  type="text"
                  name="viewer_name"
                  value={user?.displayName}
                  className="py-2 border block w-full px-3 outline-none rounded-md focus:border-red-800 my-2 focus:border-opacity-40"
                />
              </div>
              <div className="w-1/2 max-sm:w-10/12 mx-auto">
                <label>Image</label>
                <input
                  type="text"
                  name="viewer_img"
                  value={user?.photoURL}
                  className="py-2 border block w-full px-3 outline-none rounded-md focus:border-red-800 my-2 focus:border-opacity-40"
                />
              </div>
            </div>
            {/* comment and rating input field */}
            <div className="flex gap-4 max-sm:flex-col">
              <div className="w-1/2 max-sm:w-10/12 mx-auto ">
                <label> Comment</label>
                <textarea
                  type="text"
                  name="comment"
                  required
                  placeholder="your comment here"
                  className="py-2 border block w-full px-3 outline-none rounded-md focus:border-red-800 my-2 focus:border-opacity-40"
                />
              </div>
              <div className="w-1/2 max-sm:w-10/12 mx-auto">
                <label> Rating</label>
                <input
                  type="number"
                  name="rating"
                  min={1}
                  max={5}
                  step={0.1}
                  required
                  placeholder="your rating here"
                  className="py-2 border block w-full px-3 outline-none rounded-md focus:border-red-800 my-2 focus:border-opacity-40"
                />
              </div>
            </div>
            {/* review submit button */}
            <button
              type="submit"
              className="text-lg font-medium hover:bg-opacity-40 duration-300 px-5 py-2 rounded-md w-3/6 bg-red-800 bg-opacity-20 mx-auto block my-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
