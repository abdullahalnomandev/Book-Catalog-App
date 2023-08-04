import { useGetLatestBookQuery } from "@/redux/features/book/bookApi";
import {  addToFinishedList, addToReadingList, addToWhiteList } from "@/redux/features/book/bookSlice";
import { useAppDispatch } from "@/redux/hook";
import { IBook } from "@/types/books";
import { Link } from "react-router-dom";

const TopAddedBooks = () => {

  const { data: booksData, isLoading } = useGetLatestBookQuery(undefined);

  const dispatch =  useAppDispatch();

  if (isLoading) {
    return<h1 className="text-3xl py-4 font-bold text-center  text-blue-600 animate-pulse">
      Loading...
    </h1>;
  }

  const handleAddStore = (status:string,id:string)=>{

    const data = booksData?.data.find(({_id}:{_id:string}) => _id === id)

    if (status === "finished-list") {
      dispatch(addToFinishedList(data));
    }
    if (status === "white-list") {
      dispatch(addToWhiteList(data));
    }
    if (status === "reading-list") {
      dispatch(addToReadingList(data));
    }


  }

  return (
    <>
      <h3 className="ml-6 text-2xl   font-extrabold  capitalize text-blue-900 mb-2 md:block hidden pt-3 ">
        Top 10 Recently Added Books
      </h3>
      <div className="container mx-auto "></div>
      <div className="grid grid-cols-12 ">
        {booksData?.data?.map(
          (
            { title, author, genre, _id, publicationDate }: IBook,
            index: number
          ) => (
            <div
              className="col-span-12 m-4 sm:col-span-6 md:col-span-4 lg:col-span-3"
              key={index}
            >
              <div className="  bg-gradient-to-br  from-slate-900 to-slate-700 rounded-lg shadow-lg p-6 mb-8">
                <h3 className=" text-xl font-bold text-white h-20">
                  {title.length > 40 ? `${title.slice(0, 40)}...` : title}📚
                </h3>
                <p className="text-base text-gray-300 mb-2">Author: {author}</p>
                <p className="text-base text-gray-300 mb-2">Genre: {genre}</p>
                <p className="text-base text-gray-300 mb-4">
                  Publication Date: {new Date(publicationDate).toDateString()}
                </p>
                <div className="mt-4 text-base text-gray-500 italic pb-4">
                  "Expand your literary horizons 📚"
                </div>
                <div className="button">
                  <button
                    className="flex mb-2 items-center justify-center px-6 py-1 text-green-500 bg-transparent border border-green-500 rounded-full shadow hover:bg-green-100"
                    onClick={() => handleAddStore("white-list", _id)}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4c4.4183 0 8 3.5817 8 8s-3.5817 8-8 8-8-3.5817-8-8 3.5817-8 8-8zm0 2c2.2091 0 4 1.7909 4 4s-1.7909 4-4 4-4-1.7909-4-4 1.7909-4 4-4z"
                      ></path>
                    </svg>
                    Add to Wishlist
                  </button>
                  <button
                    className="flex mb-2 items-center justify-center px-2  py-1 text-red-500 bg-transparent border border-red-500 rounded-full shadow hover:bg-red-100"
                    onClick={() => handleAddStore("reading-list", _id)}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.318a2.827 2.827 0 00-2 1.682 2.827 2.827 0 00-2-1.682c-2.64 0-4.828 2.271-4.828 5.02 0 3.588 5.01 7.815 8.186 10.152a.6.6 0 00.764 0c3.176-2.337 8.186-6.564 8.186-10.152 0-2.749-2.188-5.02-4.828-5.02zm-2.262 8.82l-.738-.715a.6.6 0 00-.847 0 .5.5 0 000 .707l1.284 1.242a.6.6 0 00.848 0l3.235-3.133a.5.5 0 000-.707.6.6 0 00-.847 0l-.738.715a1.8 1.8 0 01-2.548 0z"
                      ></path>
                    </svg>
                    Add to Reading List
                  </button>
                </div>
                <button
                  className="flex mb-2 items-center px-4 py-2 text-white bg-purple-500 rounded shadow hover:bg-purple-600"
                  onClick={() => handleAddStore("finished-list", _id)}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697A9 9 0 1120.29 9.17l-2.1 2.1M9 10H6a2 2 0 00-2 2v4h10v-4a2 2 0 00-2-2h-3m-2 6h4"
                    />
                  </svg>
                  Finished Reading
                </button>

                <div className="flex justify-end">
                  <Link
                    to={`/book/${_id}`}
                    className="bg-slate-900 w-full hover:bg-slate-600 text-white hover:text-white font-semibold py-2 px-4 border hover:border-transparent rounded"
                  >
                    More Details
                  </Link>
                </div>
              </div>

              {/* Add more books here */}
            </div>
          )
        )}
      </div>{" "}
    </>
  );
};

export default TopAddedBooks;
