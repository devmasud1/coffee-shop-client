import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCoffee from "../Pages/AddCoffee";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/addCoffee',
                element: <AddCoffee></AddCoffee>
            }
        ]
    }
])
export default router;