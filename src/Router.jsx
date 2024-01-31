import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";


const myRouter = createBrowserRouter([
{
    path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
    ]
}
])

export default myRouter;