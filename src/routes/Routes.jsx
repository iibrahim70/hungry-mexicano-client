import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Login/Register";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Blog from "../pages/blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Main from "../components/layout/Main";
import RecipeDetails from "../components/homepage/RecipeDetails";

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
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
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