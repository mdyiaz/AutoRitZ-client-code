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
import AdminRoutes from "../PrivateRoutes/AdminRoutes";
import AddProductBySeller from "../../Pages/Dashboard/AddProductBySeller/AddProductBySeller";
import MyProducts from "../../Pages/Dashboard/AddProductBySeller/MyProducts";
import BuyerRoutes from "../PrivateRoutes/BuyerRoutes";
import SellerRoute from "../PrivateRoutes/SellerRoute";

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
                element:<BuyerRoutes><MyOrders></MyOrders></BuyerRoutes>
            },
            {
                path:'/dashboard/addproduct',
                element:<SellerRoute><AddProductBySeller></AddProductBySeller></SellerRoute>
            },
            { 
                path:'/dashboard/myproducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/allsellers',
                element:<AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
           
        ]
    },







    {
        path:'*',
        element:<Error404Page></Error404Page>
    }
])


export default router;