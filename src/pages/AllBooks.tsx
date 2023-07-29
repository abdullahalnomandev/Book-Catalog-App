const booksData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publication_date: "April 10, 1925",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publication_date: "July 11, 1960",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    publication_date: "June 8, 1949",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publication_date: "January 28, 1813",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publication_date: "June 26, 1997",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publication_date: "September 21, 1937",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Science Fiction",
    publication_date: "October 18, 1949",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publication_date: "July 16, 1951",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publication_date: "July 29, 1954",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Science Fiction",
    publication_date: "September 14, 2008",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Gothic Fiction",
    publication_date: "January 1, 1818",
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic Poetry",
    publication_date: "8th century BCE",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publication_date: "1988",
  },
  {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    genre: "Fantasy",
    publication_date: "July 4, 1865",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Gothic Fiction",
    publication_date: "July 1, 1890",
  },
  {
    title: "The Great Expectations",
    author: "Charles Dickens",
    genre: "Fiction",
    publication_date: "August 1861",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    genre: "Fantasy",
    publication_date: "October 16, 1950",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-apocalyptic Fiction",
    publication_date: "September 26, 2006",
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Fiction",
    publication_date: "May 29, 2003",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure Fiction",
    publication_date: "October 18, 1851",
  },
];


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

const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  console.log(searchTerm, selectedYear, selectedGenre);

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

  // Filter the books based on search term, genre, and publication year
  // useEffect(() => {
  //   const filtered = booksData.filter((book) => {
  //     const titleMatch = book.title.toLowerCase().includes(searchTerm);
  //     const authorMatch = book.author.toLowerCase().includes(searchTerm);
  //     const genreMatch = !selectedGenre || book.genre === selectedGenre;
  //     const yearMatch = !selectedYear || book.publication_date === selectedYear;
  //     return titleMatch || authorMatch || genreMatch || yearMatch;
  //   });

  //   setFilteredBooks(filtered);
  // }, [searchTerm, selectedGenre, selectedYear]);

  const genres = Array.from(new Set(booksData.map((book) => book.genre)));
  const publicationYears = Array.from(
    new Set(booksData.map((book) => book.publication_date))
  );

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
      </div>
        <div className="grid grid-cols-12 ">
          {booksData.map(({ title, author, genre, publication_date },index) => (
            <div className="col-span-12 m-4 sm:col-span-6 md:col-span-4 lg:col-span-3" key={index}>
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">Author: {author}</p>
                <p className="text-gray-600">Genre: {genre}</p>
                <p className="text-gray-600">
                  Publication Date: {publication_date}
                </p>
              </div>
              {/* Add more books here */}
            </div>
          ))}
        </div>{" "}
    </div>
  </Layout>
  );
};

export default AllBooks;
