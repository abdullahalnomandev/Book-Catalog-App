// BookForm.tsx
interface Book {
  title: string;
  username: string;
  author: string;
  genre: string;
  publicationDate: string;
}

import Layout from "@/layouts";
import { usePostBookMutation } from "@/redux/features/book/bookApi";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddNewBook: React.FC = () => {
 const { username } = useAppSelector((state) => state.user.user);

  const [bookData, setBookData] = useState<Book>({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    username
  });


  const [postBook, { isLoading, isSuccess, isError }] = usePostBookMutation();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., send data to the server
    const options = {
      data: bookData
    };
    postBook(options);
    setBookData({
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
      username:""
    });
    toast.success("Book Added successfully.");
  };


  console.log(isLoading, isSuccess, isError);
 
console.log(isSuccess,"isSuccess");

  return (
    <Layout>
      <div className="w-full max-w-md mx-auto py-14">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3 className="ml-6 pb-2 text-2xl   font-extrabold  capitalize text-blue-900 mb-2 md:block hidden pt-3 ">
            Add New Book
          </h3>
          <Toaster position="top-center" reverseOrder={false} />
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
              value={bookData.publicationDate}
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
              Create Book
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddNewBook;
