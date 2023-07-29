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
    </>
  );
};

export default TopAddedBooks;
