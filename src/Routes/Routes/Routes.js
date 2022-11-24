import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Blogs/Blogs"
import ElectricCarList from "../../Pages/Home/CategoriesSection/ElectricCarList";

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
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/electriccarlist',
                element:<ElectricCarList></ElectricCarList>
            }
        ]
    }
])


export default router;