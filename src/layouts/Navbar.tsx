import { signOut } from "@/redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { email, name, username } = useAppSelector((state) => state.user.user);
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
    toast.success("Logged out!");
    navigate("/");
  };
  return (
    <nav className="bg-gray-800 ">
      <div className=" max-[600px]:p-3  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-white">Book Catalog</h1>
        </Link>
        <Toaster position="top-center" reverseOrder={false} />

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
