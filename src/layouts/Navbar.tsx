import { signOut } from "@/redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { email, name, username } = useAppSelector((state) => state.user.user);
  const { readingList,finishedList,whiteList } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  console.log(email, name, username, "ok");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(signOut());
    navigate("/");
  };
  return (
    <nav className="bg-gray-800 ">
      <div className=" max-[600px]:p-3  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-white">Book Catalog</h1>
        </Link>
        <nav className="bg-gray-900 text-white p-4">
          <div className="flex items-center gap-3">
            <Link to="/wish-books" className="relative cursor-pointer">
              <svg
                className="w-5 h-5 mr-2 bg-green-500 "
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
              <span className="absolute top-0 right-0 p-1 bg-red-600 rounded-full text-xs">
                {whiteList.length}
              </span>
            </Link>
            <Link to="/reading-books" className="relative cursor-pointer">
              <svg
                className="w-5 h-5 mr-2 bg-red-500"
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
              <span className="absolute top-0 right-0 p-1 bg-red-600 rounded-full text-xs">
                {readingList.length}
              </span>
            </Link>
            <Link to="/finished-books" className="relative cursor-pointer">
              <svg
                className="w-5 h-5 mr-2 bg-purple-500"
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
              <span className="absolute top-0 right-0 p-1 bg-red-600 rounded-full text-xs">
                {finishedList.length}
              </span>
            </Link>
          </div>
        </nav>

        <div className="">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className=" space-x-4 flex items-center justify-end h-16">
                <Link
                  to="/all-books"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Books
                </Link>
                <Link
                  to="/add-new-book"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add New Book
                </Link>
                {!email && (
                  <>
                    <Link
                      to="/login"
                      className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/sign-up"
                      className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sign Up
                    </Link>
                  </>
                )}

                {email && (
                  <div className="relative">
                    {/* User Profile Button */}
                    <button
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-800 text-white"
                      onClick={toggleDropdown}
                    >
                      <span className="mr-2">{name}</span>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute right-0 mt-2 w-48 md:w-56 bg-white rounded-lg shadow-lg">
                        <ul className="py-2">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                              {email}
                            </a>
                          </li>

                          <li>
                            <hr className="my-2 border-gray-200" />
                          </li>
                          <li>
                            <button
                              className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-200"
                              onClick={handleLogout}
                            >
                              Log Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Add any additional elements on the right side of the navbar */}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/all-books"
            className=" block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            All Books
          </Link>
          <Link
            to="/add-new-book"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Add New Book
          </Link>
          {!email && (
            <>
              <Link
                to="/login"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </Link>
            </>
          )}

          {email && (
            <div className="relative">
              {/* User Profile Button */}
              <button
                className="flex items-center justify-center p-2 rounded-lg bg-gray-800 text-white"
                onClick={toggleDropdown}
              >
                <span className="mr-2">{name}</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              {isOpen && (
                <div className=" right-0 mt-2 w-48 md:w-56 bg-white rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {email}
                      </a>
                    </li>

                    <li>
                      <hr className="my-2 border-gray-200" />
                    </li>
                    <li>
                      <button
                        className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-200"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
