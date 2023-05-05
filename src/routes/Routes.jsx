import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Register from "../components/pages/Login/Register";
import ErrorPage from "../components/pages/errorpage/ErrorPage";
import Blog from "../components/pages/blog/Blog";
import RecipeDetails from "../components/pages/home/RecipeDetails";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/pages/login/Login";

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
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>, 
        loader: ({ params }) => fetch(`https://hungry-mexicano-server-iibrahim70.vercel.app/recipe/${params.id}`)
      },
    ]
  }
])

export default router;