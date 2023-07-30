import AddNewBook from "@/pages/AddNewBook";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import EditBook from "@/pages/EditBook";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/all-books",
    element: <AllBooks />,
  },
  {
    path: "/add-new-book",
    element: <AddNewBook />
  },
  {
    path: "/book/:bookId",
    element: <BookDetails />
  },
  {
    path: "/book/edit/:bookId",
    element: <EditBook />
  },
]);

export default router;
