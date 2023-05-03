import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Login/Register";
import ErrorPage from "../components/pages/errorpage/ErrorPage";

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  }
])

export default router;