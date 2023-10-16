import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCoffee from "../Pages/AddCoffee";
import Home from "../Pages/Home";
import CoffeeDetails from "../Pages/CoffeeDetails/CoffeeDetails";
import CoffeeUpdate from "../Pages/CoffeeUpdate/CoffeeUpdate";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/coffees')
            },
            {
                path:'/addCoffee',
                element: <AddCoffee></AddCoffee>
            },

            {
                path: '/coffeeDetails/:id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/updateCoffee/:id',
                element: <CoffeeUpdate></CoffeeUpdate>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }     

            
        ]
    }
])
export default router;