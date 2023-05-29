import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/register/Signup";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Blog from "../pages/blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Signin from "../pages/register/Signin";
import Home from "../pages/home/Home";
import Main from "../layout/Main";
import RecipeDetails from "../components/recipedetails/RecipeDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/signin',
        element: <Signin/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/recipe/:id',
        element: <PrivateRoute><RecipeDetails/></PrivateRoute>, 
        loader: ({ params }) => fetch(`https://hungry-mexicano-server-iibrahim70.vercel.app/recipe/${params.id}`)
      },
    ]
  }
])

export default router;