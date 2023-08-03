// BookForm.tsx

import Layout from "@/layouts";
import {
  useSingleBookQuery,
  useUpdateBookMutation
} from "@/redux/features/book/bookApi";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

interface Book {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const EditBook: React.FC = () => {
  const [bookData, setBookData] = useState<Book>({
    title: "",
    author: "",
    genre: "",
    publicationDate: ""
  });
  const parm = useParams();
  const id = parm?.bookId as string;

  const { data: bookDetails } = useSingleBookQuery(id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    setBookData(bookDetails?.data);
  }, []);

  const [updateBook] = useUpdateBookMutation(
    bookDetails?.data?._id
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., send data to the server
    console.log("Submitted Book Data:", bookData);
    const updatedBookData = {
      id: id,
      bookData: {
        title: bookData.title,
        author: bookData.author,
        genre: bookData.genre,
        publicationDate: bookData.publicationDate
      }
    };
    updateBook(updatedBookData);
    toast.success("Book updated successfully.");
  };

  const inputDate = new Date(bookData.publicationDate);
  // Calculate the target date (input date + 5 days)
  const targetDate = new Date(inputDate);
  targetDate.setDate(inputDate.getDate() + 5);

  // Get the year, month, and day components of the target date
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, "0");
  const day = String(targetDate.getDate()).padStart(2, "0");

  // Format the target date as "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <Layout>
      <div className="w-full max-w-md mx-auto py-14">
        <Toaster position="top-center" reverseOrder={false} />

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3 className="ml-6 pb-2 text-2xl   font-extrabold  capitalize text-blue-900 mb-2 md:block hidden pt-3 ">
            Edit Book
          </h3>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="genre"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={bookData.genre}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="publicationDate"
            >
              Publication Date
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              value={formattedDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditBook;
