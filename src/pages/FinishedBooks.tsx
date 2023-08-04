
import Layout from "@/layouts";
import { useAppSelector } from "@/redux/hook";


import { IBook } from "@/types/books";
import { Link } from "react-router-dom";

const FinishedBooks = () => {
 const finishedBooks =  useAppSelector((state) => state.book.finishedList)
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-12 ">
          {finishedBooks?.map(({ title, author, genre, _id }: IBook) => (
            <div
              className="col-span-12 m-4 sm:col-span-6 md:col-span-4 lg:col-span-3"
              key={_id}
            >
              <div className="  bg-gradient-to-br  from-slate-900 to-slate-700 rounded-lg shadow-lg p-6 mb-8">
                <h3 className=" text-xl font-bold text-white h-20">
                  {title.length > 40 ? `${title.slice(0, 40)}...` : title}📚
                </h3>
                <p className="text-base text-gray-300 mb-2">Author: {author}</p>
                <p className="text-base text-gray-300 mb-2">Genre: {genre}</p>
                <p className="text-base text-gray-300 mb-4">
                  Publication Date: 20 January 2022
                </p>
                <div className="mt-4 text-base text-gray-500 italic pb-4">
                  "Expand your literary horizons 📚"
                </div>
                <div className="flex justify-end">
                  <Link to={`/book/${_id}`}>
                    <button className="bg-slate-900 w-full hover:bg-slate-600 text-white hover:text-white font-semibold py-2 px-4 border hover:border-transparent rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              {/* Add more books here */}
            </div>
          ))}
        </div>{" "}
        {!finishedBooks?.length && (
          <div className="flex justify-center items-center ">
            <h1 className="text-4xl text-gray-600">No Book Found. Please add Book. From  <Link to='/'>Home</Link></h1>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FinishedBooks;
