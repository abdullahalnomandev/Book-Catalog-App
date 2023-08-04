// const booksData = [
//   {
//     title:
//       "The Great Gatsby ami ki janina  ajtriejt5rt5kl54j6 oi4ujiotjqoij viiorujoi34",
//     author: "F. Scott Fitzgerald",
//     genre: "Fiction",
//     publication_date: "April 10, 1925",
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Fiction",
//     publication_date: "July 11, 1960",
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     genre: "Dystopian Fiction",
//     publication_date: "June 8, 1949",
//   },
//   {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     genre: "Romance",
//     publication_date: "January 28, 1813",
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowling",
//     genre: "Fantasy",
//     publication_date: "June 26, 1997",
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     genre: "Fantasy",
//     publication_date: "September 21, 1937",
//   },
//   {
//     title: "Brave New World",
//     author: "Aldous Huxley",
//     genre: "Science Fiction",
//     publication_date: "October 18, 1949",
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     genre: "Fiction",
//     publication_date: "July 16, 1951",
//   },
//   {
//     title: "The Lord of the Rings: The Fellowship of the Ring",
//     author: "J.R.R. Tolkien",
//     genre: "Fantasy",
//     publication_date: "July 29, 1954",
//   },
//   {
//     title: "The Hunger Games",
//     author: "Suzanne Collins",
//     genre: "Science Fiction",
//     publication_date: "September 14, 2008",
//   },
//   {
//     title: "Frankenstein",
//     author: "Mary Shelley",
//     genre: "Gothic Fiction",
//     publication_date: "January 1, 1818",
//   },
//   {
//     title: "The Odyssey",
//     author: "Homer",
//     genre: "Epic Poetry",
//     publication_date: "8th century BCE",
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     genre: "Fiction",
//     publication_date: "1988",
//   },
//   {
//     title: "Alice's Adventures in Wonderland",
//     author: "Lewis Carroll",
//     genre: "Fantasy",
//     publication_date: "July 4, 1865",
//   },
//   {
//     title: "The Picture of Dorian Gray",
//     author: "Oscar Wilde",
//     genre: "Gothic Fiction",
//     publication_date: "July 1, 1890",
//   },
//   {
//     title: "The Great Expectations",
//     author: "Charles Dickens",
//     genre: "Fiction",
//     publication_date: "August 1861",
//   },
//   {
//     title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
//     author: "C.S. Lewis",
//     genre: "Fantasy",
//     publication_date: "October 16, 1950",
//   },
//   {
//     title: "The Road",
//     author: "Cormac McCarthy",
//     genre: "Post-apocalyptic Fiction",
//     publication_date: "September 26, 2006",
//   },
//   {
//     title: "The Kite Runner",
//     author: "Khaled Hosseini",
//     genre: "Fiction",
//     publication_date: "May 29, 2003",
//   },
//   {
//     title: "Moby-Dick",
//     author: "Herman Melville",
//     genre: "Adventure Fiction",
//     publication_date: "October 18, 1851",
//   },
// ];

import Layout from "@/layouts";
// import { Link } from "react-router-dom";

// const AllBooks: React.FC = () => {
//   return (
//     <div className="container mx-auto">
//       {/* Search bar */}
//       <div className="p-4">
//         <input
//           type="text"
//           placeholder="Search by Title, Author, or Genre"
//           className="border rounded-md p-2 w-full sm:w-64"
//         />
//       </div>

//       {/* Filtering options */}
//       <div className="p-4">
//         {/* Add filtering options here (Genre & Publication Year) */}
//         {/* For example: */}
//         <div className="flex space-x-4">
//           <div>Filter by Genre:</div>
//           <div>Action</div>
//           <div>Sci-Fi</div>
//           <div>Mystery</div>
//           {/* Add more genres here */}
//         </div>
//         <div className="flex space-x-4 mt-4">
//           <div>Filter by Year:</div>
//           <div>2023</div>
//           <div>2022</div>
//           <div>2021</div>
//           {/* Add more years here */}
//         </div>
//       </div>

//       {/* Book list */}
//       <h2 className=" ml-4 text-2xl font-bold">Top 10 Recently Added Books</h2>

//       <div className="grid grid-cols-12 ">
//         {books.map(({ title, author,genre, publication_date }) => (
//           <div className="col-span-12 m-4 sm:col-span-6 md:col-span-4 lg:col-span-3">
//             <div className="bg-white rounded-lg shadow-md p-4 mb-4">
//               <h3 className="text-xl font-semibold mb-2">{title}</h3>
//               <p className="text-gray-600">Author: {author}</p>
//               <p className="text-gray-600">Genre: {genre}</p>
//               <p className="text-gray-600">
//                 Publication Date: {publication_date}
//               </p>
//             </div>
//             {/* Add more books here */}
//           </div>
//         ))}
//       </div>

//       {/* "Add New" Button */}
//       <div className="p-4">
//         <Link to="/add-new-book">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//             Add New
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AllBooks;
import { useState } from "react";
import FilterOptions from "../components/ui/FilterOptions";
import SearchBar from "../components/ui/Searchbar";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { IBook } from "@/types/books";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/redux/hook";
import { addToFinishedList, addToReadingList, addToWhiteList } from "@/redux/features/book/bookSlice";

const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // let query = `searchTerm=${searchTerm}`;
  const url = `searchTerm=${searchTerm}${selectedGenre !== "" ? `&genre=${selectedGenre}` : ""
  }${selectedYear !== "" ? `&publicationDate=${selectedYear}` : ""}`;

  const {
    data: booksData,
    isError,
    isSuccess,
    isLoading
  } = useGetBooksQuery(url);



  // Function to handle search by title, author, or genre
  const handleSearch = (value: string) => {
    setSearchTerm(value.toLowerCase());
  };

  // Function to handle filtering by genre
  const handleGenreFilter = (genre: string) => {
    setSelectedGenre(genre);
  };

  // Function to handle filtering by publication year
  const handlePublicationYearFilter = (year: string) => {
    setSelectedYear(year);
  };


  console.log(isError, isSuccess, isLoading);

  const genres = Array.from(new Set(booksData?.data?.map((book: IBook) => book?.genre)));
  const publicationYears = Array.from(new Set(booksData?.data?.map((book: IBook) => book.publicationDate)));


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
    <Layout>
      <div className="container mx-auto py-8">
        <SearchBar handleSearch={handleSearch} />
        <div>
          <FilterOptions
            genres={genres}
            publicationYears={publicationYears}
            handleGenreFilter={handleGenreFilter}
            handlePublicationYearFilter={handlePublicationYearFilter}
          />
          {isLoading && (
            <h1 className="text-3xl py-4 font-bold text-center  text-blue-600 animate-pulse">
              Loading...
            </h1>
          )}
        </div>
        <div className="grid grid-cols-12 ">
          {booksData?.data?.map(({ title, author, genre, _id ,publicationDate}: IBook) => (
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
        {!booksData?.data?.length && (
          <div className="flex justify-center items-center ">
            <h1 className="text-4xl text-gray-600">Data Not Found</h1>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllBooks;
