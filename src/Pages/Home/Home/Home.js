import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AdvertisedProducts from '../../Dashboard/AddProductBySeller/AdvertisedProducts';
import Banner from '../Banner/Banner';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    useTitle('Home');
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CategoriesSection></CategoriesSection>
            <ExtraSection></ExtraSection>
            <AdvertisedProducts></AdvertisedProducts>
        </div>
    );
};

export default Home;