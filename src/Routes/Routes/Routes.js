import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Blogs/Blogs"
import ElectricCarList from "../../Pages/Home/CategoriesSection/ElectricCarList";
import LuxuryCarList from "../../Pages/Home/CategoriesSection/LuxuryCarList";
import MicroBusCarList from "../../Pages/Home/CategoriesSection/MicroBusCarList";
import Register from "../../Pages/Register/Register";
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Error404Page from "../../Error404Page/Error404Page";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes"
import DashBoardLayOut from "../../LayOut/DashBoardLayOut";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";

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
            },
            
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoutes><DashBoardLayOut></DashBoardLayOut></PrivateRoutes>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/allsellers',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AllBuyers></AllBuyers>
            }
        ]
    },







    {
        path:'*',
        element:<Error404Page></Error404Page>
    }
])


export default router;