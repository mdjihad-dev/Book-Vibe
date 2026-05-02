import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import BookPage from "../pages/bookPage/BookPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/book",
        element: <BookPage/>
      },
      {
        path: '/books/:bookId',
        element: <DetailsPage/>,
        loader: () => fetch('/booksData.json')
      }
    
    ],
    errorElement: <ErrorPage/>
  },
]);
export default router;
