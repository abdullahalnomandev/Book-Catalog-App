/* eslint-disable @typescript-eslint/no-unused-vars */
import Layout from "@/layouts";
import {
  useDeleteBookMutation,
  usePostReviewMutation,
  useSingleBookQuery
} from "@/redux/features/book/bookApi";
import { useAppSelector } from "@/redux/hook";
import { IReview } from "@/types/books";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate, useParams, useRoutes } from "react-router-dom";

const BookDetails = () => {
  const parm = useParams();
  const id = parm?.bookId as string;

  const navigate = useNavigate();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showReviewSubmit, setShowReviewSubmit] = useState(true);
  const [review, setReview] = useState("");


  const {
    data: bookDetails,
    isLoading,
    isError,
    isSuccess
  } = useSingleBookQuery(id);
  const [postReview, { isSuccess: isReviewSuccess }] = usePostReviewMutation(
    bookDetails?.data?.reviews?.review?._id
  );

  const [deleteBook] = useDeleteBookMutation(
    bookDetails?.data?.reviews?.review?._id
  );

  const { name ,username} = useAppSelector((state) => state.user.user);


  const handleDelete = () => {
    setShowConfirmation(true);
    
  };

  const handleConfirmDelete = () => {
    // Implement book deletion logic here
    deleteBook(bookDetails?.data?._id);
    setShowConfirmation(false);
    toast.success("Book Deleted successfully");
    navigate('/')

  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleShowReviewSubmit = () => {
    setShowReviewSubmit(true);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
    postReview(e.target.value);
  };

  const handleSubmitReview = (id: string) => {
    // Implement review submission logic here
    const reviewInfo = {
      reviewId: id,
      data: {
        name: name,
        review
      }
    };
    postReview(reviewInfo);
    toast.success("Review successfully added");
  };

  console.log("review", isLoading, isReviewSuccess);
  console.log(review, "review");

  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-slate p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">
              {bookDetails?.data?.title}
            </h1>
            <p className="text-sm mb-2">Author: {bookDetails?.data?.author}</p>
            <p className="text-sm mb-4">Genre: {bookDetails?.data?.genre}</p>
            <p className="text-sm mb-4">
              Publication Date:{" "}
              {new Date(
                bookDetails?.data?.publicationDate
              ).toLocaleDateString()}
            </p>

            {showReviewSubmit ? (
              <div className="mb-4">
                <Toaster position="top-center" reverseOrder={false} />

                <input
                  type="text"
                  value={review}
                  onChange={handleReviewChange}
                  className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Write your review here"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
                  onClick={() => handleSubmitReview(bookDetails?.data?._id)}
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

            {bookDetails?.data?.username === username && (
              <div className="flex justify-between mt-4">
                <Link
                  to={`/book/edit/${bookDetails?.data?._id}`}
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
            )}

            {showConfirmation && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg">
                  <p>Are you sure you want to delete this book?</p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                      onClick={() => handleConfirmDelete()}
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
            {bookDetails?.data?.reviews?.length > 0 && (
              <h2 className="text-lg font-bold mb-2">Reviews</h2>
            )}
            <ul className="mb-4">
              {bookDetails?.data?.reviews.map(
                (review: IReview, index: string) => (
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
                        <p className="text-base font-medium text-blue-400">
                          {review?.name}
                        </p>
                        <p className="text-base font-medium">
                          {review?.review}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </ul>
          </>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
