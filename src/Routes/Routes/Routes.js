import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Blogs/Blogs"
import ElectricCarList from "../../Pages/Home/CategoriesSection/ElectricCarList";
import LuxuryCarList from "../../Pages/Home/CategoriesSection/LuxuryCarList";
import MicroBusCarList from "../../Pages/Home/CategoriesSection/MicroBusCarList";
import Register from "../../Pages/Register/Register";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/electriccarlist',
                element:<ElectricCarList></ElectricCarList>
            },
            {
                path:'/luxurycarlist',
                element:<LuxuryCarList></LuxuryCarList>
            },
            {
                path:'/microbuscarlist',
                element:<MicroBusCarList></MicroBusCarList>
            }
        ]
    }
])


export default router;