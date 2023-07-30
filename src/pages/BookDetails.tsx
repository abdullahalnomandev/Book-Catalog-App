import Layout from "@/layouts";
import { useState } from "react";
import { Link } from "react-router-dom";

const BookDetails = () => {
  // const {bookId} = useParams();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showReviewSubmit, setShowReviewSubmit] = useState(false);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState<string[]>([
    "Great book!",
    "Highly recommended!",
    "Enjoyed every page.",
  ]);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    // Implement book deletion logic here
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleShowReviewSubmit = () => {
    setShowReviewSubmit(true);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = () => {
    // Implement review submission logic here
    setReviews([...reviews, review]);
    setReview("");
    setShowReviewSubmit(false);
  };
  const currentDate = new Date().toLocaleString();

  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-slate p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Title of the Book</h1>
            <p className="text-sm mb-2">Author: John Doe</p>
            <p className="text-sm mb-4">Genre: Fiction</p>
            <p className="text-sm mb-4">Publication Date: July 30, 2023</p>

            {showReviewSubmit ? (
              <div className="mb-4">
                <input
                  type="text"
                  value={review}
                  onChange={handleReviewChange}
                  className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Write your review here"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                  onClick={handleSubmitReview}
                >
                  Submit Review
                </button>
              </div>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                onClick={handleShowReviewSubmit}
              >
                Write a Review
              </button>
            )}

            <div className="flex justify-between mt-4">
              <Link to='/book/edit/4'
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Edit Book
              </Link>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={handleDelete}
              >
                Delete Book
              </button>
            </div>

            {showConfirmation && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg">
                  <p>Are you sure you want to delete this book?</p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                      onClick={handleConfirmDelete}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                      onClick={handleCancelDelete}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <>
            <h2 className="text-lg font-bold mb-2">Reviews</h2>
            <ul className="mb-4">
              {reviews.map((review, index) => (
                <div key={index}>
                  <div className="flex items-start mb-5">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium">{review}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {currentDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
