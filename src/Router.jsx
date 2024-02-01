import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Summary from "./pages/Summary";


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
        {
            path:'/:id',
            element: <Summary></Summary>,
            loader: () => fetch(`https://api.tvmaze.com/search/shows?q=all`)
          },
    ]
}
])

export default myRouter;