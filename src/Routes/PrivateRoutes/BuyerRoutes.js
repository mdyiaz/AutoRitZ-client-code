import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import useBuyer from '../../hooks/useBuyer';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const BuyerRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isBuyer, setIsBuyerLoading] = useBuyer(user?.email);
    console.log(user, isBuyer);
    const location = useLocation();

    if(loading || setIsBuyerLoading){
        return <Spinner></Spinner>
    }

    if(user && isBuyer){
        return children;
    }

    return <Navigate to="/login" state={{from: location }} replace></Navigate>
   
};

export default BuyerRoutes;