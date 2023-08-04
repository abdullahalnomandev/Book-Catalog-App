import AddNewBook from "@/pages/AddNewBook";
import AllBooks from "@/pages/AllBooks";
import BookDetails from "@/pages/BookDetails";
import EditBook from "@/pages/EditBook";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ReadingBooks from "@/pages/RaadingBooks";
import FinishedBooks from "@/pages/FinishedBooks";
import WishBooks from "@/pages/WishBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <Register />
  },
  {
    path: "/all-books",
    element: <AllBooks />
  },
  {
    path: "/reading-books",
    element: <ReadingBooks />
  },
  {
    path: "/finished-books",
    element: <FinishedBooks />
  },
  {
    path: "/wish-books",
    element: <WishBooks />
  },
  {
    path: "/add-new-book",
    element: (
      <PrivateRoute>
        <AddNewBook />
      </PrivateRoute>
    )
  },
  {
    path: "/book/:bookId",
    element: (
      <PrivateRoute>
        <BookDetails />
      </PrivateRoute>
    )
  },
  {
    path: "/book/edit/:bookId",
    element: (
      <PrivateRoute>
        <EditBook />
      </PrivateRoute>
    )
  }
]);

export default router;
