import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Login/Register";
import ErrorPage from "../components/pages/errorpage/ErrorPage";
import Blog from "../components/pages/blog/Blog";
import RecipeDetails from "../components/pages/home/RecipeDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/recipe/:id',
        element: <RecipeDetails></RecipeDetails>
      },
    ]
  }
])

export default router;