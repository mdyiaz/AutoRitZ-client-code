import React from 'react';
import Banner from '../Banner/Banner';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CategoriesSection></CategoriesSection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;