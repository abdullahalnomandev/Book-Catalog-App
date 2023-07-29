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
];

const TopAddedBooks = () => {
  return (
    <>
      <h3 className="ml-6 text-2xl   font-extrabold  capitalize text-blue-900 mb-2 md:block hidden pt-3 ">
        Top 10 Recently Added Books
      </h3>
      <div className="container mx-auto "></div>
      <div className="grid grid-cols-12 ">
        {booksData.map(({ title, author, genre }, index) => (
          <div
            className="col-span-12 m-4 sm:col-span-6 md:col-span-4 lg:col-span-3"
            key={index}
          >
               <div className="  bg-gradient-to-br  from-slate-900 to-slate-700 rounded-lg shadow-lg p-6 mb-8">
                    <h3 className=" text-xl font-bold text-white h-20">
                      {title.length > 40 ? `${title.slice(0, 40)}...` : title}📚
                    </h3>
                  <p className="text-base text-gray-300 mb-2">
                    Author: {author}
                  </p>
                  <p className="text-base text-gray-300 mb-2">Genre: {genre}</p>
                  <p className="text-base text-gray-300 mb-4">
                    Publication Date: 20 January 2022
                  </p>
                  <div className="mt-4 text-base text-gray-500 italic pb-4">
                    "Expand your literary horizons 📚"
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-slate-900 w-full hover:bg-slate-600 text-white hover:text-white font-semibold py-2 px-4 border hover:border-transparent rounded">
                      Read More
                    </button>
                  </div>
                </div>

            {/* Add more books here */}
          </div>
        ))}
      </div>{" "}
    </>
  );
};

export default TopAddedBooks;
